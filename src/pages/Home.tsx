import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import S from "../components/styled/Home.styled";
import ConstantVars from "../constants/constants";

const Home = () => {
  return (
    <S.HomeContainer>
      <S.PageHeader>Mia Hunt</S.PageHeader>
      <S.SubHeader>{ConstantVars.shortBio}</S.SubHeader>
      <S.Body>{ConstantVars.bio}</S.Body>
        <S.BioLink
          href="https://www.linkedin.com/in/m-a89398128/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin /> LinkedIn
        </S.BioLink>
        <S.BioLink
          href="https://www.github.com/kaykay38/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub /> GitHub
        </S.BioLink>
        <S.BioLink
          href="mailto:miaxyhunt@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope /> Email
        </S.BioLink>
    </S.HomeContainer>
  );
};

export default Home;
