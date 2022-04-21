import React from "react";
import { FaBeer, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import S from "./Style.js";

const Navigation = (props: {}) => {
  return (
    <S.Navigation>
      <S.UL>
        <S.LI>
        <Link to='/'><span>$</span>home</Link>
        </S.LI>
        <S.LI>
        <Link to="/projects"><span>$</span>projects</Link>
        </S.LI>
        <S.LI>
        <Link to="/about"><span>$</span>about</Link>
        </S.LI>
        <S.LI>
        <Link to="/contact"><span>$</span>contact</Link>
        </S.LI>
      </S.UL>
    </S.Navigation>
  );
};

export default Navigation;