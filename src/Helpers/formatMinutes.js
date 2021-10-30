export default function convertedTime(time) {
  return (time - (time %= 60)) / 60 + (9 < time ? ":" : ":0") + time;
}
