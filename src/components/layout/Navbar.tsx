"use client";

import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { ArrowRightIcon } from "@heroicons/react/20/solid";

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
    <nav className="container fixed bg-white z-40 flex items-center justify-between text-black h-14 py-2.5 shadow-sm">
      <img src="/assets/logo.png" alt="logo" className="w-auto h-7" />

      {/* right side  */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="lg:hidden text-lg cursor-pointer uppercase font-bold"
      >
        {isMenuOpen ? "Close" : <Bars3Icon className="w-9 h-9 text-black" />}
      </button>

      {/* list of menus ---->  */}
      {isMenuOpen && (
        <div className="top-0 left-0 fixed h-full w-full bg-white flex flex-col justify-center -z-20 ">
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

          <ul className="px-6 -mt-8 flex flex-wrap gap-x-4 gap-y-2 text-light text-md capitalize">
            <li>Privacy Policy</li>
            <li>Terms of use</li>
            <li>Refund policy</li>
            <li>2022@Kalodhunga Creations</li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
