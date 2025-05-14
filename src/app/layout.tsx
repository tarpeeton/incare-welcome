import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "СЕТЬ МЕДИЦИНСКИХ ЛАБОРАТОРИЙ ТОЧНОЙ ДИАГНОСТИКИ INCARE",
  description:
    "Наша сеть лабораторий медицинской диагностики INCARE гарантирует качество и надежность в каждом анализе. Профессиональные врачи-лаборанты помогут вам заботиться о здоровье с уверенностью. Тел: +998 71 200-40-00",
  keywords:
    "медицинская лаборатория, анализы, диагностика, incare, точная диагностика, ташкент",
  icons: {
    icon: {
      url: "https://ucarecdn.com/fd407578-0b5b-451d-8efb-27c65bcca69a/-/preview/224x224/",
      type: "image/png",
    },
  },
  openGraph: {
    title: "СЕТЬ МЕДИЦИНСКИХ ЛАБОРАТОРИЙ ТОЧНОЙ ДИАГНОСТИКИ INCARE",
    description:
      "Качественные лабораторные анализы и точная диагностика для вашего здоровья. Тел: +998 71 200-40-00",
    type: "website",
    url: "https://incare.uz",
    siteName: "INCARE Лаборатории",
    locale: "ru_RU",
    images: [
      {
        url: "https://ucarecdn.com/fd407578-0b5b-451d-8efb-27c65bcca69a/-/preview/1200x630/",
        width: 1200,
        height: 630,
        alt: "INCARE Лаборатории",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "СЕТЬ МЕДИЦИНСКИХ ЛАБОРАТОРИЙ ТОЧНОЙ ДИАГНОСТИКИ INCARE",
    description:
      "Современное оборудование и профессиональные специалисты. Тел: +998 71 200-40-00",
    images: [
      "https://ucarecdn.com/fd407578-0b5b-451d-8efb-27c65bcca69a/-/preview/1200x630/",
    ],
  },
  verification: {
    google: "VERIFICATION_CODE",
    yandex: "VERIFICATION_CODE",
  },
  alternates: {
    canonical: "https://incare.uz",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#0066cc" />
        <meta name="contact" content="+998 71 200-40-00, info@incare.uz" />
        <meta name="author" content="INCARE" />
        <meta name="robots" content="index, follow" />
      </head>
      <body>{children}</body>
    </html>
  );
}