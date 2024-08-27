import { Poppins } from "next/font/google";

import "../styles/globals.css";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Toaster } from "@/components/ui/sonner";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  subsets: ["latin"],
  variable: "--poppins-font",
});

export const metadata = {
  title: "Neeo Tech",
  description:
    "Somos especializados em construir squads multidisciplinares com senioridade para criar soluções exclusivas, combinando estratégia e design, para transformar experiências ao criar produtos digitais únicos.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={poppins.className}>
        <Header />
        {children}
        <Toaster richColors position="top-right" />
        <Footer />
      </body>
    </html>
  );
}
