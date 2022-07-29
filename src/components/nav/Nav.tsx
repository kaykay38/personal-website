import React from "react";
import { Link } from "react-router-dom";
import { Nav, NavLinkContainer, NavLinkItem } from "./Nav.styled";

const Navigation = (props: {}) => {
  return (
    <Nav>
      <NavLinkContainer>
        <NavLinkItem>
        <Link to='/'><span>$</span>home</Link>
        </NavLinkItem>
        <NavLinkItem>
        <Link to="/projects"><span>$</span>projects</Link>
        </NavLinkItem>
        <NavLinkItem>
        <Link to="/about"><span>$</span>about</Link>
        </NavLinkItem>
        <NavLinkItem>
        <Link to="/contact"><span>$</span>contact</Link>
        </NavLinkItem>
      </NavLinkContainer>
    </Nav>
  );
};

export default Navigation;
