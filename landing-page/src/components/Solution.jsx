import React from "react";
import styled, { css } from "styled-components";
import YouTube from "../Assets/Youtube.png";
import SolutionTitle from "../Assets/SolutionTitle.png";
import Blob3 from "../Assets/Blob3.png";
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
const SolutionContainer = styled.div`
  margin-top: 10rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 50rem;
`;
const SolutionBackgroundImage = styled.div`
  position: absolute;
  top: -15rem;
  right: -10px;
  z-index: -2;
  max-width: 40rem;

  ${media.desktop`
max-width: 30rem;
right: -40px;
`}
  ${media.tablet`
top: -200px;
right: -30px;
max-width: 28rem;

`}
${media.phone`
display: none;
`}
`;
const SolutionTitleImage = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  margin-top: -7rem;
  margin-right: 2rem;
  max-width: 18rem;
  ${media.desktop`max-width: 14rem;`}
  ${media.tablet`max-width: 12rem;`}
  ${media.phone`max-width: 12rem; margin-top: -15rem;`}
`;
const SoulutionSectionContainer = styled.div`
  position: relative;
  display: flex;
  margin: 2rem;
  margin-top: -20rem;
  padding-left: 3rem;
  ${media.desktop`
  margin: 1rem;
  margin-top: -30rem;
  `}
  ${media.tablet`
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;
  padding-top: 3rem;
  margin-top: -20rem;
  padding-left: 0rem;
  
  `}
  ${media.phone`
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;
  margin: 1.5rem;
  padding-top: 3rem;
  margin-top: -30rem;
  padding-left: 0rem;
  `}
`;
const SoulutionImageSeciton = styled.div`
  max-width: 33rem;

  margin-left: 3rem;
  margin-right: 7rem;

  ${media.desktop`
  max-width: 30rem;
margin-right: 2rem;
  margin-top: 10rem;`}
  ${media.tablet`
  max-width: 30rem;
margin-right: 0rem;
  margin-top: 2rem;`}
`;
const SolutionTextSeciton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;
  margin-top: 5rem;
  max-width: 70rem;
  margin-right: 2rem;

  ${media.desktop`
  margin-right:0rem;
  margin-top: 10rem;
    `}
  ${media.tablet`
  margin-right:0rem;
    `}
  ${media.phone`
  margin-right:0rem;
    `}
`;
const PrimaryText = styled.text`
  font-size: clamp(1rem, 1.5vw, 1.3rem);
  max-width: 70rem;
  margin: 1.5rem 0rem;

  ${media.desktop`
  text-align: left;
    max-width: 90%;
    margin-right: 1.5rem;
    `}
  ${media.tablet`
  text-align: center;
    max-width: 90%;
    `}
  ${media.phone`
margin: 0rem;
  text-align: center;
    max-width: 95%;
    `}
`;

const P = styled.p`
  margin-top: 1.5rem;
  ${media.phone`
margin: 0rem;
  text-align: center;
    max-width: 95%;
    `}
`;
const Solution = () => {
  return (
    <SolutionContainer>
      <SolutionBackgroundImage>
        <img src={Blob3} alt="" />
      </SolutionBackgroundImage>
      <SolutionTitleImage>
        <img src={SolutionTitle} alt="" />
      </SolutionTitleImage>
      <SoulutionSectionContainer>
        <SoulutionImageSeciton>
          <img src={YouTube} alt="" />
        </SoulutionImageSeciton>
        <SolutionTextSeciton>
          <PrimaryText>
            <P>
              Thisper analyzes YouTube comments and visualizes excessive biases
              and malicious comments in red as a warning to users. It also
              provides a chat window where users can discuss their thoughts and
              stories about the visualized comments.
            </P>
            <P>
              If a user finds a comment that they enjoyed and agreed with a lot
              being colored in red, it could be an opportunity to reflect on
              whether they have been thinking too one-sidedly. If they can have
              many conversations with GPT about this, they can naturally develop
              their ability to have logical and constructive discussions.
            </P>
            <P>
              {" "}
              In this way, Thisper will approach our current society, which
              lacks understanding and respect for others and has severe
              conflicts, like a wise whisper, making great efforts to create a
              better internet world.{" "}
            </P>
          </PrimaryText>
        </SolutionTextSeciton>
      </SoulutionSectionContainer>
    </SolutionContainer>
  );
};

export default Solution;
