"use client";

import { twMerge } from "tailwind-merge";
import HorizontalSlider from "../utils/HorizontalSlider";
import { useState } from "react";
import { motion } from "framer-motion";
import { servicesCategory } from "../utils/constants";

function NewServices() {
  const [hoveredService, setHoveredService] = useState(0);

  const variants = {
    visible: { opacity: 1, y: 0, transition: { delay: 0.2 } },
    hidden: { opacity: 0, y: 50 },
  };

  const handleMouseOver = (id: number) => {
    setHoveredService(id);
  };

  return (
    <section id="services" className="container py-10 border-b border-gray-200">
      <h2 className="w-full border-b border-gray-500 pb-6">our services</h2>

      <main className="flex gap-x-8 mt-8">
        {servicesCategory[0].services?.map((service, idx) => (
          <motion.div
            layout
            key={service.title}
            className={twMerge(
              "w-1/4 overflow-hidden rounded-md h-[450px] bg-cover transition-all duration-500 bg-center",
              hoveredService === idx && "w-[550px] "
            )}
            style={{ backgroundImage: `url(${service.imgSrc})` }}
            onMouseOver={() => handleMouseOver(idx)}
          >
            <motion.div
              initial="hidden"
              animate={`${hoveredService === idx && "visible"}`}
              variants={variants}
              className={twMerge(
                "w-[450px] h-full hidden flex-col justify-end gap-2 p-12 text-white capitalize",
                hoveredService === idx && "flex "
              )}
            >
              <h3 className="font-medium text-3xl capitalize">
                {service.title}
              </h3>
              <p>{service.description}</p>
              <a href="#" className="underline ">
                view plans
              </a>
            </motion.div>
          </motion.div>
        ))}
      </main>

      <HorizontalSlider>
        {servicesCategory.map((category, id) => (
          <div
            key={id}
            className={twMerge(
              "category-wrap rounded-full min-w-fit",
              id === 0 && "active"
            )}
          >
            <button
              key={category.title}
              className={
                "h-full py-1.5 px-5 bg-black rounded-full text-white text-lg"
              }
            >
              {category.title}
            </button>
          </div>
        ))}
      </HorizontalSlider>
    </section>
  );
}

export default NewServices;
