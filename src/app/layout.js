import { Mulish } from "next/font/google";

import "../styles/globals.css";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";

const mulish = Mulish({ subsets: ["latin"] });

export const metadata = {
  title: "Neeo Tech",
  description: "Transformando ideias em Produtos Digitais",
};

export default function RootLayout({children}) {
  return (
    <html lang="pt-br">
      <body className={mulish.className}>
      <Header />
      {children}
      <Toaster richColors position="top-right" />
      <Footer />
      </body>
    </html>
  );
}
