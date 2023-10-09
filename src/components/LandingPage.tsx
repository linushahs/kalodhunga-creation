import Image from "next/image";
import PulseWave from "./assets/Pulsewave";
import QuantumX from "./assets/QuantumX";
import PixelForge from "./assets/PixelForge";
import DataMinds from "./assets/DataMinds";

const clientGroupStyle: string =
  "flex items-center gap-5 font-[500] text-[24px] lg:text-[32px] 3xl:text-[48px]";
const clientIconStyle: string = "w-7 h-7";

function LandingPage() {
  return (
    <section className=" flex flex-col items-center w-full mx-auto">
      <h1 className="uppercase text-center py-4">
        Innovación: Where Design <br /> Meets Code
      </h1>

      <p className="container my-6 text-center sm:w-[80%] lg:w-[60%] xl:w-[600px] text-sm lg:text-md xl:text-lg text-gray-600 font-medium">
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

      {/* CLient we have worked with (section)----- */}
      <div className="container">
        <h3 className="mt-16 text-center font-medium capitalize sm:text-[24px]  3xl:text-[48px]">
          Clients we have worked with
        </h3>

        <ul className="client-list grid grid-cols-4 gap-x-12 place-items-center mt-8 overflow-scroll">
          <li className={clientGroupStyle}>
            <PulseWave className={clientIconStyle} /> PulseWave
          </li>
          <li className={clientGroupStyle}>
            <QuantumX className={clientIconStyle} /> QuantumX
          </li>
          <li className={clientGroupStyle}>
            <PixelForge className={clientIconStyle} /> PixelForge
          </li>
          <li className={clientGroupStyle}>
            <DataMinds className={clientIconStyle} /> DataMinds
          </li>
        </ul>
      </div>
    </section>
  );
}

export default LandingPage;
