"use client";
import { useState } from "react";
import { GiHamburgerMenu, GiCrossMark } from "react-icons/gi";
import Link from "next/link";

import style from "./Hero.module.css";

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav className="w-full h-full gap-3 bg-[#708090] text-white font-serif flex justify-between items-center px-11 flex-wrap lg:h-20">
      {/* Logo */}
      <div>
        <h1 className="text-3xl font-bold">Ash<span className={style.blink}>.</span></h1>
      </div>

      {/* Hamburger Menu Icon (Mobile) */}
      <button className="lg:hidden items-center" onClick={toggleSidebar}>
        {isSidebarOpen ? (
          <div className="h-15 w-15">
            <GiCrossMark size={20} /> {/* Cross Icon */}
          </div>
        ) : (
          <div className="h-15 w-15">
            <GiHamburgerMenu size={20} /> {/* Hamburger Icon */}
          </div>
        )}
      </button>

      {/* Desktop Navigation */}
      <ul className="hidden lg:flex gap-7 flex-wrap text-xl">
        <li className="hover:text-gray-300">
          <Link href={"/"}>Home</Link>
        </li>
        <li className="hover:text-gray-300">
          <Link href={"/services"}>Services</Link>
        </li>
        <li className="hover:text-gray-300">
          <Link href={"/projects"}>Projects</Link>
        </li>
        <li className="hover:text-gray-300">
          <Link href={"/about"}>About</Link>
        </li>
        <li className="hover:text-gray-300">
          <Link href={"/contact"}>Contact</Link>
        </li>
      </ul>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden transition-opacity duration-300 ${isSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={toggleSidebar}
      >
        <div
          className={`fixed inset-y-0 left-0 w-64 bg-[#708090] text-white p-5 transform transition-transform duration-300 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Mobile Navigation Links */}
          <ul className="flex flex-col gap-5 text-xl font-bold">
            <li className="hover:text-gray-300">
              <Link href={"/"}>Home</Link>
            </li>
            <li className="hover:text-gray-300">
              <Link href={"/services"}>Services</Link>
            </li>
            <li className="hover:text-gray-300">
              <Link href={"/projects"}>Projects</Link>
            </li>
            <li className="hover:text-gray-300">
              <Link href={"/about"}>About</Link>
            </li>
            <li className="hover:text-gray-300">
              <Link href={"/contact"}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}