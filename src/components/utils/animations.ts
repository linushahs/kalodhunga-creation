import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RefObject } from "react";
gsap.registerPlugin(ScrollTrigger);

export const introAnimation = (
  imgRef: RefObject<HTMLImageElement>,
  containerRef: RefObject<HTMLDivElement>
) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: imgRef?.current,
      start: 0,
      end: "1800 0",
      scrub: 4,
      markers: true,
    },
  });

  tl.to(imgRef.current, {
    y: -100,
    duration: 4,
    ease: "power1.inOut",
  })
    .to(imgRef.current, {
      scale: 5.1,
      duration: 10,
      ease: "power1.inOut",
    })
    .to(imgRef.current, {
      opacity: 0,
      duration: 4,
    })
    .to(
      containerRef.current,
      {
        opacity: 0,
        duration: 4,
      },
      "-=4"
    );

  return tl;
};
