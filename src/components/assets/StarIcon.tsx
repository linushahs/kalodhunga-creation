import React, { ReactElement, SVGProps } from "react";

interface StartIconProps extends SVGProps<SVGSVGElement> {
  // Add any additional props you want to support here
  color?: string;
}

const StartIcon = ({
  color = "black",
  ...props
}: StartIconProps): ReactElement => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill={color}
      {...props}
    >
      <path
        d="M9 0L10.4467 5.0251L14.7851 2.1056L12.6633 6.885L17.8633 7.43717L13.1657 9.73453L16.7942 13.5L11.719 12.2404L12.0782 17.4572L9 13.23L5.92182 17.4572L6.28101 12.2404L1.20577 13.5L4.83426 9.73453L0.13673 7.43717L5.33671 6.885L3.21491 2.1056L7.55326 5.0251L9 0Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default StartIcon;
