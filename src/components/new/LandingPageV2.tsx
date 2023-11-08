import Image from "next/image";
import Navbar from "../layout/Navbar";
import * as Icon from "./assets/index";

const elementsStyle =
  "-z-10 absolute w-[70px] h-[70px] sm:w-[90px] sm:h-[90px] xl:w-[120px] xl:h-[120px]";

function LandingPageV2() {
  return (
    <section className="relative h-full lg:h-screen lg:overflow-hidden container flex flex-col w-full mx-auto z-10">
      <Navbar />

      {/* grid transparent image ---------------  */}
      <Image
        src="/assets/grid.png"
        alt="background grid "
        width={1300}
        height={500}
        className="h-[80%] md:h-[600px] absolute -z-30 left-1/2 top-0 -translate-x-1/2 opacity-40"
      />

      <main
        className="relative flex flex-col items-center pt-20 sm:pt-16 xl:pt-12"
        style={{ backgroundImage: `url('')` }}
      >
        <h1 className="text-center">
          Turning Pixels into magic: <br />
          Where creativity meets code
        </h1>

        <p className="w-[96%] sm:w-2/3 lg:w-[55%] xl:w-[45%] py-10 lg:py-8 text-sm sm:text-base md:text-lg text-gray-500 text-center">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse dolor
          quasi minima quia. Debitis vero at, amet, consequuntur doloribus
          blanditiis quibusdam praesentium repellat voluptatem quis quia omnis
          provident quos nostrum.
        </p>

        {/* form with input field and button --------  */}
        <form className="w-full flex justify-center gap-4">
          <input
            type="text"
            className="py-2.5 px-4 rounded-lg  sm:text-xl w-[60%] sm:w-[40%] xl:w-[460px]"
            placeholder="Say Hello"
          />
          <button
            type="submit"
            className="bg-[#322EFF] hover:bg-[#322EFF]/90 py-2.5 px-4 rounded-lg text-white w-fit sm:w-[160px] sm:text-xl"
          >
            Contact me
          </button>
        </form>

        <Icon.Html
          className={
            elementsStyle +
            " top-32 sm:top-24 right-[2%] xl:top-16 xl:right-[10%]"
          }
        />
        <Icon.ReactJs
          className={
            elementsStyle +
            " absolute bottom-4 sm:-bottom-10 left-[2%] xl:-bottom-8 xl:left-[12%]"
          }
        />
        <Icon.NodeJs
          className={
            elementsStyle +
            " absolute -bottom-20 right-0 xl:-bottom-8 xl:right-4"
          }
        />
        <Icon.MongoDb
          className={
            elementsStyle +
            " absolute top-9 left-0 sm:top-12 sm:left-6 xl:top-16 xl:left-10"
          }
        />
      </main>

      {/* image section --------------  */}
      <div className="flex justify-center mt-32 sm:mt-24 lg:mt-16">
        <div className="relative lg:absolute lg:-bottom-1.5 md:w-[700px] xl:w-[900px] h-[170px] sm:h-[220px]">
          <Image
            src="/assets/landing-pic.png"
            alt="landing picture"
            width={1000}
            height={600}
            className="h-full rounded-tl-lg rounded-tr-lg w-full object-cover"
          />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[93%] bg-[#AAAAAA] h-full -mt-3 -z-10 rounded-lg"></div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[87%] bg-[#6C6C6C] h-full -mt-6 -z-20 rounded-lg"></div>
          <Icon.Star className="hidden xl:block absolute -left-32 top-0 -z-10" />
          <Icon.Star2 className="hidden xl:block absolute -right-32 top-0 -z-10" />
        </div>
      </div>
    </section>
  );
}

export default LandingPageV2;
