import { Category } from "@/types/Category";

export const categories: Category[] = [
  { type: "", label: "Всі квести", icon: "/icons/AllQuestsIcon.svg" },
  {
    type: "adventures",
    label: "Пригодне",
    icon: "/icons/AdventuresIcon.svg",
  },
  { type: "horror", label: "Страшне", icon: "/icons/HorrorIcon.svg" },
  { type: "mystic", label: "Містичне", icon: "/icons/MysticIcon.svg" },
  {
    type: "detective",
    label: "Детективне",
    icon: "/icons/DetectiveIcon.svg",
  },
  { type: "sci-fi", label: "Sci-fi", icon: "/icons/ScifiIcon.svg" },
];
