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
  function handleNavigation(id, value) {
    if (id === "home") setAxiosOptions(API_TOP_WORLD);
    setFavoritesScreen(value);
    setCurrentPage(1);
    scrollTop();
  }

  return (
    <Wrapper>
      <Container>
        <div
          id="home"
          onClick={({ currentTarget }) =>
            handleNavigation(currentTarget.id, false)
          }
          title="Top Músicas"
        >
          <img src={logoImg} alt="logo" />
          <h2>App Music</h2>
        </div>
        <ul>
          <li>
            <button
              id="songs"
              onClick={({ target }) => handleNavigation(target.id, false)}
            >
              <img src={musicImg} alt="icone de música" />
              Músicas
            </button>
          </li>
          <li>
            <button
              id="favorites"
              onClick={({ target }) => handleNavigation(target.id, true)}
            >
              <img src={favoritesImg} alt="icone de coração" />
              Favoritas
            </button>
          </li>
        </ul>
      </Container>
    </Wrapper>
  );
};

export default NavBar;
