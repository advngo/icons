import { SVGProps } from "react";

const SvgGambiaFlag = (props: SVGProps<SVGSVGElement>) => (
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
        fill: "#73af00",
      }}
      d="M0 385.379c0 21.177 17.167 38.345 38.345 38.345h435.31c21.177 0 38.345-17.167 38.345-38.345v-76.414H0v76.414z"
    />
    <path
      style={{
        fill: "#ff4b55",
      }}
      d="M473.655 88.276H38.345C17.167 88.276 0 105.443 0 126.621v76.414h512v-76.414c0-21.178-17.167-38.345-38.345-38.345z"
    />
    <path
      style={{
        fill: "#41479b",
      }}
      d="M0 220.69h512v70.62H0z"
    />
    <path
      style={{
        fill: "#f5f5f5",
      }}
      d="M0 203.03h512v17.655H0zM0 291.31h512v17.655H0z"
    />
  </svg>
);

export default SvgGambiaFlag;
