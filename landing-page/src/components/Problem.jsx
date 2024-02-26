import React from "react";
import Blob2 from "../Assets/Blob2.png";
import Problemmul from "../Assets/Problemmul.png";
import styled, { css } from "styled-components";

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
const ProblemSectionContainer = styled.div`
  margin-top: 10rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 50rem;
`;
const ProblemBannerContainer = styled.div`
  position: relative;
  display: flex;
  padding-top: 8rem;
  margin-top: 3rem;
`;
const ProblemBackGroundImageContainer = styled.div`
  position: absolute;
  top: 0px;
  left: -20px;
  z-index: -2;
  max-width: 15rem;

  ${media.desktop`
  max-width: 10rem;
  display:none;
  `}
`;
const ProblemImageContainer = styled.div`
  max-width: 18rem;
  margin-right: 5rem;
  margin-left: 1rem;
  margin-top: -20rem;
  flex: 1;

  ${media.desktop`
  max-width: 14rem;
  margin-right: 2rem;
  
  `}
  ${media.tablet`
  max-width: 10rem;
  margin-right: 2rem;
  `}
 
  ${media.phone`
  display: none;
  `}
`;

const ProblemTextContainer = styled.div`
  display: flex;
  margin-top: -18rem;
  margin-right: 5rem;
  flex: 1;
  flex-direction: column;

  align-items: left;

  ${media.desktop`
  margin-right: 1rem;
  margin-top: -20rem;
  `}
  ${media.phone`
  margin-right: 0rem;
  margin-top: -21.5rem;
  `}
`;

const PrimaryText = styled.text`
  font-size: clamp(1rem, 2vw, 2rem);
  max-width: 60rem;
  margin: 1.5rem 0rem;

  ${media.desktop`
  text-align: left;
    max-width: 100%;
    margin-right: 1.5rem;
    `}
  ${media.tablet`
  text-align: center;
    max-width: 90%;
    `}
  ${media.phone`
  margin: 0.2rem 1.5rem;
  text-align: center;
    max-width: 100%;
    `}
`;

const P = styled.p`
  font-size: clamp(0.5rem, 1.5vw, 1rem);
  max-width: 60rem;
  text-align: left;
  ${media.desktop`
  text-align: left;
    max-width: 100%;
    margin-right: 1.5rem;
    `}
  ${media.tablet`
  text-align: center;
    max-width: 90%;
    `}
  ${media.phone`
  margin:0.2rem 1.5rem;
  text-align: center;
    max-width: 100%;
    `}
`;
const Problem = () => {
  return (
    <ProblemSectionContainer>
      <ProblemBackGroundImageContainer>
        <img src={Blob2} alt="" />
      </ProblemBackGroundImageContainer>
      <ProblemBannerContainer>
        <ProblemImageContainer>
          <img src={Problemmul} alt="" />
        </ProblemImageContainer>
        <ProblemTextContainer>
          <PrimaryText>
            In today’s digital age, the internet has become a double-edge sword.
            while it serves as a platform for knowledge sharing and global
            communication, it also harbors a culture of excessive conflict,
            rampant criticism, and forceful ideologies.
          </PrimaryText>
          <PrimaryText>
            We see this manifest in many ways - from gender conflicts and
            political polarization, to the normalization of hate speech and the
            imposition of certain idelogies. Thes negative aspects not only
            stifle constructive debate but also breed a toxic environment that
            can be harmful to user’s mental health.
          </PrimaryText>
        </ProblemTextContainer>
      </ProblemBannerContainer>
    </ProblemSectionContainer>
  );
};

export default Problem;
