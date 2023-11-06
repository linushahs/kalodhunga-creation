"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { twMerge } from "tailwind-merge";
import HorizontalSlider from "../utils/HorizontalSlider";
import { servicesCategory } from "../utils/constants";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

function NewServices() {
  const [hoveredService, setHoveredService] = useState(0);
  const [selectedCategory, selectCategory] = useState("design");

  const variants = {
    visible: { opacity: 1, y: 0, transition: { delay: 0.2 } },
    hidden: { opacity: 0, y: 50 },
  };

  const handleMouseOver = (id: number) => {
    setHoveredService(id);
  };

  const category = Object.keys(servicesCategory);

  return (
    <section data-scroll-section id="services" className="container py-10 ">
      <h2 className="w-full border-b border-gray-500 pb-6">our services</h2>

      <main className="hidden lg:flex gap-x-8 mt-8">
        {servicesCategory[selectedCategory]?.map((service, idx) => (
          <motion.div
            layout
            key={service.title}
            className={twMerge(
              "w-1/4 relative z-30 overflow-hidden rounded-md h-[450px] bg-cover transition-all duration-500 bg-center",
              hoveredService === idx && "w-[550px] "
            )}
            style={{ backgroundImage: `url(${service.imgSrc})` }}
            onMouseOver={() => handleMouseOver(idx)}
          >
            {/* black background ----  */}
            <div className="w-full h-full absolute top-0 left-0 bg-black/40 -z-10"></div>

            <motion.div
              initial="hidden"
              animate={`${hoveredService === idx && "visible"}`}
              variants={variants}
              className={twMerge(
                "xl:w-[450px] h-full hidden flex-col justify-end gap-2 p-12 text-white capitalize",
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

      {/* Mobile & Table view slider design ---------- */}
      {/* --------------------------------->  */}
      <main className="lg:hidden mt-8">
        <Swiper
          slidesPerView={"auto"}
          breakpoints={{
            // when window width is >= 640px
            640: {
              slidesPerView: 2,
            },
          }}
          spaceBetween={15}
          grabCursor={true}
          freeMode={true}
          modules={[FreeMode]}
          className="w-full h-[300px] sm:h-[450px]"
        >
          {servicesCategory[selectedCategory]?.map((service) => (
            <SwiperSlide
              key={service.title}
              className={twMerge(
                " relative overflow-hidden rounded-md h-[450px] bg-cover transition-all duration-500 bg-center z-30"
              )}
              style={{ backgroundImage: `url(${service.imgSrc})` }}
            >
              {/* black background ----  */}
              <div className="w-full h-full absolute top-0 left-0 bg-black/40 -z-10"></div>

              <div
                className={twMerge(
                  " h-full flex flex-col justify-end gap-3 p-6 text-white capitalize"
                )}
              >
                <h3 className="font-medium text-2xl capitalize">
                  {service.title}
                </h3>
                <p>{service.description}</p>
                <a href="#" className="underline ">
                  view plans
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </main>

      <HorizontalSlider>
        {category.map((c) => (
          <div
            key={c}
            className={twMerge(
              "category-wrap rounded-full min-w-fit",
              c === selectedCategory && "active"
            )}
          >
            <button
              className={
                "h-full py-1.5 px-5 bg-black rounded-full text-white text-lg capitalize"
              }
              onClick={() => selectCategory(c)}
            >
              {c}
            </button>
          </div>
        ))}
      </HorizontalSlider>
    </section>
  );
}

export default NewServices;
