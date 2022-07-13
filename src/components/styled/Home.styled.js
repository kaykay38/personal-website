import styled from "styled-components";

const S = {}

S.HomeContainer = styled.div`
  display: grid;
  padding: 10vw;
  justify-items: center;
  justify-content: center;
  text-align: center;
`

S.PageHeader = styled.h2`
  font-size: 3em;
  font-family: "Courier New", Courier, monospace;
  /* color: #fbf1c7; */
    color: #fcf7e0;
    /* color: #1ba8c4; */
`

S.SubHeader = styled.p`
  font-size: 2em;
  font-family: "Courier New", Courier, monospace;
  /* color: #c6c2ab; */
  color: #fbf1c7;
  margin: 1em;
`

S.Body = styled.p`
  font-size: 2ch;
  font-family: "Courier New", Courier, monospace;
  /* color: #c6c2ab; */
  color: #fbf1c7;
  margin: 1em;
  padding-bottom: 4vh;
  text-align: center;
`
S.IconContainer = styled.div`
  justify-content: center;
`
S.LinkContainer = styled.div`
  display: grid;
`
S.BioLink = styled.a`
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

export default S;
