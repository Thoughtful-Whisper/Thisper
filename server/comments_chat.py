import sys
import os
import json
from collections import OrderedDict
from models.gpt import MyGPT

print("JSON 파일을 불러옵니다.")
json_file_path = sys.argv[1]
if not os.path.isfile(json_file_path):
    print("--"+json_file_path+"은 존재하는 파일이 아닙니다. 다시 확인하여주세요.")
    sys.exit(1)

with open(json_file_path, 'r', encoding='utf-8') as f:
    page = json.load(f)

if len(sys.argv) < 3 or sys.argv[2] == "":
    print("--질문 내용이 없습니다. 다시 확인하여 주세요.")
    sys.exit(1)

print("JSON 파일에서 데이터를 추출합니다.")
try:
    p_gpt = page['gpt']
except KeyError:
    print("--JSON 파일에서 데이터를 추출하는데 문제가 발생했습니다.")
    sys.exit(1)

role_system = p_gpt['role_system']
role_assistant = p_gpt['role_assistant']
for q, a in zip(p_gpt['questions'], p_gpt['answers']):
    role_assistant += q + a
role_user = sys.argv[2] + " (json 형식에 맞춰 말하지 말고 그냥 말로 해줘.)"

print(role_user)

print("GPT에게 요청을 보냅니다.")
try:
    comment_gpt = MyGPT(role_system, role_assistant)
    comment_gpt.ask(role_user)
except Exception as e:
    print(f"--GPT에게 요청을 보내고 받는데 문제가 있습니다. : {e}")
    sys.exit(1)

print("JSON 파일을 업데이트 합니다.")
try:
    j_gpt = page['gpt']
    j_gpt['questions'] += comment_gpt.get_all(json_to_text=True)['questions']
    j_gpt['answers'] += comment_gpt.get_all(json_to_text=True)['answers']

    page['gpt'] = j_gpt

    with open(json_file_path, "w", encoding='utf-8') as f:
        json.dump(page, f, indent='\t', ensure_ascii=False)
except Exception as e:
    print(f"--JSON 파일을 업데이트하는데 문제가 있습니다.: {e}")
    sys.exit(1)

print("완료. 종료합니다.")
sys.exit(0)
