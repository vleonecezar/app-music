export function play(item) {
  return {
    type: "PLAY_SONG",
    payload: item,
  };
}

export function stop(item) {
  return {
    type: "STOP_SONG",
    payload: item,
  };
}
