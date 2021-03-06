import { useDispatch, useSelector } from "react-redux";
import { convertedMinutes } from "../../Helpers";
import { Wrapper, Info, Buttons } from "./styles";
import deezerImg from "../../Assets/deezer-icon.png";
import favoriteImg from "../../Assets/favorite-icon.png";
import favoritedImg from "../../Assets/favorite-icon-red.png";

const Card = ({ card }) => {
  const playingSong = useSelector((state) => state.playerReducer);
  const favorites = useSelector((state) => state.favoritesReducer);
  const isFavorited = favorites.find((favorite) => favorite.id === card.id);
  const dispatch = useDispatch();

  function handlePlayClick() {
    const isPlaying = playingSong.id === card.id;
    if (isPlaying) {
      dispatch({ type: "HANDLE_PLAYER", payload: {} });
      document.querySelector("audio").pause();
    } else {
      dispatch({ type: "HANDLE_PLAYER", payload: card });
    }
  }

  function handleFavoriteClick(favorited, card) {
    if (favorited) {
      dispatch({ type: "REMOVE_FAVORITE", payload: card });
    } else {
      dispatch({ type: "ADD_FAVORITE", payload: card });
    }
  }

  return (
    <Wrapper>
      <img src={card.album.cover_medium} alt="capa do album" />
      <Info>
        <p title={card.title_short}>{card.title_short}</p>
        <p>{card.artist.name}</p>
        <p>{convertedMinutes(card.duration)}</p>
      </Info>
      <Buttons>
        <a href={card.link} target="_blank" rel="noreferrer">
          <img
            src={deezerImg}
            alt="icone do Deezer"
            title="Abrir no Deezer"
            style={{ width: "33px" }}
          />
        </a>
        <button
          className={playingSong.id === card.id ? "playing" : "play"}
          title={playingSong.id ? "Stop" : "Play"}
          onClick={() => handlePlayClick()}
        ></button>
        <button onClick={() => handleFavoriteClick(isFavorited, card)}>
          <img
            src={isFavorited ? favoritedImg : favoriteImg}
            title={isFavorited ? "Remover das favoritas" : "Favoritar"}
            alt="icone de cora????o"
          />
        </button>
      </Buttons>
    </Wrapper>
  );
};

export default Card;
