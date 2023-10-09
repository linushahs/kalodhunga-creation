import Image from "next/image";
import { twMerge } from "tailwind-merge";

interface WorkCardProps {
  title: string;
  description: string;
  imgSrc: string;
  bgColor?: string;
  className?: string;
}

function WorkCard({
  title,
  description,
  imgSrc,
  bgColor = "default",
  className,
}: WorkCardProps) {
  const colors: Record<string, string> = {
    purple: "#A566F6",
    green: "#AEF666",
    default: "none",
  };

  return (
    <div className="">
      <div
        className={
          "w-full aspect-video flex justify-center items-center rounded-md"
        }
        style={{ backgroundColor: colors[bgColor] }}
      >
        <Image
          src={imgSrc}
          alt="picture"
          width={700}
          height={100}
          className={twMerge("w-full h-full rounded-t-md ", className)}
        />
      </div>
      <h2 className="mt-3 text-xl font-bold capitalize">{title}</h2>
      <p className="mt-1 text-gray-600 text-sm capitalize">{description}</p>
    </div>
  );
}

export default WorkCard;
