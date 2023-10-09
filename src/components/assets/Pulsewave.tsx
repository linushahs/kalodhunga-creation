import React, { ReactElement, SVGProps } from "react";

interface PulseWaveProps extends SVGProps<SVGSVGElement> {
  // Add any additional props you want to support here
  color?: string;
}

const PulseWave = ({
  color = "black",
  ...props
}: PulseWaveProps): ReactElement => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="58"
      height="59"
      viewBox="0 0 58 59"
      fill={color}
      {...props}
    >
      <path
        d="M20.8309 37.8771H0V40.2903H18.451V59H20.8309V37.8771ZM0 21.1229V18.7097H18.451V0H20.8335V21.1229H0ZM37.1665 0H39.5463V18.7097H57.9973V21.1229H37.1665V0ZM39.549 40.2903V59H37.1691V37.8771H58V40.2903H39.549Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default PulseWave;
