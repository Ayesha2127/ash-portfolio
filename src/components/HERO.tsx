"use client";
import Link from "next/link";
import style from "./Hero.module.css";
import { Button } from "@/components/BUTTON" // Adjust the import path

export default function Hero() {
  return (
    <div
      className={`flex w-full justify-center items-center font-serif ${style["bgGradient"]} h-screen text-[#f0f0f0]`}
    >
      <div className="flex w-full flex-col h-full justify-center items-center max-w-[60%]">
        <h1
          className={`text-7xl mt-20 font-bold text-center italic ${style["gradient-text"]}`}
        >
          Ayesha Waseem
        </h1>
        <p className="text-lg text-[#708090] md:text-xl flex-col pt-4 text-center flex-wrap sm:max-w-[500px] md:px-5 mb-6">
        I create beautiful, user-friendly websites with clean design and seamless functionality. Focused on responsive, accessible, and engaging experiences, I ensure every site looks great and leaves a lasting impression.
        </p>

        {/* Replace the existing button with the Aceternity Button */}
        <Link href="/projects">
          <Button
            borderRadius="1.75rem"
            containerClassName="bg-transparent"
            borderClassName="bg-[radial-gradient(var(--sky-500)_40%,transparent_60%)]"
            className="bg-slate-900/[0.8] border border-slate-800 backdrop-blur-xl text-white  "
          >
            View My Work
          </Button>
        </Link>
      </div>
    </div>
  );
}