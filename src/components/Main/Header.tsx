"use client"
import { useState , useEffect } from "react";

import Image from "next/image";

const Header = () => {
 const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkTablet = () => {
      setIsTablet(window.innerWidth <= 800); 
    };

    checkTablet(); // Dastlabki holat
    window.addEventListener("resize", checkTablet); 

    return () => window.removeEventListener("resize", checkTablet);
  }, []);


  return (
    <header className="flex flex-col gap-[30px]">
      <div className="border-b border-b-[#0A3556] h-[1px] opacity-30 w-[63px] mx-auto  mt-[30px]" />

      <div className="flex flex-row items-center gap-[14px]">
        <div className="w-[56px] h-[56px]">
          <Image
            src="https://ucarecdn.com/fd407578-0b5b-451d-8efb-27c65bcca69a/-/preview/224x224/"
            alt=""
            width={224}
            height={224}
            quality={100}
            className="w-full h-full object-cover"
          />
        </div>
        <p className="title">INCARE LAB</p>
      </div>
      <div className="flex flex-col gap-[16px]">
        <h1 className="title whitespace-pre-wrap">
          {isTablet ?   `СЕТЬ МЕДИЦИНСКИХ\nЛАБОРАТОРИЙ ТОЧНОЙ\nДИАГНОСТИКИ` : "СЕТЬ МЕДИЦИНСКИХ ЛАБОРАТОРИЙ ТОЧНОЙ ДИАГНОСТИКИ" }
         
        </h1>
        <h2 className="text-blue120 text-[14px] lg:text-[15px]">
          Наша сеть лабораторий медицинской диагностики INCARE гарантирует
          качество и надежность в каждом анализе. Наши врачи-лаборанты —
          профессионалы своего дела, готовые помочь вам заботиться о своем
          здоровье с уверенностью.
        </h2>
      </div>
    </header>
  );
};

export default Header;
