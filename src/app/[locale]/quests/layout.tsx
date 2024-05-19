import CategoriesList from "./_components/CategoriesList";
import React from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="container mx-auto mt-12 pt-[74px]">
      <span className="text-brandOrange font-medium">квести у Києві</span>
      <h2 className="text-6xl text-textWhite font-extrabold mt-1">
        Оберіть тематику
      </h2>
      <div className="my-12">
        <CategoriesList />
        {children}
      </div>
    </div>
  );
}
