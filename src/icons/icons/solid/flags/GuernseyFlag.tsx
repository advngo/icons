import { SVGProps } from "react";

const SvgGuernseyFlag = (props: SVGProps<SVGSVGElement>) => (
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
      d="M473.654 423.724H38.345C17.167 423.724 0 406.556 0 385.379V126.621c0-21.177 17.167-38.345 38.345-38.345h435.309c21.177 0 38.345 17.167 38.345 38.345v258.758c0 21.177-17.168 38.345-38.345 38.345z"
    />
    <path
      style={{
        fill: "#ff4b55",
      }}
      d="M512 220.69H291.31V88.276h-70.621V220.69H0v70.62h220.689v132.414h70.621V291.31H512z"
    />
    <path
      style={{
        fill: "#ffe15a",
      }}
      d="M361.93 282.483v-52.966l-13.241 13.242H163.31l-13.241-13.242v52.966l13.241-13.242h185.379z"
    />
    <path
      style={{
        fill: "#ffe15a",
      }}
      d="M229.517 361.931h52.965l-13.241-13.242V163.311l13.241-13.242h-52.965l13.241 13.242v185.378z"
    />
  </svg>
);

export default SvgGuernseyFlag;
