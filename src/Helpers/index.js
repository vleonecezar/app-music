export function convertedTime(time) {
  return (time - (time %= 60)) / 60 + (9 < time ? ":" : ":0") + time;
}

export function scrollTop() {
  document.querySelector(".main").scrollTo(0, 0);
}
