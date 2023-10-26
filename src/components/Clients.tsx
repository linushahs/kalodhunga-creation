import Marquee from "react-fast-marquee";
import PulseWave from "./assets/Pulsewave";
import QuantumX from "./assets/QuantumX";
import PixelForge from "./assets/PixelForge";
import DataMinds from "./assets/DataMinds";

const clientGroupStyle: string =
  "flex flex-1 justify-center items-center gap-5 mr-12 font-[500] text-[24px] lg:text-[32px] 3xl:text-[48px]";
const clientIconStyle: string = "w-7 h-7";

const clients = [
  {
    id: 1,
    name: "PulseWave",
    icon: <PulseWave className={clientIconStyle} />,
  },
  {
    id: 2,
    name: "QuantumX",
    icon: <QuantumX className={clientIconStyle} />,
  },
  {
    id: 3,
    name: "PixelForge",
    icon: <PixelForge className={clientIconStyle} />,
  },
  {
    id: 4,
    name: "DataMinds",
    icon: <DataMinds className={clientIconStyle} />,
  },
];

function Clients() {
  return (
    <div>
      <h3 className="mt-16 text-center font-medium capitalize text-[20px] lg:text-[24px]  3xl:text-[48px]">
        Clients we have worked with
      </h3>

      <Marquee play pauseOnClick autoFill>
        <ul className="client-list flex items-center mt-10 mb-8 ">
          {clients.map((client) => (
            <li key={client.id} className={clientGroupStyle}>
              {client.icon}
              {client.name}
            </li>
          ))}
        </ul>
      </Marquee>
    </div>
  );
}

export default Clients;
