import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Wrapper } from "./styles";

const Player = () => {
  const songPlaying = useSelector((state) => state.playerReducer);
  const dispatch = useDispatch();

  if (!songPlaying.id) return null;
  return (
    <Wrapper>
      <p title={songPlaying.title_short}>
        {songPlaying.title_short} - {songPlaying.artist.name}
      </p>
      <audio
        player={songPlaying.id}
        onEnded={() => dispatch({ type: "HANDLE_PLAYER", payload: {} })}
        src={songPlaying.id ? songPlaying.preview : ""}
        controls
        autoPlay
        onPlay={({ target }) => (target.volume = 0.15)}
      />
    </Wrapper>
  );
};

export default Player;
