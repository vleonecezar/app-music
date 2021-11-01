import React from "react";
import convertedTime from "../../Helpers/formatMinutes";
import { Wrapper, Info, Buttons } from "./styles";
import favoriteImg from "../../Assets/favorite-icon.png";
import deezerImg from "../../Assets/deezer-icon.png";
import playImg from "../../Assets/play-icon.png";
import stopImg from "../../Assets/stop-icon.png";
import { useDispatch, useSelector } from "react-redux";

const Card = ({ card }) => {
  const favorites = useSelector((state) => state.favoriteReducer);
  const dispatch = useDispatch();

  function handleFavorites(card) {
    const isFavorites = favorites.find((favorite) => favorite.id === card.id);
    if (isFavorites) {
      dispatch({ type: "REMOVE_FAVORITE", payload: card });
    } else {
      dispatch({ type: "ADD_FAVORITE", payload: card });
    }
  }
  console.log(favorites);
  return (
    <Wrapper>
      <img src={card.album.cover_medium} alt="capa do album" />
      <Info>
        <p>{card.title_short}</p>
        <p>{card.artist.name}</p>
        <p>{convertedTime(card.duration)}</p>
      </Info>
      <Buttons>
        <button>
          <img
            src={deezerImg}
            alt="icone do Deezer"
            style={{ width: "33px" }}
          />
        </button>
        <button>
          <img src={playImg} alt="icone de play" />
        </button>
        <button onClick={() => handleFavorites(card)}>
          <img src={favoriteImg} alt="icone de coração" />
        </button>
      </Buttons>
    </Wrapper>
  );
};

export default Card;
