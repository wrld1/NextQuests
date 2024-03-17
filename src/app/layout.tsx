import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Escape Room",
  description: "Квести під будь який смак",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-full flex flex-col">
          {/* <Header /> */}
          <main className="flex-auto">{children}</main>
          {/* <Footer /> */}
        </div>
      </body>
    </html>
  );
}
