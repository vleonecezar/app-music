import React from "react";
import { Wrapper, Container } from "./styles";
import logoImg from "../../Assets/logo.png";
import musicImg from "../../Assets/music-icon.png";
import favoritesImg from "../../Assets/heart-icon.png";

const NavBar = ({ setFavoritesScreen }) => {
  return (
    <Wrapper>
      <Container>
        <img src={logoImg} alt="logo" />
        <h2>App Music</h2>
        <ul>
          <li>
            <a href="#" onClick={() => setFavoritesScreen(false)}>
              <img src={musicImg} alt="icone de música" />
              Músicas
            </a>
          </li>
          <li>
            <a href="#" onClick={() => setFavoritesScreen(true)}>
              <img src={favoritesImg} alt="icone de coração" />
              Favoritas
            </a>
          </li>
        </ul>
      </Container>
    </Wrapper>
  );
};

export default NavBar;
