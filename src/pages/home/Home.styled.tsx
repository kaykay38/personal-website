import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 80vh;
  padding: 10vw;
  text-align: center;
  align-items: center;
  justify-content: center;
`

export const PageHeadingText = styled.h2`
  font-size: 3em;
  font-family: "Courier New", Courier, monospace;
  color: #fcf7e0;
  /* color: #fbf1c7; */
  /* color: #1ba8c4; */
`

export const SubHeadingText = styled.p`
  font-size: 2em;
  font-family: "Courier New", Courier, monospace;
  /* color: #c6c2ab; */
  color: #fbf1c7;
  margin: 1em;
`

export const BodyText = styled.p`
  font-size: 2ch;
  font-family: "Courier New", Courier, monospace;
  color: #fbf1c7;
  /* color: #c6c2ab; */
  margin: 1em;
  padding-bottom: 4vh;
  text-align: center;
`

export const LinkContainer = styled.div`
  display: grid;
`
export const Link = styled.a`
  color: #fbf144;
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
`
