import { SVGProps } from "react";

const SvgStLuciaFlag = (props: SVGProps<SVGSVGElement>) => (
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
        fill: "#3cc8ff",
      }}
      d="M473.655 423.724H38.345C17.167 423.724 0 406.557 0 385.379V126.621c0-21.177 17.167-38.345 38.345-38.345h435.31c21.177 0 38.345 17.167 38.345 38.345V385.38c0 21.177-17.167 38.344-38.345 38.344z"
    />
    <path
      style={{
        fill: "#464655",
      }}
      d="M256.057 114.759 132.471 397.241h247.173z"
    />
    <path
      style={{
        fill: "#f5f5f5",
      }}
      d="m256.057 158.806 96.591 220.78H159.466l96.591-220.78m0-44.047L132.471 397.241h247.172L256.057 114.759z"
    />
    <path
      style={{
        fill: "#ffe15a",
      }}
      d="M132.471 397.241 256.057 256l123.587 141.241z"
    />
  </svg>
);

export default SvgStLuciaFlag;
