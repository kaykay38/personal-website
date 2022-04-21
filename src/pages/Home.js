import styled from 'styled-components'
import { FaBeer, FaGithub, FaLinkedin } from "react-icons/fa";
import React from 'react'

const Home = () => {
  return (
    <S.Container>
      <S.Header>Mia Hunt</S.Header>
      <S.SubHeader>Wanna be nerd</S.SubHeader>
      <S.A
          href="https://www.linkedin.com/in/m-a89398128/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin /> LinkedIn
        </S.A>
        <S.A
          href="https://www.github.com/kaykay38/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub /> GitHub
        </S.A>
    </S.Container>
  );
};

export default Home;

const S = {};

S.Container = styled.div`
  display: grid;
  padding: 10vw;
  justify-items: center;
  justify-content: center;
`

S.Header = styled.h2`
  font-size: 3em;
  font-family: "Courier New", Courier, monospace;
  /* color: #fbf1c7; */
    color: #fcf7e0;
    /* color: #1ba8c4; */
`;

S.SubHeader = styled.p`
  font-size: 2em;
  font-family: "Courier New", Courier, monospace;
  /* color: #c6c2ab; */
  color: #fbf1c7;
  padding-bottom: 4vh;
`
S.LI = styled.li`
  a {
    text-decoration: none;
    color: #fbf1c7;
    padding: 0pt;
    font-family: "Courier New", Courier, monospace;
    font-size: 18pt;
    &:hover {
      color: #8fc05c;
    }
    span {
      color: #777777;
    }
  }
`;

S.A = styled.a`
  color: #fbf1c7;
  text-decoration: none;
  padding: 0pt;
  font-family: "Courier New", Courier, monospace;
  font-size: 18pt;
  padding: 1vh;
  &:hover {
    color: #8fc05c;
  }
  span {
    color: #777777;
  }
`;