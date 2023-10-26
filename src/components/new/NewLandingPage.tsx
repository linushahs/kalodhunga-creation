"use client";

import Image from "next/image";
import PulseWave from "@/components/assets/Pulsewave";
import QuantumX from "@/components/assets/QuantumX";
import PixelForge from "@/components/assets/PixelForge";
import DataMinds from "@/components/assets/DataMinds";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

const clientGroupStyle: string =
  "flex flex-1 justify-center items-center gap-5 mr-12 font-[500] text-[24px] lg:text-[32px] 3xl:text-[48px]";
const clientIconStyle: string = "w-7 h-7";

const clients = [
  {
    id: 1,
    name: "PulseWave",
    icon: <PulseWave className={clientIconStyle} />,
  },
  {
    id: 2,
    name: "QuantumX",
    icon: <QuantumX className={clientIconStyle} />,
  },
  {
    id: 3,
    name: "PixelForge",
    icon: <PixelForge className={clientIconStyle} />,
  },
  {
    id: 4,
    name: "DataMinds",
    icon: <DataMinds className={clientIconStyle} />,
  },
];

function NewLandingPage() {
  return (
    <section className="container flex flex-col w-full mx-auto border-b border-gray-200">
      <motion.h1
        initial={{ x: 100, opacity: 0 }}
        animate={{
          x: 0,
          opacity: 100,
          transition: { delay: 0.6, duration: 0.5 },
        }}
        className="uppercase pt-4"
      >
        TRANSFORMING IDEAS INTO <br /> REALITY
      </motion.h1>

      <motion.p
        initial={{ x: -100, opacity: 0 }}
        animate={{
          x: 0,
          opacity: 100,
          transition: { delay: 0.8, duration: 0.5 },
        }}
        className="my-8 text-sm lg:text-md xl:text-lg text-gray-600 font-medium"
      >
        We aspire to lead the way in innovative software development <br />
        turning every vision into a reality for businesses, <br />
        regardless of their size.
      </motion.p>

      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: 1,
          opacity: 100,
          transition: { delay: 0.9, duration: 1 },
        }}
        className="w-full aspect-[16/9]"
      >
        <Image
          src="/assets/landing-pic.png"
          alt="landing thumbnail"
          width={1000}
          height={800}
          priority={true}
          className="w-full h-full"
        />
      </motion.div>

      {/* CLient we have worked with (section)----- */}
      <div>
        <h3 className="mt-16 text-center font-medium capitalize text-[20px] lg:text-[24px]  3xl:text-[48px]">
          Clients we have worked with
        </h3>

        <Marquee play pauseOnClick autoFill>
          <ul className="client-list flex items-center mt-10 mb-8 ">
            {clients.map((client) => (
              <li key={client.id} className={clientGroupStyle}>
                {client.icon}
                {client.name}
              </li>
            ))}
          </ul>
        </Marquee>
      </div>
    </section>
  );
}

export default NewLandingPage;
