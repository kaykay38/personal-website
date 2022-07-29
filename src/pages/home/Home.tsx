import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import Constants from "../../constants/Constants";
import { BodyText, HomeContainer, PageHeadingText, SubHeadingText, Link, LinkContainer } from "./Home.styled";


const Home = () => {
  return (
    <HomeContainer>

      <PageHeadingText>Mia Hunt</PageHeadingText>

      <SubHeadingText>{Constants.shortBio}</SubHeadingText>

      <BodyText>{Constants.bio}</BodyText>

      <LinkContainer>
        <Link
          href={Constants.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin style={{ verticalAlign: "middle" }} /> LinkedIn
        </Link>

        <Link
          href={Constants.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub style={{ verticalAlign: "middle" }} /> GitHub
        </Link>

        <Link
          href={Constants.email}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope style={{ verticalAlign: "middle" }} /> Email
        </Link>
      </LinkContainer>

    </HomeContainer>
  );
};

export default Home;
