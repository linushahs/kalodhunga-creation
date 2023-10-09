import WorkCard from "./WorkCard";

function OurWorks() {
  return (
    <section className="p-8 w-full">
      <h1 className="uppercase  text-[24px] font-bold md:font-medium md:text-[42px] xl:text-[46px] 2xl:text-[56px] 2xl:leading-[62px]">
        (Our works)
      </h1>
      <hr className="my-3 border-gray-800" />

      <div className="mt-8 grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 xl:grid-cols-3">
        <WorkCard
          title="pulsewave mobile ui design"
          description="web design, visual identity"
          imgSrc="/assets/pic1.png"
          bgColor="purple"
          className="w-fit py-4"
        />
        <WorkCard
          title="bonewa mobile app development"
          description="development, deployment"
          imgSrc="/assets/pic2.png"
        />
        <WorkCard
          title="pulsewave mobile ui design"
          description="web design, visual identity"
          imgSrc="/assets/pic3.png"
          bgColor="green"
          className="w-fit py-4"
        />

        <WorkCard
          title="bonewa mobile app development"
          description="development, deployment"
          imgSrc="/assets/pic2.png"
        />
      </div>
    </section>
  );
}

export default OurWorks;
