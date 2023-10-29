"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef } from "react";
import Navbar from "../layout/Navbar";
import { introAnimation } from "../utils/animations";
gsap.registerPlugin(ScrollTrigger);

function NewLandingPage() {
  const containerRef = useRef<any>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.add(introAnimation(imgRef, containerRef));
  }, []);

  return (
    <section
      ref={containerRef}
      className="fixed top-0 left-0 h-screen container flex flex-col w-full mx-auto border-b border-gray-200  z-10"
    >
      <Navbar />

      <h1 className="uppercase pt-10">TRANSFORMING</h1>
      <h1 className="text-center mt-4">
        <span className="idea-title">IDEAS</span> INTO
      </h1>

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
        <h1 className="text-right mt-4">REALITY</h1>
      </div>

      <div className="container w-full absolute bottom-5 left-0 flex justify-between text-lg text-gray-600">
        <h4>2022</h4>
        <h4>Kalodhunga Creations</h4>
      </div>

      <Image
        ref={imgRef}
        src="/assets/landing-pic.png"
        alt="landing thumbnail"
        width={1000}
        height={800}
        priority={true}
        className="w-1/3 absolute top-[90%] left-1/2 -translate-x-1/2 aspect-[16/9]"
      />
    </section>
  );
}

export default NewLandingPage;
