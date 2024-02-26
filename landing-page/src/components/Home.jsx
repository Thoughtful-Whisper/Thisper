import React from "react";
import Navbar from "./Navbar";
import Blob1 from "../Assets/Blob1.png";
import Thisper from "../Assets/Thisper.png";
import styled, { css } from "styled-components";

/*스타일*/
const sizes = {
  desktop: 1024,
  tablet: 768,
  phone: 480,
};

const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label]}px) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});

const HomeContainer = styled.div``;

const HomeBannerContainer = styled.div`
  position: relative;
  display: flex;
  padding-top: 8rem;
  margin: 0rem 5rem 0rem 7rem;

  ${media.desktop`
  margin: 0rem 1rem 0rem 3rem;
  `}
  ${media.tablet`
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;
  padding-top: 3rem;
  margin: 0rem 2rem;
  `}
  
  ${media.phone`
  padding-top: 9rem;
  `}
`;

const HomeBannerImageContainer = styled.div`
  position: absolute;
  top: -180px;
  right: -10px;
  z-index: -2;
  max-width: 45rem;

  ${media.desktop`
  max-width: 45rem;
  `}
  ${media.tablet`
  top: -80px;
  max-width: 28rem;
  `}
  ${media.phone`
  display: none;
  `}
`;

const ImageSection = styled.div`
  max-width: 30rem;
  flex: 1;

  ${media.tablet`
  width: 100%;
  max-width: 16rem; `}
`;
const TextSection = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  ${media.tablet`
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  `}
`;

/*clamp(2rem, 5vw, 4rem)
2rem: 글꼴 크기의 최소값
5vw: 이 값은 선호하는 글꼴 크기.  5vw는 뷰포트 너비의 5%를 의미. 즉, 화면 크기에 따라 동적으로 변함
4rem: 글꼴 크기의 최대값
*/
const PrimaryHeading = styled.text`
  font-size: clamp(2rem, 5vw, 7rem);
  max-width: 38rem;
  font-weight: 700;

  ${media.tablet`
  text-align: center;
    max-width: 100%;`}
`;
const PrimaryText = styled.text`
  font-size: clamp(1rem, 3.5vw, 1.5rem);
  max-width: 37rem;
  margin: 1.5rem 0rem;

  ${media.tablet`
  text-align: center;
    max-width: 100%;`}
`;
/**/
const Home = () => {
  return (
    <HomeContainer>
      <Navbar />
      <HomeBannerImageContainer>
        <img src={Blob1} alt="" />
      </HomeBannerImageContainer>
      <HomeBannerContainer>
        <TextSection>
          <PrimaryHeading>Welcome to Thisper!</PrimaryHeading>
          <PrimaryText>
            Thisper evaluates users' comments for biased or contradictory
            content, visualizes them with colors, and facilitates communication
            with GPT about these comments, helping to shape individual ethical
            values on the internet. Use Thisper to create a better internet
            world!
          </PrimaryText>
        </TextSection>
        <ImageSection>
          <img src={Thisper} alt=""></img>
        </ImageSection>
      </HomeBannerContainer>
    </HomeContainer>
  );
};

export default Home;
