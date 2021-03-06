import { SVGProps } from "react";

const SvgSudanFlag = (props: SVGProps<SVGSVGElement>) => (
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
      d="M473.655 88.276H38.345C17.167 88.276 0 105.443 0 126.621v73.471h512v-73.471c0-21.178-17.167-38.345-38.345-38.345z"
    />
    <path
      style={{
        fill: "#464655",
      }}
      d="M0 385.379c0 21.177 17.167 38.345 38.345 38.345h435.31c21.177 0 38.345-17.167 38.345-38.345v-73.471H0v73.471z"
    />
    <path
      style={{
        fill: "#f5f5f5",
      }}
      d="M0 200.09h512V311.9H0z"
    />
    <path
      style={{
        fill: "#73af00",
      }}
      d="m12.828 413.993 193.27-153.418c2.946-2.338 2.946-6.812 0-9.15L12.828 98.007C4.959 105.03 0 115.244 0 126.621V385.38c0 11.376 4.959 21.59 12.828 28.613z"
    />
  </svg>
);

export default SvgSudanFlag;
