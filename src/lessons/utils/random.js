import Color from "./Color";

export function getRandomColor() {
  return new Color(
    getRandomValue(0, 256),
    getRandomValue(0, 256),
    getRandomValue(0, 256)
  );
}
export function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
export function getRandomColors(count) {
  const colors = [];
  for (let i = 0; i <= count; i++) {
    colors.push(getRandomColor());
  }
  return colors;
}
