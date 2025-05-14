import React from "react";
import { StrokeForComponents } from "../ui/Stroke";
import Link from "next/link";
import Image from "next/image";

const LINKS = [
  {
    id: "cost",
    text: "Уточнить стоимость анализов",
    icon: "https://ucarecdn.com/7d5121b0-1282-4d57-bde9-78ac69c50737/-/preview/168x168/",
    BG: "#41B2BA",
    href: "tel:+998781220303",
  },
  {
    id: "locations",
    text: "Локации наших филиалов",
    icon: "https://ucarecdn.com/676d3096-f406-4495-8b0e-46bfaa70099b/-/preview/168x168/",
    BG: "#41B2BA",
    href: "",
  },
  {
    id: "telegram",
    text: `Написать нам\nв Телеграм`,
    icon: "https://ucarecdn.com/885108b6-f617-4df6-9ff8-5b749aeeb354/-/preview/121x120/",
    BG: "#2f8791",
    href: "tg://resolve?domain=incare_support/",
  },
  {
    id: "public-offer",
    text: "Публичная оферта",
    icon: "https://ucarecdn.com/d1668249-4f80-458c-8dd4-c5e14f89d6de/-/preview/168x168/",
    BG: "#2f8791",
    href: "https://docs.google.com/document/u/0/d/1o00w4y7oQ_MiegbuR2sUMhKMkj4ewbNb/mobilebasic",
  },
];




const Application = () => {
  return (
    <section>
      <StrokeForComponents />
      <div className="mt-[30px] flex flex-col gap-[10px] md:gap-[15px]">
        {LINKS.map((item , index) => (
          <Link
            key={item.id}
            href={item.href}
            style={{background: `${item.BG}`}}
            className={`rounded-[10px]  hover:opacity-80 duration-300 ease-in-out transition-colors  text-white uppercase py-[15px] px-[10px]  lg:p-[15px] flex flex-row items-center `}
          >
            <div className={` ${index === 2 ? "w-[35px] h-[35px]" : "w-[42px] h-[42px]"} `}>
              <Image 
              src={item.icon}
              alt="image"
              width={124}
              height={124}
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

export default Application;
