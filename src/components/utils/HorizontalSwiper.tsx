import React, { useState } from "react";

interface HorizontalSwiperProps {
  children: React.ReactNode;
  elements: any[];
}

const HorizontalSwiper: React.FC<HorizontalSwiperProps> = ({
  children,
  elements,
}) => {
  const [startIndex, setStartIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);

  const handleTouchStart = (e: React.DragEvent) => {
    setIsDragging(true);
    console.log(e);
    setStartX(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;

    console.log("moved");
    const currentX = e.touches[0].clientX;
    const deltaX = currentX - startX;
    setTranslateX(deltaX);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;

    setIsDragging(false);
    const threshold = 50; // Adjust this value to control the swipe threshold
    const newIndex =
      translateX > threshold
        ? Math.max(0, startIndex - 1)
        : translateX < -threshold
        ? Math.min(elements.length - 1, startIndex + 1)
        : startIndex;

    setTranslateX(0);
    setStartIndex(newIndex);
  };

  return (
    <div
      className="overflow-x-hidden"
      onDrag={handleTouchStart}
      //   onTouchMove={handleTouchMove}
      //   onTouchEnd={handleTouchEnd}
    >
      <div className="flex space-x-4 transition-transform duration-300 ease-in-out">
        {children}
      </div>
    </div>
  );
};

export default HorizontalSwiper;
