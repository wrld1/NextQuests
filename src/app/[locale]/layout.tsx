import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "../globals.css";
import { Toaster } from "react-hot-toast";
import { i18nConfig } from "@/i18nConfig";
import { dir } from "i18next";

const raleway = Raleway({ subsets: ["cyrillic"] });

export const metadata: Metadata = {
  title: "Escape Room",
  description: "Квести під будь який смак",
  icons: {
    icon: "../favicon.ico",
  },
};

export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

export default function RootLayout({
  auth,
  children,
  params: { locale },
}: {
  auth: React.ReactNode;
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={locale} dir={dir(locale)}>
      <body className={`relative ${raleway.className}`}>
        <div className="min-h-full flex flex-col bg-backgroundPrimary text-textWhite">
          <Toaster position="top-right" />
          {auth}
          {children}
        </div>
      </body>
    </html>
  );
}
