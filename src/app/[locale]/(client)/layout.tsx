import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Авторизація на Escape Room",
  description: "Квести під будь який смак",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function ClientLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  return (
    <>
      <Header locale={locale} />
      <main className="flex-auto">{children}</main>
      <Footer />
    </>
  );
}
