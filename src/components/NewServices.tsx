"use client";

import { twMerge } from "tailwind-merge";
import HorizontalSlider from "./utils/HorizontalSlider";
import { servicesCategory } from "./utils/constants";
import { useState } from "react";

const services = [
  {
    title: "web and app design",
    description: "mobile and applicaion designing services",
    imgSrc: "/assets/servicepic-1.png",
  },

  {
    title: "web and app design2",
    description: "mobile and applicaion designing services",
    imgSrc: "/assets/servicepic-2.png",
  },
  {
    title: "web and app design3",
    description: "mobile and applicaion designing services",
    imgSrc: "/assets/servicepic-3.png",
  },
  {
    title: "web and app design4",
    description: "mobile and applicaion designing services",
    imgSrc: "/assets/servicepic-4.png",
  },
];

function NewServices() {
  const [hoveredService, setHoveredService] = useState(services[0].title);

  const handleMouseOver = (title: string) => {
    setHoveredService(title);
  };

  return (
    <section id="services" className="container py-10 border-b border-gray-200">
      <h2 className="w-full border-b border-gray-500 pb-6">our services</h2>

      <main className="flex gap-x-8 mt-8">
        {services.map((service) => (
          <div
            key={service.title}
            className={twMerge(
              "w-1/4 rounded-md h-[450px] bg-cover transition-all duration-500",
              hoveredService === service.title && "w-[550px]"
            )}
            style={{ backgroundImage: `url(${service.imgSrc})` }}
            onMouseOver={() => handleMouseOver(service.title)}
          >
            <div
              className={twMerge(
                "h-full hidden flex-col justify-end gap-2 p-12 text-white capitalize",
                hoveredService === service.title && "flex"
              )}
            >
              <h3 className="font-medium text-3xl capitalize">
                {service.title}
              </h3>
              <p>{service.description}</p>
              <a href="#" className="underline ">
                view plans
              </a>
            </div>
          </div>
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
