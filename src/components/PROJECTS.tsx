"use client";
import Image from "next/image";
import Link from "next/link";
import { FaArrowTrendUp } from "react-icons/fa6";
import { motion, Variants } from "framer-motion";
import { Button } from "@/components/BUTTON"; // Import the custom Button component
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
  const hoverAnimation: Variants = {
    initial: { scale: 1, boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)" },
    hover: {
      scale: 1.05,
      boxShadow: "0px 10px 20px rgba(255, 255, 255, 0.2)",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  return (
    <div className={`font-serif w-full md:bg-black text-4xl py-7 ${style.bgGradient} bg-black h-full flex-wrap`}>
      <div className={`text-4xl italic font-serif font-bold ${style['gradient-text']} ml-14 mt-16 p-4`}>
        My Projects
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 shadow-2xl gap-10 px-4 mt-9 sm:px-6 lg:px-8">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="border border-white text-[#f0f0f0] rounded-lg w-full h-[430px] flex flex-col p-4 cursor-pointer"
            variants={hoverAnimation}
            initial="initial"
            whileHover="hover"
          >
            <div className="flex justify-start">
              <Image
                src={project.image}
                alt={`${project.title} Project`}
                width={300}
                height={220}
                className="rounded-lg w-full h-full"
              />
            </div>

            <h1 className="text-xl font-bold mt-4">
              {project.title}
            </h1>

            <p className="text-sm italic mt-2">
              {project.description}
            </p>

            <Link href={project.link} target={project.target || ""}>
              <div className="mb-4 self-start ">
                <Button
                  borderRadius="0.5rem"
                  className="text-sm"
                  containerClassName="w-32 h-10"
                  borderClassName="border-white"
                >
                  View Project
                  <span className="text-[#537895] ml-2">
                  <FaArrowTrendUp size={20} />
                  </span>
                </Button>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}