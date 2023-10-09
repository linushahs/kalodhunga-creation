"use client";

import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { twMerge } from "tailwind-merge";
import Logo from "../assets/Logo";

type Menu = {
  id: number;
  title: string;
  url: string;
};

const menus: Menu[] = [
  "home",
  "about",
  "services",
  "projects",
  "process",
  "contact",
].map((menu, idx) => {
  return { id: idx + 1, title: menu.toUpperCase(), url: "/" + menu };
});

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="container bg-white z-40 flex items-center justify-between text-black ">
      <div className="flex items-center justify-between w-full">
        <Logo className="w-12 h-12 lg:w-14 lg:h-15" />
        {/* right side  */}
        <ul className="lg:flex items-center gap-12 hidden font-bold text-lg 3xl:text-2xl">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Works</a>
          </li>
        </ul>

        <button
          onClick={() => setIsMenuOpen(true)}
          className="lg:hidden cursor-pointer"
        >
          <Bars3Icon className="w-9 h-9 text-black" />
        </button>
      </div>

      {/* backdrop : black ----------- */}
      {isMenuOpen && (
        <div className="absolute top-0 left-0 w-full h-screen z-20 bg-black/30"></div>
      )}

      {/* list of menus (in small devices: tab & mobile) ---->  */}
      <div
        className={twMerge(
          "nav-menu top-0 right-0 fixed h-full w-[92%]  bg-white flex flex-col justify-between z-30",
          isMenuOpen && "active"
        )}
      >
        <header className="p-6 flex w-full justify-between">
          <img src="/assets/logo.png" alt="logo" className="w-auto h-7" />

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
              className="my-2.5 py-2 text-xl border-b-2 border-black font-medium flex justify-between items-center cursor-pointer hover:font-bold"
            >
              {menu.title} <ArrowRightIcon className="w-7 h-7" />
            </li>
          ))}
        </ul>

        <ul className="px-6 pb-4  flex flex-wrap gap-x-4 gap-y-2 text-light text-md capitalize">
          <li>Privacy Policy</li>
          <li>Terms of use</li>
          <li>Refund policy</li>
          <li>2022@Kalodhunga Creations</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
