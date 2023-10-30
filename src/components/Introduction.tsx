import Image from "next/image";
import StartIcon from "./assets/StarIcon";

const introductionPoints = [
  {
    id: 1,
    title: "We are a Software Development Company founded in 2020",
  },
  {
    id: 2,
    title:
      "Founded in 2020, We are the best company for software design and development",
  },
  {
    id: 3,
    title: "Founded by the team of creative minds",
  },
  {
    id: 4,
    title: "we deliver the best design and development experiences for you ",
  },
  {
    id: 5,
    title: "wanna know about us more , then lets talk",
  },
];

function Introduction() {
  return (
    <section id="about" className="container py-10 ">
      <div className="flex flex-col sm:border-b sm:border-black lg:border-0 sm:flex-row justify-between items-start lg:flex-col">
        <h2 className="w-full border-b border-black pb-2 sm:w-fit sm:border-0 sm:p-0">
          Introduction
        </h2>

        <div className="mt-8 sm:mt-0 w-full sm:w-fit lg:py-4 lg:px-2 lg:mt-8 flex flex-col lg:w-full lg:flex-row lg:justify-between lg:items-center lg:border-t lg:border-b border-black ">
          {[
            "Who are we and how do \n we operate",
            "Our history and future plans",
            "our location and qualification",
          ].map((title, id) => (
            <h3
              key={id}
              className="flex sm:text-lg items-center lg:inline-block capitalize font-semibold border-b sm:last:border-0 border-black first:pt-0 py-2 lg:border-0 lg:p-0"
            >
              <StartIcon className="lg:hidden mr-3" />
              {title}
            </h3>
          ))}
        </div>
      </div>

      {/* about kalodhunga (in points) ---- */}
      <ul className="relative flex flex-col mt-6 sm:mt-0 lg:mt-8">
        {introductionPoints.map((point) => (
          <li
            key={point.id}
            className="flex py-5 sm:py-8 items-center text-[20px] sm:text-[30px] font-[600] border-b border-black"
          >
            <h3 className="min-w-[35px] sm:min-w-[55px]"> 0{point.id}</h3>

            <span className=" py-2 px-3.5 capitalize font-[400] bg-black text-white rounded-md sm:rounded-lg text-[13px] sm:text-[20px]">
              {point.title}
            </span>
          </li>
        ))}

        <Image
          width={1000}
          height={200}
          src="/assets/durbarsquare.png"
          alt="picture"
          className="hidden lg:block w-[320px] h-auto absolute right-0 bottom-[80px]"
        />
      </ul>

      <Image
        width={1000}
        height={200}
        src="/assets/durbarsquare.png"
        alt="picture"
        className="lg:hidden w-full h-auto mt-8 sm:mt-8"
      />

      <div className="flex flex-col gap-y-4 sm:gap-0 sm:flex-row justify-between mt-8 sm:mt-12 font-[500] text-md sm:text-xl">
        <span className="w-fit py-1 px-4 border border-gray-500 rounded-full">
          Imadol-1, Lalitpur. Nepal
        </span>
        <span className="w-fit py-1 px-4 border border-gray-500 rounded-full">
          Kalodhunga Creations
        </span>
      </div>
    </section>
  );
}

export default Introduction;
