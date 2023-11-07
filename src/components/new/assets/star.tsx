import React, { ReactElement, SVGProps } from "react";

interface StarProps extends SVGProps<SVGSVGElement> {
  // Add any additional props you want to support here
  color?: string;
}

export const Star = ({
  color = "#07F570",
  ...props
}: StarProps): ReactElement => {
  return (
    <svg
      width="268"
      height="261"
      viewBox="0 0 268 261"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M134 0L156.705 89.8529L241.111 51.5819L185.017 125.356L267.565 167.485L174.913 169.627L193.442 260.433L134 189.329L74.5579 260.433L93.0873 169.627L0.434875 167.485L82.9827 125.356L26.8891 51.5819L111.295 89.8529L134 0Z"
        fill={color}
      />
    </svg>
  );
};
