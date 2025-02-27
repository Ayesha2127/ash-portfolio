"use client";
import Image from "next/image";
import { motion } from "framer-motion"; // Import motion from framer-motion
import style from "./Hero.module.css";

const skills = [
  { id: 1, icon: "/icons/ux1.png" },
  { id: 2, icon: "/icons/html2.png" },
  { id: 3, icon: "/icons/css3.png" },
  { id: 4, icon: "/icons/js4.png" },
  { id: 5, icon: "/icons/ts5.png" },
  { id: 6, icon: "/icons/py6.png" },
  { id: 7, icon: "/icons/tcss7.png" },
  { id: 8, icon: "/icons/front8.png" },
];

export default function HeroSection() {
  return (
    <div className={`flex flex-col items-center justify-center min-h-screen ${style.bgGradient} text-white`}>
      {/* Heading */}
      <div className={`text-4xl md:text-5xl italic text-center font-bold ${style['gradient-text']} p-4 md:p-6`}>
        My Skills
      </div>

      {/* Paragraph and Rotating Icons Container */}
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-20 p-4 md:p-6">
        {/* Paragraph */}
        <p className="text-base md:text-lg text-[#708090] max-w-md text-center md:text-left">
          I specialize in <strong>User Experience (UX)</strong> and web development, leveraging <strong>JavaScript</strong>, <strong>TypeScript</strong>, and <strong>Python</strong> for efficient programming. Proficient in <strong>HTML5</strong>, <strong>CSS</strong>, and <strong>Tailwind CSS</strong>, I create responsive designs, while <strong>Next.js</strong> enables me to build high-performance applications. My expertise also includes <strong>Back-End Web Development</strong> for end-to-end solutions.
        </p>

        {/* Rotating Icons Circle */}
        <motion.div
          className="relative w-48 h-48 md:w-64 md:h-64" // Smaller on mobile, larger on desktop
          animate={{ rotate: 360 }} // Rotate the entire container
          transition={{
            duration: 10, // Rotation speed
            repeat: Infinity, // Infinite loop
            ease: "linear", // Smooth animation
          }}
        >
          {skills.map((skill, index) => {
            // Calculate the angle for each icon
            const angle = (360 / skills.length) * index; // Evenly distribute icons
            const radius = 90; // Smaller radius for mobile

            // Calculate X and Y position using trigonometry
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * radius;

            return (
              <motion.div
                key={skill.id}
                className="absolute flex flex-col items-center"
                style={{
                  left: `calc(50% + ${x}px)`, // Center X position
                  top: `calc(50% + ${y}px)`, // Center Y position
                  transform: "translate(-50%, -50%)", // Center the icon
                }}
              >
                <Image
                  src={skill.icon}
                  alt="" // Empty alt text
                  width={40} // Smaller icons for mobile
                  height={40}
                  className="w-10 h-10 md:w-12 md:h-12" // Responsive icon size
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}