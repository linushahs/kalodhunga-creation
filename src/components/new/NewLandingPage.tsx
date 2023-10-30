"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Navbar from "../layout/Navbar";
gsap.registerPlugin(ScrollTrigger);

function NewLandingPage() {
  return (
    <section
      data-scroll-section
      className="relative h-screen container flex flex-col w-full mx-auto   z-10"
    >
      <Navbar />

      <p className="uppercase pt-10 landing-title">TRANSFORMING</p>
      <p className="landing-title text-center mt-4">
        <span className="idea-title">IDEAS</span> INTO
      </p>

      <div className="flex justify-between">
        <div>
          <p className="my-8 text-md lg:text-lg xl:text-xl text-gray-600 font-medium">
            We aspire to lead the way in innovative software development <br />
            turning every vision into a reality for businesses, <br />
            regardless of their size.
          </p>

          <button className="bg-gray-500 py-2 px-4 text-white rounded-lg text-xl">
            Get started now
          </button>
        </div>
        <p className="landing-title text-right mt-4">REALITY</p>
      </div>

      <div className="container border-0 w-full absolute bottom-5 left-0 flex justify-between text-xl text-gray-600">
        <h4>2022</h4>
        <h4>Kalodhunga Creations</h4>
      </div>

      {/* <Image
        src="/assets/landing-pic.png"
        alt="landing thumbnail"
        width={1000}
        height={800}
        priority={true}
        className="w-1/3 absolute top-[90%] left-1/2 -translate-x-1/2 aspect-[16/9]"
      /> */}
    </section>
  );
}

export default NewLandingPage;
