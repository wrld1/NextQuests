import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

const raleway = Raleway({ subsets: ["cyrillic"] });

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
      <body className={`relative ${raleway.className}`}>
        <div className="min-h-full flex flex-col bg-backgroundPrimary text-textWhite">
          <Header />

          <main className="flex-auto">
            <Toaster position="top-right" />
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
