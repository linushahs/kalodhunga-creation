import Image from "next/image";
import Navbar from "../layout/Navbar";
import * as Icon from "./assets/index";

function LandingPageV2() {
  return (
    <section className="relative lg:h-screen lg:overflow-hidden container flex flex-col w-full mx-auto z-10">
      <Navbar />

      {/* grid transparent image ---------------  */}
      <Image
        src="/assets/grid.png"
        alt="background grid "
        width={1200}
        height={500}
        className="absolute -z-30 left-1/2 top-0 -translate-x-1/2 opacity-50"
      />

      <main
        className="relative flex flex-col items-center pt-12"
        style={{ backgroundImage: `url('')` }}
      >
        <h1 className="text-center">
          Turning Pixels into magic: <br />
          Where creativity meets code
        </h1>

        <p className="w-[40%] py-8 text-lg text-gray-500 text-center">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse dolor
          quasi minima quia. Debitis vero at, amet, consequuntur doloribus
          blanditiis quibusdam praesentium repellat voluptatem quis quia omnis
          provident quos nostrum.
        </p>

        <form className="flex gap-4">
          <input
            type="text"
            className="py-2.5 px-4 rounded-lg  text-xl w-[460px]"
            placeholder="Say Hello"
          />
          <button
            type="submit"
            className="bg-[#322EFF] hover:bg-[#322EFF]/90 py-2.5 px-4 rounded-lg text-white w-[160px] text-xl"
          >
            Contact me
          </button>
        </form>

        <Icon.Html className="absolute top-16 right-[200px]" />
        <Icon.ReactJs className="absolute bottom-0 left-[200px]" />
        <Icon.NodeJs className="absolute bottom-0 right-4" />
        <Icon.MongoDb className="absolute top-16 left-10" />
      </main>

      {/* image section --------------  */}
      <div className="flex justify-center mt-16">
        <div className="absolute bottom-0 w-[900px] h-[220px]">
          <Image
            src="/assets/landing-pic.png"
            alt="landing picture"
            width={1000}
            height={500}
            className="rounded-tl-lg rounded-tr-lg w-full"
          />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[93%] bg-[#AAAAAA] h-full -mt-3 -z-10 rounded-lg"></div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[87%] bg-[#6C6C6C] h-full -mt-6 -z-20 rounded-lg"></div>
          <Icon.Star className="absolute -left-32 top-0 -z-10" />
          <Icon.Star2 className="absolute -right-32 top-0 -z-10" />
        </div>
      </div>
    </section>
  );
}

export default LandingPageV2;
