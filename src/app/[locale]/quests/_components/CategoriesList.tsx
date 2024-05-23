import { categories } from "@/constants/categories";
import CategoriesListItem from "./CategoriesListItem";
import initTranslations from "@/app/i18n";

type CategoriesListProps = {
  locale: string;
};

async function CategoriesList({ locale }: CategoriesListProps) {
  const { t } = await initTranslations(locale, ["questsPage"]);
  return (
    <ul className="flex gap-2 items-center justify-center mx-auto">
      {categories.map(({ type, label, icon }) => (
        <CategoriesListItem
          key={type}
          label={t(`${label}`)}
          type={type}
          icon={icon}
        />
      ))}
    </ul>
  );
}

export default CategoriesList;
