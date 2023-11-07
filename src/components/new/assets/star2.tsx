import React, { ReactElement, SVGProps } from "react";

interface Star2Props extends SVGProps<SVGSVGElement> {
  // Add any additional props you want to support here
  color?: string;
}

export const Star2 = ({
  color = "#1A07F5",
  ...props
}: Star2Props): ReactElement => {
  return (
    <svg
      width="274"
      height="274"
      viewBox="0 0 274 274"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M137 0L156.375 117.625L274 137L156.375 156.375L137 274L117.625 156.375L0 137L117.625 117.625L137 0Z"
        fill={color}
      />
    </svg>
  );
};
