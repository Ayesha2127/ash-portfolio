"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion"; // Import motion and Variants from framer-motion
import style from './Hero.module.css';

const projects = [
  {
    id: 1,
    image: "/p2.png",
    title: "Hekto",
    description:
      "Explore modern furniture designs for every space, combining style and functionality effortlessly.",
    link: "https://final-hackathon-ayesha.vercel.app/",
    target: "_blank",
  },
  {
    id: 2,
    image: "/p4.png",
    title: "Magic Stories",
    description:
      "A Figma project showcasing a cake shop design with clean, attractive visuals for various cake varieties.",
    link: "https://magic-blog.vercel.app/",
    target: "_blank",
  },
  {
    id: 3,
    image: "/p3.png",
    title: "Caffeine Blend",
    description:
      "A coffee shop design offering a wide range of coffee in a welcoming and cozy environment.",
    link: "https://caffeine-blend-milestone-3.vercel.app/",
    target: "_blank",
  },
  {
    id: 4,
    image: "/p1.png",
    title: "Jewelery Wall",
    description:
      "Discover exquisite jewellery designs that blend timeless elegance with modern trends.",
    link: "https://jewelerywall-tailwind.vercel.app/",
    target: "_blank",
  },
];

export default function Projects() {
  // Define the hover animation for the project cards
  const hoverAnimation: Variants = {
    initial: { scale: 1, boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)" },
    hover: {
      scale: 1.05, // Slightly scale up the card
      boxShadow: "0px 10px 20px rgba(255, 255, 255, 0.2)", // Add a subtle shadow effect
      transition: { duration: 0.3, ease: "easeInOut" }, // Smooth transition
    },
  };

  return (
    <div className={`font-bold font-serif italic w-full md:bg-black text-4xl py-7 ${style.bgGradient} bg-black h-full flex-wrap`}>
      {/* Centered Heading */}
      <div className={`text-4xl font-bold ${style['gradient-text']} p-6`}>
        My Projects
      </div>

      {/* Responsive Grid for Projects */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 px-4 mt-9 sm:px-6 lg:px-8">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="border border-white text-[#f0f0f0] rounded-lg w-full h-[430px] flex flex-col p-4 cursor-pointer"
            variants={hoverAnimation}
            initial="initial"
            whileHover="hover"
          >
            {/* Project Image (Centered) */}
            <div className="flex justify-start">
              <Image
                src={project.image}
                alt={`${project.title} Project`}
                width={300}
                height={220}
                className="rounded-lg w-full h-full"
              />
            </div>

            {/* Project Title (Start-Aligned) */}
            <h1 className="text-xl font-bold mt-4">
              {project.title}
            </h1>

            {/* Project Description (Start-Aligned) */}
            <p className="text-base mt-2">
              {project.description}
            </p>

            {/* View Project Button (Start-Aligned) */}
            <Link href={project.link} target={project.target || ""}>
              <button className="rounded-lg p-2 bg-black text-[#f0f0f0] border border-white text-sm mt-4 self-start">
                View Project
              </button>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}