"use client";
import Image from "next/image";
import Link from "next/link";
import style from "./Hero.module.css";
import { FaArrowTrendUp } from "react-icons/fa6";

export default function Python() {
  const python = [
    {
      id: 1,
      icon: "/python/python1.jpg",
      title: "cipherkey",
      link: "https://cipherkey-pass-generator.streamlit.app/",
    },
    {
      id: 2,
      icon: "/python/python2.jpg",
      title: "convertify",
      link: "https://unit-converter-convertify-app.streamlit.app/",
    },
    // Add more projects as needed
  ];

  return (
    <main className={`flex flex-col items-center justify-center text-center ${style.bgGradient} text-white`}>
      <div>
        {/* Heading */}
        <div className={`text-3xl md:text-5xl italic justify-center text-center font-bold ${style['gradient-text']} p-4 md:p-6`}>
          Python-Powered Web Apps
        </div>

        <div className="flex flex-wrap justify-center gap-10 p-10">
          {python.map((python) => (
            <div
              key={python.id}
              className="relative flex flex-col items-center justify-center border border-white rounded-lg shadow-2xl w-full sm:w-[300px] md:w-[350px] lg:w-[400px] h-[300px] overflow-hidden cursor-pointer"
            >
              {/* Image */}
              <Image
                src={python.icon}
                alt={`${python.title} Icon`}
                width={400} // Adjust as needed
                height={300} // Adjust as needed
                className="w-full h-full object-cover rounded-lg"
              />

              {/* Overlay for Text */}
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center p-4 text-center">
                {/* Title */}
                

                {/* View Live Button */}
                <Link href={python.link} target="_blank">
                  <div className="flex items-center justify-center text-white text-2xl">
                    <span>View Live</span>
                    <span className="ml-2">
                      <FaArrowTrendUp size={20} />
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}