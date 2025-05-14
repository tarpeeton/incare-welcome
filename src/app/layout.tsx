import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from "next/font/google";



const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});



export const metadata: Metadata = {
  title: "СЕТЬ МЕДИЦИНСКИХ ЛАБОРАТОРИЙ ТОЧНОЙ ДИАГНОСТИКИ",
  description:
    "Наша сеть лабораторий медицинской диагностики INCARE гарантирует качество и надежность в каждом анализе. Наши врачи-лаборанты — профессионалы своего дела, готовые помочь вам заботиться о своем здоровье с уверенностью.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
