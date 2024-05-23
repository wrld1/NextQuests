import { Category } from "@/types/Category";

export const categories: Category[] = [
  { type: "all", label: "allQuests", icon: "/icons/AllQuestsIcon.svg" },
  {
    type: "adventures",
    label: "adventureQuests",
    icon: "/icons/AdventuresIcon.svg",
  },
  { type: "horror", label: "horrorQuests", icon: "/icons/HorrorIcon.svg" },
  { type: "mystic", label: "mysticQuests", icon: "/icons/MysticIcon.svg" },
  {
    type: "detective",
    label: "detectiveQuests",
    icon: "/icons/DetectiveIcon.svg",
  },
  { type: "sci-fi", label: "scifiQuests", icon: "/icons/ScifiIcon.svg" },
];
