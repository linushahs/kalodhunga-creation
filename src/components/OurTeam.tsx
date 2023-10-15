"use client";

import Image from "next/image";
import HorizontalSlider from "./utils/HorizontalSlider";

const teamInfo = [
  {
    id: 1,
    name: "John Doe",
    position: "ceo and manager",
    imgSrc: "/assets/member-pic.png",
  },
  {
    id: 2,
    name: "John Doe",
    position: "ceo and manager",
    imgSrc: "/assets/member-pic.png",
  },
  {
    id: 3,
    name: "John Doe",
    position: "ceo and manager",
    imgSrc: "/assets/member-pic.png",
  },
  {
    id: 4,
    name: "John Doe",
    position: "ceo and manager",
    imgSrc: "/assets/member-pic.png",
  },
  {
    id: 5,
    name: "John Doe",
    position: "ceo and manager",
    imgSrc: "/assets/member-pic.png",
  },
  {
    id: 6,
    name: "John Doe",
    position: "ceo and manager",
    imgSrc: "/assets/member-pic.png",
  },
  {
    id: 7,
    name: "John Doe",
    position: "ceo and manager",
    imgSrc: "/assets/member-pic.png",
  },
];

function OurTeam() {
  return (
    <section className="container py-10 border-b border-gray-200 ">
      <h2>our team</h2>

      <HorizontalSlider className="mt-12 sm:mt-16 items-start rounded-none gap-x-10 sm:gap-x-12 lg:gap-x-20">
        {teamInfo.map((member) => (
          <div key={member.id} className="min-w-fit odd:mt-[60px]">
            <Image
              alt="avatar"
              width={400}
              height={400}
              src={member.imgSrc}
              className="w-[200px] sm:w-[250px] lg:w-[300px]"
            />

            <h3 className="mt-3 text-lg sm:text-xl lg:text-2xl font-[600]">
              {member.name}
            </h3>
            <p className="capitalize text-xs sm:text-sm mt-1 text-gray-600 ">
              {member.position}
            </p>
          </div>
        ))}
      </HorizontalSlider>
    </section>
  );
}

export default OurTeam;
