import { SVGProps } from "react";

const SvgLaosFlag = (props: SVGProps<SVGSVGElement>) => (
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
        fill: "#ff4b55",
      }}
      d="M473.655 88.276H38.345C17.167 88.276 0 105.443 0 126.621v32.276h512v-32.276c0-21.178-17.167-38.345-38.345-38.345zM0 385.379c0 21.177 17.167 38.345 38.345 38.345h435.31c21.177 0 38.345-17.167 38.345-38.345v-32.276H0v32.276z"
    />
    <path
      style={{
        fill: "#41479b",
      }}
      d="M0 158.9h512v194.21H0z"
    />
    <circle
      style={{
        fill: "#f5f5f5",
      }}
      cx={256}
      cy={256}
      r={70.62}
    />
  </svg>
);

export default SvgLaosFlag;
