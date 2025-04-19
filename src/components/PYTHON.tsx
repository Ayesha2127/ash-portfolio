"use client";
import Image from "next/image";
import Link from "next/link";
import style from "./Hero.module.css";
import { FaArrowTrendUp, FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { useState } from "react";

export default function Python() {
  const python = [
    {
      id: 1,
      icon: "/python/python1.jpg",
      title: "Cipherkey",
      link: "https://cipherkey-pass-generator.streamlit.app/",
    },
    {
      id: 2,
      icon: "/python/python2.jpg",
      title: "Convertify",
      link: "https://unit-converter-convertify-app.streamlit.app/",
    },
    {
      id: 3,
      icon: "/python/python3.jpg",
      title: "Growth Tracker",
      link: "https://growth-tracker-uxegkwqq2gqwkom7zrv9gk.streamlit.app/",
    },
    {
      id: 4,
      icon: "/python/python4.jpg",
      title: "Libro",
      link: "https://libro-library-manager.streamlit.app/",
    },
    {
      id: 5,
      icon: "/python/python5.jpg",
      title: "Cryptexa",
      link: "https://cryptexa.streamlit.app/",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? python.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === python.length - 1 ? 0 : prev + 1));
  };

  return (
    <main className={`flex flex-col items-center justify-center ${style.bgGradient} text-white`}>
      {/* Heading */}
      <div className={`text-4xl italic font-bold font-serif ${style["gradient-text"]} ml-14 mt-16 p-4`}>
        Python-Powered Web Apps
      </div>

      {/* Carousel Container */}
      <div className="relative w-[90%] max-w-[500px] h-[320px] mt-10 flex items-center justify-center">
        {/* Left Arrow - Responsive */}
        <button
          onClick={prevSlide}
          className="absolute left-2 md:left-[-60px] bg-white text-black p-3 rounded-full shadow-lg z-10 hover:bg-gray-200 transition"
        >
          <FaArrowLeft />
        </button>

        {/* Carousel Content */}
        <div className="w-full h-full overflow-hidden rounded-lg relative">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {python.map((item) => (
              <div
                key={item.id}
                className="w-full flex-shrink-0 h-[320px] relative border border-white shadow-2xl rounded-lg"
              >
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={500}
                  height={300}
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center p-4">
                  <Link href={item.link} target="_blank">
                    <div className="flex items-center justify-center text-white text-2xl font-semibold hover:underline">
                      <span>View Live</span>
                      <FaArrowTrendUp className="ml-2" />
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow - Responsive */}
        <button
          onClick={nextSlide}
          className="absolute right-2 md:right-[-60px] bg-white text-black p-3 rounded-full shadow-lg z-10 hover:bg-gray-200 transition"
        >
          <FaArrowRight />
        </button>
      </div>
    </main>
  );
}
