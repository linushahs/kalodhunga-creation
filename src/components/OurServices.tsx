"use client";

import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { servicesCategory } from "./utils/constants";
import { Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

function OurServices() {
  return (
    <section className="container py-10 border-b border-gray-200">
      <h2 className="w-full border-b border-gray-500 pb-6">our services</h2>

      <div className="my-8">
        <Swiper slidesPerView={"auto"} spaceBetween={15} className="">
          {servicesCategory.map((category, id) => (
            <SwiperSlide
              key={id}
              className={twMerge(
                "category-wrap rounded-full !w-fit",
                id === 0 && "active"
              )}
            >
              <button
                key={category.title}
                className={
                  "!h-full py-1.5 px-5 bg-black rounded-full text-white text-lg"
                }
              >
                {category.title}
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <ul className="pt-6 grid grid-cols-1 gap-y-8 lg:grid-cols-4 lg:gap-x-[100px]">
        {servicesCategory[0].services?.map((service) => (
          <li
            key={service.name}
            className="relative rounded-lg h-[120px] sm:h-[200px] lg:h-[700px]  bg-no-repeat bg-cover bg-center"
          >
            <Image
              width={1000}
              height={1000}
              src={service.img_lg}
              alt="picture"
              className="hidden lg:block h-full min-w-auto absolute top-0 left-0 -z-20  rounded-lg"
            />

            <img
              width={1000}
              height={1000}
              src={
                "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
              }
              alt="picture"
              className="block lg:hidden h-full w-full object-cover absolute top-0 left-0 -z-20  rounded-lg"
            />

            <div className="absolute left-6 sm:left-12 lg:bottom-16 lg:left-0 w-full h-full flex items-center lg:justify-center lg:items-end z-10">
              <h1 className="service-text capitalize text-white font-bold lg:leading-[60px]">
                {service.name.split("\n")[0]}
                <br />
                {service.name.split("\n")[1]}
              </h1>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default OurServices;
