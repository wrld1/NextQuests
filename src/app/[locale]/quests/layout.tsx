import CategoriesList from "./_components/CategoriesList";
import React from "react";
import initTranslations from "@/app/i18n";

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const { t } = await initTranslations(locale, ["questsPage"]);
  return (
    <div className="container mx-auto mt-12 pt-[74px]">
      <span className="text-brandOrange font-medium">{t("questsInKyiv")}</span>
      <h2 className="text-6xl text-textWhite font-extrabold mt-1">
        {t("chooseCategoryHeading")}
      </h2>
      <div className="my-12">
        <CategoriesList locale={locale} />
        {children}
      </div>
    </div>
  );
}
