const imageNames = [
  "cover-fatal-exp",
  "cover-final-frontier",
  "cover-ghost-story",
  "cover-house-in-the-woods",
  "cover-maniac",
  "cover-mars-2056",
  "cover-metro2033",
  "cover-old-ceil",
  "cover-old-house",
  "cover-ritual",
  "cover-sklep",
];

export function getRandomImagePath() {
  const randomIndex = Math.floor(Math.random() * imageNames.length);
  const randomImageName = imageNames[randomIndex];
  return `/img/${randomImageName}.jpg`;
}
