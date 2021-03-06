import { SVGProps } from "react";

const SvgArmeniaFlag = (props: SVGProps<SVGSVGElement>) => (
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
        fill: "#ffb400",
      }}
      d="M0 387.466c1.077 20.215 17.807 36.277 38.292 36.277h435.359c21.18 0 38.349-17.169 38.349-38.349v-73.479H0v75.551z"
    />
    <path
      style={{
        fill: "#ff4b55",
      }}
      d="M473.651 88.257H38.292c-20.485 0-37.215 16.062-38.292 36.277v75.552h512v-73.479c0-21.18-17.169-38.35-38.349-38.35z"
    />
    <path
      style={{
        fill: "#41479b",
      }}
      d="M0 200.089h512v111.83H0z"
    />
  </svg>
);

export default SvgArmeniaFlag;
