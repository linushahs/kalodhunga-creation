"use client";

import Image from "next/image";
import Navbar from "../layout/Navbar";
import { motion } from "framer-motion";

function NewLandingPage() {
  return (
    <section className="relative lg:h-screen lg:overflow-hidden container flex flex-col w-full mx-auto z-10">
      <Navbar />

      <motion.p
        initial={{ x: -100, opacity: 0 }}
        animate={{
          x: 0,
          opacity: 100,
          transition: { delay: 0.6, duration: 0.8 },
        }}
        className="uppercase pt-12 sm:pt-10 landing-title"
      >
        TRANSFORMING
      </motion.p>
      <motion.p
        initial={{ x: 100, opacity: 0 }}
        animate={{
          x: 0,
          opacity: 100,
          transition: { delay: 0.8, duration: 0.8 },
        }}
        className="landing-title text-center mt-4"
      >
        <span className="idea-title">IDEAS</span> INTO
      </motion.p>

      <div className="flex flex-col-reverse lg:flex-row  justify-between">
        <div>
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 100,
              transition: { delay: 1, duration: 1 },
            }}
            className="my-8 sm:text-lg lg:text-xl  text-gray-600 font-medium"
          >
            We aspire to lead the way in innovative software development <br />
            turning every vision into a reality for businesses, <br />
            regardless of their size.
          </motion.p>

          <motion.button
            initial={{ y: -30, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 100,
              transition: { delay: 1.4, duration: 1 },
            }}
            className="bg-gray-500 py-2 px-4 text-white rounded-lg sm:text-xl"
          >
            Get started now
          </motion.button>
        </div>
        <motion.p
          initial={{ y: 100, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 100,
            transition: { delay: 1, duration: 0.8 },
          }}
          className="landing-title text-right mt-4"
        >
          REALITY
        </motion.p>
      </div>

      <motion.div
        initial={{ scale: 0 }}
        animate={{
          scale: 1,
          transition: { delay: 2, duration: 1 },
        }}
      >
        <Image
          src="/assets/main-bg.jpg"
          alt="landing thumbnail"
          width={1000}
          height={800}
          priority={true}
          className="w-full my-8 rounded-md lg:m-0 lg:w-1/2 lg:absolute lg:top-[70%] lg:left-1/2 lg:-translate-x-1/2 aspect-[16/9]"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 100,
          transition: { delay: 2, duration: 0.6 },
        }}
        className="hidden lg:flex container bg-transparent border-0 w-full absolute bottom-5 left-0 justify-between text-xl text-gray-600"
      >
        <h4>2022</h4>
        <h4>Kalodhunga Creations</h4>
      </motion.div>
    </section>
  );
}

export default NewLandingPage;
