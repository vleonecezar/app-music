import React from "react";
import { Wrapper, Container } from "./styles";
import logoImg from "../../Assets/logo.png";
import musicImg from "../../Assets/music-icon.png";
import favoritesImg from "../../Assets/heart-icon.png";
import { API_TOP_WORLD } from "../../Services/api";

const NavBar = ({
  setFavoritesScreen,
  setCurrentPage,
  scrollTop,
  setAxiosOptions,
}) => {
  function handleNavigation(value) {
    setFavoritesScreen(value);
    setCurrentPage(1);
    scrollTop();
  }
  /* CONSERTAR REDIRECIONAMETO PARA HOME !!!!!!!!!!!!!!!!!!!! */
  return (
    <Wrapper>
      <Container>
        <div onClick={() => setAxiosOptions(API_TOP_WORLD)} title="Home">
          <img src={logoImg} alt="logo" />
          <h2>App Music</h2>
        </div>
        <ul>
          <li>
            <a href="#" onClick={() => handleNavigation(false)}>
              <img src={musicImg} alt="icone de música" />
              Músicas
            </a>
          </li>
          <li>
            <a href="#" onClick={() => handleNavigation(true)}>
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
