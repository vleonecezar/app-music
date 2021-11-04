import React, { useState } from "react";
import convertedTime from "../../Helpers/formatMinutes";
import { Wrapper, Info, Buttons } from "./styles";
import favoriteImg from "../../Assets/favorite-icon.png";
import favoritedImg from "../../Assets/favorite-icon-red.png";
import deezerImg from "../../Assets/deezer-icon.png";
import playImg from "../../Assets/play-icon.png";
import playingImg from "../../Assets/playing.gif";
import stopImg from "../../Assets/stop-icon.png";
import { useDispatch, useSelector } from "react-redux";

const Card = ({ card }) => {
  const playingSong = useSelector((state) => state.playerReducer);
  console.log(playingSong);
  const favorites = useSelector((state) => state.favoriteReducer);
  const isFavorited = favorites.find((favorite) => favorite.id === card.id);
  const dispatch = useDispatch();

  function handleFavorites(card) {
    if (isFavorited) {
      dispatch({ type: "REMOVE_FAVORITE", payload: card });
    } else {
      dispatch({ type: "ADD_FAVORITE", payload: card });
    }
  }

  function handleClick() {
    const isOrNot = playingSong.id === card.id;
    console.log(isOrNot);
    if (isOrNot) {
      dispatch({ type: "HANDLE_PLAYER", payload: {} });
      document.querySelector("audio").pause();
    } else {
      dispatch({ type: "HANDLE_PLAYER", payload: card });
    }
  }

  return (
    <Wrapper>
      <img src={card.album.cover_medium} alt="capa do album" />
      <Info>
        <p title={card.title_short}>{card.title_short}</p>
        <p>{card.artist.name}</p>
        <p>{convertedTime(card.duration)}</p>
      </Info>
      <Buttons>
        <a href={card.link} target="_blank" rel="noreferrer">
          <img
            src={deezerImg}
            alt="icone do Deezer"
            style={{ width: "33px" }}
          />
        </a>
        <button
          className={playingSong.id === card.id ? "playing" : "play"}
          onClick={() => handleClick()}
        ></button>
        <button onClick={() => handleFavorites(card)}>
          <img
            src={isFavorited ? favoritedImg : favoriteImg}
            alt="icone de coração"
          />
        </button>
      </Buttons>
    </Wrapper>
  );
};

export default Card;
