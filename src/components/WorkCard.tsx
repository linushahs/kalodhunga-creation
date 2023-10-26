import Image from "next/image";
import { twMerge } from "tailwind-merge";

interface WorkCardProps {
  title: string;
  description: string;
  imgSrc: string;
  className?: string;
}

function WorkCard({
  title,
  description,
  imgSrc,
  className,
  ...props
}: WorkCardProps) {
  return (
    <div {...props}>
      <div className="w-full aspect-video flex justify-center items-center rounded-md">
        <Image
          src={imgSrc}
          alt="project-thumbnail"
          width={1000}
          height={100}
          className={twMerge(
            "w-full h-full rounded-md object-cover",
            className
          )}
        />
      </div>
      <h2 className="mt-3 text-xl lg:text-2xl font-bold capitalize">{title}</h2>
      <p className="mt-1 text-gray-600 text-sm capitalize">{description}</p>
    </div>
  );
}

export default WorkCard;
