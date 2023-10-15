import { useRef } from "react";
import { twMerge } from "tailwind-merge";

interface HorizontalSliderProps {
  children: React.ReactNode;
  className?: string;
}

const HorizontalSlider: React.FC<HorizontalSliderProps> = ({
  children,
  className,
}) => {
  let isDragStart = false,
    prevPageX: number,
    prevScrollLeft: number;
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleDragStart = (e: React.MouseEvent) => {
    isDragStart = true;
    prevPageX = e.pageX;
    if (carouselRef.current) prevScrollLeft = carouselRef.current?.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragStart) return;
    e.preventDefault();
    let deltaX = e.pageX - prevPageX;
    if (carouselRef.current)
      carouselRef.current.scrollLeft = prevScrollLeft - deltaX;
  };

  return (
    <div
      ref={carouselRef}
      onMouseDown={handleDragStart}
      onMouseMove={handleMouseMove}
      onMouseUp={() => (isDragStart = false)}
      className={twMerge(
        "my-8 flex items-center gap-4 overflow-x-hidden rounded-full",
        className
      )}
    >
      {children}
    </div>
  );
};

export default HorizontalSlider;
