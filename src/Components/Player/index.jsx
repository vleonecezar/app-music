import React from "react";
import { PlayerA } from "./styles";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const Player = () => {
  const playerr = useSelector((state) => state.playerReducer);
  const dispatch = useDispatch();

  if (!playerr.id) return null;
  return (
    <PlayerA
      playerr={playerr.id}
      onEnded={() => dispatch({ type: "HANDLE_PLAYER", payload: {} })}
      src={playerr.id ? playerr.preview : ""}
      controls
      autoPlay
      onPlay={({ target }) => (target.volume = 0.2)}
    />
  );
};

export default Player;
