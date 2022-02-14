import * as React from "react";
import { SVGProps } from "react";

const SvgPuertoRicoFlag = (props: SVGProps<SVGSVGElement>) => (
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
      d="M473.655 88.276H38.345C17.167 88.276 0 105.443 0 126.621v28.745h512v-28.745c0-21.178-17.167-38.345-38.345-38.345z"
    />
    <path
      style={{
        fill: "#f5f5f5",
      }}
      d="M0 155.37h512v67.09H0z"
    />
    <path
      style={{
        fill: "#ff4b55",
      }}
      d="M0 222.46h512v67.09H0zM0 385.379c0 21.177 17.167 38.345 38.345 38.345h435.31c21.177 0 38.345-17.167 38.345-38.345v-28.745H0v28.745z"
    />
    <path
      style={{
        fill: "#f5f5f5",
      }}
      d="M0 289.55h512v67.09H0z"
    />
    <path
      style={{
        fill: "#41479b",
      }}
      d="m13.7 414.748 233.898-153.244c3.966-2.599 3.966-8.412 0-11.009L13.7 97.251C5.326 104.286 0 114.829 0 126.621V385.38c0 11.791 5.326 22.334 13.7 29.368z"
    />
    <path
      style={{
        fill: "#f5f5f5",
      }}
      d="m90.183 215.026 9.213 27.623 29.118.226c3.769.029 5.333 4.84 2.301 7.08l-23.424 17.298 8.783 27.763c1.138 3.594-2.955 6.568-6.023 4.375l-23.689-16.932-23.69 16.932c-3.066 2.193-7.159-.781-6.023-4.375l8.783-27.763-23.424-17.299c-3.032-2.24-1.47-7.05 2.301-7.08l29.118-.226 9.213-27.623c1.192-3.576 6.25-3.576 7.443.001z"
    />
  </svg>
);

export default SvgPuertoRicoFlag;
