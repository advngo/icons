import * as React from "react";
import { SVGProps } from "react";

const SvgMyanmarFlag = (props: SVGProps<SVGSVGElement>) => (
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
      d="M0 385.379c0 21.177 17.167 38.345 38.345 38.345h435.31c21.177 0 38.345-17.167 38.345-38.345v-73.471H0v73.471z"
    />
    <path
      style={{
        fill: "#ffe15a",
      }}
      d="M473.655 88.276H38.345C17.167 88.276 0 105.443 0 126.621v73.471h512v-73.471c0-21.178-17.167-38.345-38.345-38.345z"
    />
    <path
      style={{
        fill: "#73af00",
      }}
      d="M0 200.09h512V311.9H0z"
    />
    <path
      style={{
        fill: "#f5f5f5",
      }}
      d="m261.032 144.959 26.435 79.263 83.552.648c5.097.04 7.21 6.545 3.11 9.571l-67.214 49.635 25.203 79.663c1.537 4.86-3.996 8.879-8.142 5.916L256 321.068l-67.976 48.587c-4.147 2.964-9.679-1.056-8.142-5.916l25.203-79.663-67.214-49.635c-4.1-3.028-1.986-9.533 3.11-9.571l83.552-.648 26.435-79.263c1.612-4.835 8.452-4.835 10.064 0z"
    />
  </svg>
);

export default SvgMyanmarFlag;
