import React from "react";
import { Wrapper } from "./styles";
import logoImg from "../../Assets/logo.png";
import musicImg from "../../Assets/music-icon.png";
import favoritesImg from "../../Assets/heart-icon.png";

const NavBar = () => {
  return (
    <Wrapper>
      <img src={logoImg} alt="logo" />
      <ul>
        <li>
          <a href="#">
            <img src={musicImg} alt="icone de música" />
            Músicas
          </a>
        </li>
        <li>
          <a href="#">
            <img src={favoritesImg} alt="icone de coração" />
            Favoritas
          </a>
        </li>
      </ul>
    </Wrapper>
  );
};

export default NavBar;
