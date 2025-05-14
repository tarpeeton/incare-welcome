import React from "react";
import { StrokeForComponents } from "../ui/Stroke";
import Link from "next/link";
import Image from "next/image";

const LINKS = [
  {
    id: "instagram",
    text: "Наш инстаграм",
    icon: "https://ucarecdn.com/3a54b6e6-54d8-4099-9464-a44b46a03ced/-/preview/120x120/",
    BG: "#F00075",
    href: "https://www.instagram.com/incare_uz/",
  },
  {
    id: "locfaceboktions",
    text: "Наш фейсбук",
    icon: "https://ucarecdn.com/e7692831-2af8-4e11-830e-906cda8d5d3c/-/preview/101x100/",
    BG: "#2F8791",
    href: "https://www.facebook.com/incare.uz",
  },
  {
    id: "bot",
    text: `Наш Телеграм Бот`,
    icon: "https://ucarecdn.com/1f6d3207-39f1-45ed-8541-a43298b5c9c7/-/preview/121x120/",
    BG: "#41B2BA",
    href: "tg://resolve?domain=incare_med_bot/",
  },
];

const SocialLinks = () => {
  return (
    <section>
      <StrokeForComponents />
      <div className="flex flex-col mt-[30px] justify-center items-center w-full">
        <div className="w-[48px] h-[48px]">
          <Image
            src={
              "https://ucarecdn.com/2bb5679e-b0aa-452b-bcb5-46410fb925b7/-/preview/193x192/"
            }
            alt="image"
            width={193}
            height={192}
            quality={100}
            className="w-full h-full object-cover"
          />
        </div>
        <p  className="title">Мы в социальных сетях</p>
      </div>
      <div className="mt-[15px] flex flex-col gap-[10px] md:gap-[15px]">
        {LINKS.map((item, index) => (
          <Link
            key={item.id}
            href={item.href}
            style={{ background: `${item.BG}` }}
            className={`rounded-[10px]  hover:opacity-80 duration-300 ease-in-out transition-colors  text-white uppercase py-[15px] px-[10px]  lg:p-[15px] flex flex-row items-center `}
          >
            <div
              className={` ${
                index === 2 ? "w-[35px] h-[35px]" : "w-[30px] h-[30px]"
              } `}
            >
              <Image
                src={item.icon}
                alt="image"
                width={120}
                height={120}
                quality={100}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-center w-[70%] flex items-center justify-center mx-auto whitespace-pre-wrap font-bold text-[16px]">
              {item.text}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default SocialLinks;
