"use client";

import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import Logo from "../assets/Logo";
import NewLogo from "../assets/NewLogo";

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
      className="navbar flex items-center justify-between text-black "
    >
      <div className="flex items-center justify-between w-full sm:pb-4">
        <motion.div
          initial={{ y: "-100%", opacity: 0 }}
          animate={{ y: 0, opacity: 100, transition: { duration: 0.5 } }}
          className="flex gap-2 items-center"
        >
          <NewLogo className="w-16 h-12 sm:w-20 sm:h-16 lg:w-28 lg:h-20" />

          <h3 className="hidden sm:block mt-1 text-xl lg:text-2xl">
            Kalodhunga Creations
          </h3>
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

        <motion.button
          initial={{ y: "-100", opacity: 0 }}
          animate={{ y: 0, opacity: 100, transition: { duration: 0.5 } }}
          onClick={() => setIsMenuOpen(true)}
          className="lg:hidden cursor-pointer"
        >
          <Bars3Icon className="w-9 h-9 text-black" />
        </motion.button>
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
          "nav-menu top-0 right-0 fixed h-full w-[92%] sm:h-[600px] sm:w-[400px] sm:top-[75px] sm:right-8 bg-white flex flex-col justify-between z-50",
          isMenuOpen && "active"
        )}
      >
        <header className="px-6 pt-6 flex w-full justify-between">
          <NewLogo className="w-16 h-12 " />

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

      <motion.hr
        initial={{ opacity: 0 }}
        animate={{
          opacity: 100,
          transition: { delay: 0.5, duration: 0.3 },
        }}
        className="absolute top-[65px] sm:top-[80px] left-0 w-full h-[1.5] border-gray-300"
      />
    </nav>
  );
}

export default Navbar;
