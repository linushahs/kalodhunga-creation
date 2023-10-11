"use client";

import { useState } from "react";
import { workProcessPoints } from "./utils/constants";
import { twMerge } from "tailwind-merge";

function WorkingProcess() {
  const [selectedPoint, setSelectedPoint] = useState(
    workProcessPoints[0].title
  );

  return (
    <section className="container py-10 border-b border-gray-200">
      <header className="flex justify-between items-start">
        <h1 className="capitalize">
          understand our working <br />
          process
        </h1>
        <span className="mt-6 py-1 px-2.5 sm:px-3.5 font-bold text-[9px] sm:text-xs border border-black rounded-full">
          07
        </span>
      </header>

      <ul className="mt-12">
        {workProcessPoints.map((point, id) => (
          <li
            onClick={() => setSelectedPoint(point.title)}
            key={point.title}
            className={twMerge(
              " py-6  border-b  border-black",
              point.title !== selectedPoint
                ? "first:border-t"
                : "first:pt-0 last:border-b-0"
            )}
          >
            <div
              style={{
                backgroundImage:
                  point.title === selectedPoint ? `url(${point.img})` : "none",
              }}
              className={twMerge(
                "bg-no-repeat bg-cover text-gray-500 cursor-pointer rounded-xl",
                point.title === selectedPoint &&
                  "p-6 sm:px-10 sm:py-12 flex flex-col justify-between h-[250px] sm:h-[300px] md:h-[400px] text-white transition-all"
              )}
            >
              <h3 className="text-lg sm:text-xl capitalize">
                0{id + 1}{" "}
                <span className="ml-3 font-medium">{point.title}</span>
              </h3>
              <p
                className={twMerge(
                  "hidden text-sm sm:text-base",
                  point.title === selectedPoint &&
                    "block text-gray-400 sm:w-1/2"
                )}
              >
                {point.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default WorkingProcess;
