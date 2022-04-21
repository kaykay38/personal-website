import styled from "styled-components";

const S = {}

S.Navigation = styled.div`
width: 100vw;
height: 80px;
background-color: #1e1e1ea1;
margin: 0px;
padding: 0px;
`
S.LogoContainer = styled.div`
width: 10vw;
height: 80px;
background-color: #ffffff;
`

S.UL = styled.ul`
display: grid;
padding: 0pt;
grid-template-columns: 1fr 1fr 1fr 1fr;
align-items: center;
justify-items: center;
list-style: none;
height: 100%;
margin: 0px;
padding: 0px;
`

S.LI = styled.li`
a {
    text-decoration: none;
    color: #fbf1c7;
    padding: 0pt;
    font-family: 'Courier New', Courier, monospace;
    font-size: 18pt;
    &:hover {
        color:  #8fc05c;
    }
    span {
        color: #777777;
    }
}
`


S.A = styled.a`
color: #fbf1c7;
text-decoration: none;
padding: 0pt;
font-family: 'Courier New', Courier, monospace;
font-size: 18pt;
&:hover {
    color:  #8fc05c;
}
span {
    color: #777777;
}
`

export default S