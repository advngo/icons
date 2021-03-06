import { SVGProps } from "react";

const SvgAlandIslandsFlag = (props: SVGProps<SVGSVGElement>) => (
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
        fill: "#4173cd",
      }}
      d="M473.654 423.724H38.345C17.167 423.724 0 406.556 0 385.379V126.621c0-21.177 17.167-38.345 38.345-38.345h435.309c21.177 0 38.345 17.167 38.345 38.345v258.758c0 21.177-17.168 38.345-38.345 38.345z"
    />
    <path
      style={{
        fill: "#ffe15a",
      }}
      d="M512 211.862H229.517V88.276h-88.276v123.586H0v88.276h141.241v123.586h88.276V300.138H512z"
    />
    <path
      style={{
        fill: "#ff4b55",
      }}
      d="M512 238.345H203.034V88.276h-35.31v150.069H0v35.31h167.724v150.069h35.31V273.655H512z"
    />
  </svg>
);

export default SvgAlandIslandsFlag;
