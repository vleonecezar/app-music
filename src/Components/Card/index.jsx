import React from "react";
import convertedTime from "../../Helpers/formatMinutes";
import { Wrapper, Info, Buttons } from "./styles";
import favoriteImg from "../../Assets/heart-icon.png";
import deezerImg from "../../Assets/deezer-icon.png";
import playImg from "../../Assets/play-icon.png";
import stopImg from "../../Assets/stop-icon.png";

const Card = ({ card }) => {
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
        <button>
          <img src={favoriteImg} alt="icone de coração" />
        </button>
      </Buttons>
    </Wrapper>
  );
};

export default Card;
