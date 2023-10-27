"use client";

import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import Logo from "../assets/Logo";

type Menu = {
  id: number;
  title: string;
  url: string;
};

export const menus: Menu[] = [
  "home",
  "about",
  "services",
  "projects",
  "process",
  "contact",
].map((menu, idx) => {
  return { id: idx + 1, title: menu.toUpperCase(), url: "#" + menu };
});

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav
      id="home"
      className="relative container navbar z-40 flex items-center justify-between text-black "
    >
      <div className="flex items-center justify-between w-full pb-4 border-b border-gray-300">
        <motion.div
          initial={{ y: "-100%", opacity: 0 }}
          animate={{ y: 0, opacity: 100, transition: { duration: 0.5 } }}
        >
          <Logo className="w-12 h-12 lg:w-14 lg:h-15" />
        </motion.div>
        {/* right side  */}
        <motion.ul
          initial={{ y: "-100%", opacity: 0 }}
          animate={{
            y: 0,
            opacity: 100,
            transition: { delay: 0.2, duration: 0.5 },
          }}
          className="lg:flex items-center gap-12 hidden font-[500] lg:text-xl 3xl:text-2xl"
        >
          <li>
            <a href="#home" className="underline ">
              Home
            </a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>

          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#process">Process</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </motion.ul>

        <button
          onClick={() => setIsMenuOpen(true)}
          className="lg:hidden cursor-pointer"
        >
          <Bars3Icon className="w-9 h-9 text-black" />
        </button>
      </div>

      {/* backdrop : black ----------- */}
      {isMenuOpen && (
        <div
          onClick={() => setIsMenuOpen(false)}
          className="fixed top-0 left-0 w-full h-screen z-20 bg-black/30"
        ></div>
      )}

      {/* list of menus (in small devices: tab & mobile) ---->  */}
      <div
        className={twMerge(
          "nav-menu top-0 right-0 fixed h-full w-[92%] sm:h-[600px] sm:w-[400px] sm:top-[75px] sm:right-8 bg-white flex flex-col justify-between z-30",
          isMenuOpen && "active"
        )}
      >
        <header className="px-6 pt-6 flex w-full justify-between">
          <Logo className="w-10 h-10 " />

          <button
            onClick={() => setIsMenuOpen(false)}
            className="lg:hidden text-lg cursor-pointer uppercase font-bold"
          >
            Close
          </button>
        </header>

        <ul className="px-6 flex-1 flex flex-col justify-center">
          {menus.map((menu) => (
            <li
              key={menu.id}
              className="my-2.5 py-2 text-xl border-b-2 border-black font-medium  cursor-pointer "
            >
              <a
                href={menu.url}
                onClick={() => setIsMenuOpen(false)}
                className="flex justify-between items-center hover:font-bold"
              >
                {menu.title} <ArrowRightIcon className="w-7 h-7" />
              </a>
            </li>
          ))}
        </ul>

        <ul className="px-6 pb-4  flex flex-wrap gap-x-4 gap-y-2 text-light text-sm capitalize">
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Terms of use</a>
          </li>
          <li>
            <a href="#">Refund policy</a>
          </li>
          <li>
            <a href="#"> 2022@Kalodhunga Creations</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
