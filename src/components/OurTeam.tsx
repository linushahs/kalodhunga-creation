"use client";

import Image from "next/image";
import HorizontalSlider from "./utils/HorizontalSlider";
import { teamInfo } from "./utils/constants";

function OurTeam() {
  return (
    <section data-scroll-section className="container py-10">
      <h2>our team</h2>

      <HorizontalSlider className="mt-12 sm:mt-16 items-start rounded-none gap-x-10 sm:gap-x-12 lg:gap-x-20">
        {teamInfo.map((member) => (
          <div key={member.id} className="min-w-fit odd:mt-[60px]">
            <Image
              alt="avatar"
              width={400}
              height={400}
              src={member.imgSrc}
              className="w-[220px] sm:w-[280px] lg:w-[350px] aspect-[2/3] object-cover rounded-lg"
            />

            <h3 className="mt-3 text-lg sm:text-xl lg:text-2xl font-[600]">
              {member.name}
            </h3>
            <p className="capitalize text-sm sm:text-lg mt-1 text-gray-600 ">
              {member.position}
            </p>
          </div>
        ))}
      </HorizontalSlider>
    </section>
  );
}

export default OurTeam;
