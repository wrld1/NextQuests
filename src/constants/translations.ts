export const translations: {
  types: { [key: string]: string }; // Use an index signature for unknown types
  levels: LevelTranslations;
} = {
  types: {
    horror: "жах",
    mystic: "містика",
    detective: "детектив",
    adventures: "пригоди",
    "sci-fi": "sci-fi",
  },
  levels: {
    easy: "легка",
    medium: "середня",
    hard: "складна",
  },
};

interface LevelTranslations {
  easy: string;
  medium: string;
  hard: string;
}
