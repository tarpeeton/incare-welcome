

import { StrokeForComponents } from "../ui/Stroke";
import Link from "next/link";
import Image from "next/image";

const LINKS = [
  {
    id: "beruniy-fillial",
    text: "Филиал «Беруни»",
    BG: "#41B2BA",
    href: "https://yandex.uz/maps/-/CHunMUJC",
  },
  {
    id: "fillial-institut",
    text: "Филиал «Институт акушерства и гинекологии»",
    BG: "#41B2BA",
    href: "https://yandex.uz/maps/-/CHunQ21a",
  },
  {
    id: "kadisheva",
    text: `Филиал «Кадышева»`,
    BG: "#41B2BA",
    href: "https://yandex.uz/maps/-/CHunUM5d",
  },
];

const Filials = () => {
  return (
    <footer className="pb-[30px]">
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
        <p  className="title">Наши филиалы</p>
      </div>
      <div className="mt-[15px] flex flex-col gap-[10px] md:gap-[15px]">
        {LINKS.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            style={{ background: `${item.BG}` }}
            className={`rounded-[10px] hover:opacity-80 duration-300 ease-in-out transition-colors   text-white uppercase py-[15px] px-[10px]  lg:p-[15px] flex flex-row items-center `}
          >
            <p className="text-center w-[90%] flex items-center justify-center mx-auto whitespace-pre-wrap font-bold text-[16px]">
              {item.text}
            </p>
          </Link>
        ))}
      </div>


      <StrokeForComponents />

    </footer>
  );
};

export default Filials;
