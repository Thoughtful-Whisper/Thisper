import React, { useState } from "react";
import styled, { css } from "styled-components";
import img1 from "../Assets/Goal1.png";
import img2 from "../Assets/Goal2.png";
import img3 from "../Assets/Goal3.png";
import Modal from "react-modal";

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

const GoalContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 50rem;
  margin-top: -10rem;
  background-color: #f5f5f5;

  ${media.tablet`
  margin-top: 0rem;
  `}
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 60rem;
  width: 100%;

  ${media.desktop`
    max-width: 50rem;
  `}
  ${media.tablet`
    max-width: 40rem;
  `}
  ${media.phone`
    max-width: 20rem;
  `}
`;

const Image = styled.img`
  width: calc((100% - 10rem) / 3);
  max-width: 100%;
  object-fit: cover;

  &:not(:last-child) {
    margin-right: 5rem;
  }

  ${media.desktop`
  width: calc((100% - 10rem) / 3);
  `}
  ${media.tablet`
  width: calc((100% - 10rem) / 3);
  `}
  ${media.phone`
width: 30%;
  &:not(:last-child) {
    margin-right: 0rem;
  }
  `}
`;

const TextContainer = styled.div`
  margin-top: 1rem;
  text-align: center;
  padding-bottom: 5rem;
  ${media.desktop`
    max-width: 50rem;
  `}
  ${media.tablet`
    max-width: 40rem;
  `}
  ${media.phone`
    max-width: 20rem;
  `}
`;

const TitleText = styled.div`
  font-size: clamp(4rem, 7vw, 5rem);
  font-weight: 700;
`;

const ContentText = styled.div`
  max-width: 75rem;
  font-size: clamp(1rem, 3vw, 1.3rem);
`;

const Bold = styled.span`
  font-weight: 700;
`;

Modal.setAppElement("#root");

const Goal = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedText, setSelectedText] = useState("");

  const openModal = (text) => {
    setIsOpen(true);
    setSelectedText(text);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <GoalContainer>
      <TextContainer>
        <TitleText>Our Goal</TitleText>
        <ContentText>
          Our goal is to mediate conflicts on the internet, respect diverse
          opinions, and promote constructive discussions. Instead of enforcing
          rules, our solution focuses on guiding thought processes. Through
          this, we believe we can achieve{" "}
          <Bold>Sustainable Cities and Communities</Bold>,
          <Bold>Reduced Inequalities</Bold>, and <Bold>Gender Equality</Bold>,
          which are among the UN's 17 Sustainable Development Goals.{" "}
        </ContentText>
      </TextContainer>
      <ImageContainer>
        <Image
          src={img1}
          alt="Image 1"
          onClick={() =>
            openModal(
              "The 'Sustainable Cities and Communities' goal aligns with Thisper's commitment to contributing to the development of a safer and more inclusive digital community. This aims to create a digital community where all users respect and understand each other."
            )
          }
        />
        <Image
          src={img2}
          alt="Image 2"
          onClick={() =>
            openModal(
              "The 'Reduced Inequalities' goal relates to Thisper's focus on reducing biased information and malicious comments, thereby helping all users to share opinions and access information equally. Through this, Thisper aims to create a fair and equal communication environment that is not biased towards certain ideologies, reducing hate and discrimination."
            )
          }
        />
        <Image
          src={img3}
          alt="Image 3"
          onClick={() =>
            openModal(
              "Lastly, the 'Gender Equality' goal is where Thisper focuses on reducing gender-based discrimination in the online space. Thisper strives to create an environment where all users, regardless of gender, race, or religion, can freely express their opinions and engage in conversations"
            )
          }
        />
      </ImageContainer>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={{
          overlay: { backgroundColor: "rgba(0, 0, 0, 0.75)" },
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            border: "none",
            background: "white",
            width: "20rem",
            height: "15rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "black",
            fontSize: "0.8rem",
            textAlign: "center",
          },
        }}
        shouldCloseOnOverlayClick={true}>
        <p>{selectedText}</p>
      </Modal>
    </GoalContainer>
  );
};

export default Goal;
