import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./../../styles/globals.css";
import Header from "@/components/page-sections/Header/Header";
import Footer from "@/components/page-sections/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mario News",
  description: "Pagina de Noticias",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
