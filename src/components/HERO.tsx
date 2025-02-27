"use client";
import Link from "next/link";
import style from "./Hero.module.css";

export default function Hero() {
  return (
    <div
      className={`flex w-full justify-center items-center font-serif  ${style["bgGradient"]} h-screen text-[#f0f0f0]`}
    >
      <div
        className="flex w-full flex-col  h-full justify-center items-center
              max-w-[60%]"
      >
        <h1
          className={`text-7xl font-bold text-center italic ${style["gradient-text"]}`}
        >
          Ayesha Waseem
        </h1>
        <p className="text-lg text-[#708090] md:text-xl flex-col pt-4 text-center flex-wrap sm:max-w-[500px] md:px-5">
          Crafting visually stunning and user-friendly websites with a blend of
          creativity and technical expertise.
        </p>

        <Link href="/projects">
          <button className="rounded-lg p-2  text-[#f0f0f0] border border-white text-sm mt-4">
            View My Work
          </button>
        </Link>
      </div>

      
        
    </div>
  );
}
