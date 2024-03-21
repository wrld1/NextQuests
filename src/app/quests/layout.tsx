import CategoriesList from "./components/CategoriesList";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="container mx-auto mt-12">
      <span className="text-brandOrange font-medium">квести у Києві</span>
      <h2 className="text-6xl text-textWhite font-bold mt-1">
        Оберіть тематику
      </h2>
      <div className="mt-12">
        <CategoriesList />
        {children}
      </div>
    </div>
  );
}
