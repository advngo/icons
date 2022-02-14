import * as React from "react";
import { SVGProps } from "react";

const SvgThailandFlag = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    xmlSpace="preserve"
    width={24}
    height={24}
    {...props}
  >
    <path
      style={{
        fill: "#f5f5f5",
      }}
      d="M473.7 88.3H38.3C17.1 88.3 0 105.5 0 126.6v258.8c0 21.2 17.2 38.3 38.3 38.3h435.3c21.2 0 38.3-17.2 38.3-38.3V126.6c.1-21.2-17.1-38.3-38.2-38.3z"
    />
    <path
      style={{
        fill: "#ff4b55",
      }}
      d="M0 385.4c0 21.2 17.2 38.3 38.3 38.3h435.3c21.2 0 38.3-17.2 38.3-38.3v-14.6H0v14.6zM473.7 88.3H38.3C17.1 88.3 0 105.5 0 126.6v14.6h512v-14.6c0-21.2-17.2-38.3-38.3-38.3z"
    />
    <path
      style={{
        fill: "#41479b",
      }}
      d="M0 194.2h512v123.6H0z"
    />
  </svg>
);

export default SvgThailandFlag;
