import * as React from "react";
import { SVGProps } from "react";

const SvgArrowRightSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M17.55 9.76 12.67 3.9a2 2 0 0 0-3.66 1.3v13.4a2 2 0 0 0 1.35 1.92c.226.087.467.13.71.13a2 2 0 0 0 1.6-.75l4.93-5.88a3.33 3.33 0 0 0-.05-4.26Z"
      fill="#000"
    />
  </svg>
);

export default SvgArrowRightSolid;
