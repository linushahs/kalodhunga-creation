import WorkCard from "./WorkCard";

function OurWorks() {
  return (
    <section className="container w-full py-8">
      <h2 className="w-full border-b border-gray-500 pb-6">(our works)</h2>

      <div className="mt-8 grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 xl:grid-cols-2">
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
