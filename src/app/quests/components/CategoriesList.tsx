import { categories } from "@/constants/categories";
import CategoriesListItem from "./CategoriesListItem";

function CategoriesList() {
  return (
    <ul className="flex gap-2 items-center ">
      {categories.map(({ type, label, icon }) => (
        <CategoriesListItem key={type} label={label} type={type} icon={icon} />
      ))}
    </ul>
  );
}

export default CategoriesList;
