"use client";
import Image from "next/image";
import { motion, Variants } from "framer-motion"; // Import motion and Variants from framer-motion
import style from "./Hero.module.css";

const services = [
  {
    id: 1,
    icon: "/icons/s1.png",
    title: "Modern Web Designing",
    description:
      "Crafting elegant websites that prioritize aesthetics and usability, designed to captivate users and bring a brand's vision to life.",
  },
  {
    id: 2,
    icon: "/icons/s2.png",
    title: "UI/UX Designing",
    description:
      "I create intuitive UI/UX designs that blend functionality with aesthetics, offering seamless user experiences.",
  },
  {
    id: 3,
    icon: "/icons/s3.png",
    title: "JavaScript Development",
    description:
      "I specialize in building efficient JavaScript applications that deliver smooth and engaging user experiences.",
  },
  {
    id: 4,
    icon: "/icons/s4.png",
    title: "Figma to Code",
    description:
      "Converting Figma designs into clean, responsive, and pixel-perfect code using modern web technologies for seamless implementation.",
  },
];

export default function Services() {
  // Define the up-down animation for the icons
  const upDownAnimation: Variants = {
    animate: {
      y: [0, 10, 0], // Up-down movement
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  // Define the hover animation for the cards
  const hoverAnimation: Variants = {
    initial: { scale: 1, boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)" },
    hover: {
      scale: 1.05, // Slightly scale up the card
      boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)", // Add a shadow effect
      transition: { duration: 0.3, ease: "easeInOut" }, // Smooth transition
    },
  };

  return (
    <div className={`${style['bgGradient']} flex-wrap p-3 font-serif text-[#f0f0f0]`}>
      {/* Centered Heading */}
      <div className={`text-4xl italic text-center ml-14 mt-24 p-6 font-bold ${style['gradient-text']} `}>
        My Services
      </div>

      {/* Responsive Grid for Cards */}
      <div className="flex flex-wrap justify-center gap-10 p-10">
        {services.map((service) => (
          <motion.div
            key={service.id}
            className="flex flex-col border border-white rounded-lg shadow-2xl w-full sm:w-[300px] md:w-[350px] lg:w-[400px] h-[300px] px-4 py-8 cursor-pointer"
            variants={hoverAnimation}
            initial="initial"
            whileHover="hover"
          >
            {/* Animated Image */}
            <motion.div
              variants={upDownAnimation}
              animate="animate"
            >
              <Image
                src={service.icon}
                alt={`${service.title} Icon`}
                width={60}
                height={60}
              />
            </motion.div>

            {/* Title */}
            <h1 className="text-xl font-bold mt-5">
              {service.title}
            </h1>

            {/* Description */}
            <p className="text-sm mt-5">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}