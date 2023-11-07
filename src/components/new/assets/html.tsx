import React, { ReactElement, SVGProps } from "react";

interface HtmlProps extends SVGProps<SVGSVGElement> {
  // Add any additional props you want to support here
  color?: string;
}

export const Html = ({
  color = "#BD0000",
  ...props
}: HtmlProps): ReactElement => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="122"
      height="122"
      viewBox="0 0 122 122"
      fill={color}
      {...props}
    >
      <rect width="122" height="122" rx="61" fill={color} />
      <path
        d="M29 68V53H31.388V58.5721H38.4547V53H40.8426V68H38.4547V61.0349H31.388V68H29ZM49.9353 68V55.4629H44.6893V53H57.572V55.4629H52.3233V68H49.9353ZM61.416 68V53H77.3106V68H74.9227V55.4629H70.5573V65.214H68.1693V55.4629H63.804V68H61.416ZM83.2347 68V53H85.6227V65.5371H93V68H83.2347Z"
        fill="white"
      />
    </svg>
  );
};
