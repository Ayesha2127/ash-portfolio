"use client";
import { useState } from "react";
import { GiHamburgerMenu, GiCrossMark } from "react-icons/gi";
import Link from "next/link";



export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent text-white font-serif flex justify-center items-center p-4">
      {/* Desktop Navigation */}
      <ul className="hidden lg:flex gap-7 flex-wrap text-xl bg-black bg-opacity-50 rounded-full px-8 py-3">
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

      {/* Hamburger Menu Icon (Mobile) */}
      <button
        className="lg:hidden absolute right-4 top-4"
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? null : (
          <div className="h-15 w-15">
            <GiHamburgerMenu size={25} /> {/* Hamburger Icon */}
          </div>
        )}
      </button>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden transition-opacity duration-300 ${isSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={toggleSidebar}
      >
        <div
          className={`fixed inset-y-0 left-0 w-64 bg-black bg-opacity-90 text-[#708090] p-5 transform transition-transform duration-300 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Cross Icon inside Sidebar */}
          <button
            className="absolute right-4 top-4"
            onClick={toggleSidebar}
          >
            <GiCrossMark size={20} /> {/* Cross Icon */}
          </button>

          {/* Mobile Navigation Links */}
          <ul className="flex flex-col gap-5 text-xl font-bold mt-10">
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