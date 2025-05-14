import { StrokeForComponents } from "../ui/Stroke";
import Image from "next/image";

export const INFO = [
  {
    id: "12s",
    text: "2,000+ лабораторных анализов",
  },
  {
    id: "12f",
    text: "Анализы для всей семьи",
  },
  {
    id: "12gs",
    text: "Гарантия качества",
  },
  {
    id: "12wfx",
    text: `Современное\nоборудование мирового\nуровня`,
  },
];

const Info = () => {
  return (
    <section>
      <StrokeForComponents />

      <div className="flex flex-col gap-[14px]">
        <div className="h-[194px] md:h-[410px] lg:h-[470px] w-full">
          <Image
            src={
              "https://ucarecdn.com/4a46a4aa-24fe-42c3-9d34-d13a99c906cd/-/preview/999x563/"
            }
            alt="image info"
            width={999}
            height={563}
            quality={100}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="grid grid-cols-1 mt-[5px] md:grid-cols-2 gap-[14px]">
          {INFO.map((info) => (
            <div key={info.id} className="flex flex-row items-center gap-[14px]">
              <div className="min-w-[48px] min-h-[48px] max-w-[48px] max-h-[48px] ">
                <Image
                  src={
                    "https://ucarecdn.com/2be75225-6aac-48ef-add1-3c6eba097bda/-/preview/192x193/"
                  }
                  alt="image info"
                  width={123}
                  height={193}
                  quality={100}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="title">{info.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Info;
