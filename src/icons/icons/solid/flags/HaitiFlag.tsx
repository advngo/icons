import { SVGProps } from "react";

const SvgHaitiFlag = (props: SVGProps<SVGSVGElement>) => (
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
      d="M473.655 88.276H38.345C17.167 88.276 0 105.443 0 126.621V256h512V126.621c0-21.178-17.167-38.345-38.345-38.345z"
    />
    <path
      style={{
        fill: "#ff4b55",
      }}
      d="M0 385.379c0 21.174 17.162 38.339 38.334 38.345h435.332c21.172-.005 38.334-17.171 38.334-38.345V256H0v129.379z"
    />
  </svg>
);

export default SvgHaitiFlag;
