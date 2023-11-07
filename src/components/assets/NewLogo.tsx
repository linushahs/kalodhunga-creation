import React, { ReactElement, SVGProps } from "react";

interface NewLogoProps extends SVGProps<SVGSVGElement> {
  // Add any additional props you want to support here
  color?: string;
}

const NewLogo = ({ color = "black", ...props }: NewLogoProps): ReactElement => {
  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 250 150"
      fill={color}
      {...props}
    >
      <g id="XMLID_2_">
        <path
          id="XMLID_5_"
          className="st0"
          d="M119.6,37.9l-21.7,35L79.3,83.1l-5.2,10l-14.2,8.7c-0.8,0.5-1.6,0.8-2.6,0.9l-30,3.7l-4.2,4.6
		l45.4,0.2l0.4-3.3l32.7-17.1l2.7-6.3h2.7l6-9.1h9.4l-3.8-8.6l4.6-12.9l-5,3.3l2.1-9.2l9,14.2l-6,6l16.3,4.6v-3.3l-10.2-3.3l4-4.8
		l-6.3-5.2l-3.8-7.7l16.3,19.6l12.7,3.5l6.9,9.6l9,4.2l1.7,4.6l22.3,14l6.3,4.2l-22.7-0.2l-12.3-16l-21-8.5l-8.8,15.2l-9.2-7.7
		L110,99.3l1.3,3.1l13.1-8.1l9.4,8.5l10.2-16.3l17.3,7.3l7.3,11.5l2.7,3.1l3.1,2.7l24,0.8l16,1L235,111l7.7,1l-4.8-3.8l-10.6-0.6
		l-27.9-2.9L173.1,90l-3.1-6.5l-9.4-4.8l-7.5-9.6l-10.8-4L119.6,37.9z"
        />
        <polygon
          id="XMLID_4_"
          className="st0"
          points="93.1,112.2 118.8,114.7 136.2,114.7 145.5,112.2 163.8,111 175.8,112.9 178.5,110.4 
		159.6,109.3 144.2,109.3 136.6,112.2 122.8,112 104.7,110.8 81.5,109.3 	"
        />
        <polyline
          id="XMLID_3_"
          className="st0"
          points="66,109.3 81.5,109.3 86.3,110.5 76.2,112 66,111.2 	"
        />
      </g>
    </svg>
  );
};

export default NewLogo;
