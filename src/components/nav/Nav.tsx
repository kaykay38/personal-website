import React from "react";
import { Link } from "react-router-dom";
import S from "../styled/Nav.styled";

const Navigation = (props: {}) => {
  return (
    <S.Nav>
      <S.NavLinkContainer>
        <S.NavLinkItem>
        <Link to='/'><span>$</span>home</Link>
        </S.NavLinkItem>
        <S.NavLinkItem>
        <Link to="/projects"><span>$</span>projects</Link>
        </S.NavLinkItem>
        <S.NavLinkItem>
        <Link to="/about"><span>$</span>about</Link>
        </S.NavLinkItem>
        <S.NavLinkItem>
        <Link to="/contact"><span>$</span>contact</Link>
        </S.NavLinkItem>
      </S.NavLinkContainer>
    </S.Nav>
  );
};

export default Navigation;
