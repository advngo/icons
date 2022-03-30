import { SVGProps } from "react";

const SvgGhanaFlag = (props: SVGProps<SVGSVGElement>) => (
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
        fill: "#73af00",
      }}
      d="M0 385.379c0 21.177 17.167 38.345 38.345 38.345h435.31c21.177 0 38.345-17.167 38.345-38.345v-73.471H0v73.471z"
    />
    <path
      style={{
        fill: "#ffe15a",
      }}
      d="M0 200.09h512V311.9H0z"
    />
    <path
      style={{
        fill: "#464655",
      }}
      d="m259.722 213.909 9.213 27.623 29.118.226c3.769.03 5.333 4.84 2.301 7.08l-23.424 17.298 8.783 27.763c1.137 3.594-2.955 6.568-6.023 4.375L256 281.34l-23.69 16.932c-3.066 2.193-7.159-.781-6.023-4.375l8.783-27.763-23.424-17.298c-3.032-2.239-1.47-7.05 2.301-7.08l29.118-.226 9.213-27.623c1.193-3.575 6.251-3.575 7.444.002z"
    />
  </svg>
);

export default SvgGhanaFlag;
