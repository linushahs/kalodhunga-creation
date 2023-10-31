"use client";

import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";
import { testimonials } from "./utils/constants";
import Image from "next/image";

function Testimonials() {
  const [count, setCount] = useState(0);
  const currentTestimonial = testimonials[count];

  const goToNextTestimonial = () => {
    if (count >= testimonials.length - 1) {
      setCount(0);
      return;
    }
    setCount(count + 1);
  };

  const goToPrevTestimonial = () => {
    if (count <= 0) {
      setCount(testimonials.length - 1);
      return;
    }
    setCount(count - 1);
  };

  return (
    <section
      data-scroll-section
      className="container py-10  flex items-center flex-col "
    >
      <h1 className="text-center">
        your projects are in <br />
        safe hands
      </h1>

      {/* description/sub text --------- */}
      <p className=" text-center w-full sm:w-3/4 lg:w-1/3 mx-auto mt-8 mb-6 text-gray-500  text-sm sm:text-md leading-[24px]">
        Our partnerships have delivered great value to our projects and
        we&apos;re happy to share some of their feedback below
      </p>

      {/* buttons: next and prev ------------ */}
      <div className="flex gap-6 items-center mb-6">
        <ArrowLeftCircleIcon
          onClick={() => goToPrevTestimonial()}
          className="w-10 h-10 cursor-pointer hover:opacity-80"
        />
        <ArrowRightCircleIcon
          onClick={() => goToNextTestimonial()}
          className="w-10 h-10 cursor-pointer hover:opacity-80"
        />
      </div>

      {/* testimonial content ------------  */}
      <div className="flex flex-col items-center">
        <p className="w-full sm:text-lg text-gray-600 sm:w-3/4 lg:w-[40%] font-medium text-center">
          {currentTestimonial.comment}
        </p>

        <h4 className="mt-10 mb-4 text-lg font-[600]">
          {currentTestimonial.author}
        </h4>
        <div className="flex items-center gap-3 text-sm text-gray-600">
          <p>{currentTestimonial.position}</p>
          <Image
            width={120}
            height={100}
            src={currentTestimonial.companyLogo}
            alt="company-logo"
            className="border-l border-black pl-3"
          />
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
