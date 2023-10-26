"use client";

import Image from "next/image";

function NewLandingPage() {
  return (
    <section className="relative container h-screen flex flex-col w-full mx-auto border-b border-gray-200">
      <h1 className="uppercase pt-4">TRANSFORMING</h1>
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

          <button className="bg-background py-2 px-4 text-white rounded-lg text-xl">
            Get started now
          </button>
        </div>
        <h1 className="text-right mt-4">REALITY</h1>
      </div>

      <div className="w-1/2 absolute -bottom-[38%] left-1/2 -translate-x-1/2 aspect-[16/9] mt-8">
        <Image
          src="/assets/landing-pic.png"
          alt="landing thumbnail"
          width={1000}
          height={800}
          priority={true}
          className="w-full h-full"
        />
      </div>
    </section>
  );
}

export default NewLandingPage;
