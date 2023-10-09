import Image from "next/image";

function LandingPage() {
  return (
    <section className=" px-2 flex flex-col items-center w-full sm:px-8  mx-auto">
      <h1 className="uppercase text-center py-4">
        Innovación: Where Design <br /> Meets Code
      </h1>

      <p className="container my-6 text-center sm:w-[80%] lg:w-[60%] xl:w-[550px] text-sm lg:text-md xl:text-lg text-gray-600 font-medium">
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
