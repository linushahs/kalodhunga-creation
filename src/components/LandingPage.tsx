import Image from "next/image";

function LandingPage() {
  return (
    <section className="py-8 px-2 flex flex-col items-center w-full sm:px-8 sm:w-[70%] 2xl:w-[70%] mx-auto">
      <h1 className="uppercase  text-center text-2xl font-bold md:font-medium md:text-[42px] md:leading-[42px] xl:text-[46px] 2xl:text-[56px] 2xl:leading-[62px]">
        Innovación: Where Design <br /> Meets Code
      </h1>

      <p className="my-6 text-center w-full sm:w-[80%] lg:w-[60%] xl:w-[500px] text-sm text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eum
        soluta deleniti consectetur deserunt pariatur laudantium cumque unde,
        blanditiis quasi id. Quas necessitatibus
      </p>

      <Image
        src="/assets/laptop.png"
        alt="laptop"
        width={800}
        height={100}
        className="w-full sm:w-[80%] aspect-[16/9]"
      />
    </section>
  );
}

export default LandingPage;
