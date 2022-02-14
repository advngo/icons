import * as React from "react";
import { SVGProps } from "react";

const SvgRwandaFlag = (props: SVGProps<SVGSVGElement>) => (
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
        fill: "#ffe15a",
      }}
      d="M0 256h512v83.86H0z"
    />
    <path
      style={{
        fill: "#73af00",
      }}
      d="M0 385.379c0 21.177 17.167 38.345 38.345 38.345h435.31c21.177 0 38.345-17.167 38.345-38.345v-45.517H0v45.517z"
    />
    <path
      style={{
        fill: "#ffe15a",
      }}
      d="m458.211 178.12 36.134-5.982-36.134-5.982 31.094-19.354-35.672 8.301 21.321-29.78-29.78 21.321 8.301-35.672-19.354 31.094-5.983-36.135-5.982 36.134-19.354-31.094 8.301 35.672-29.78-21.321 21.321 29.78-35.672-8.301 31.094 19.354-36.135 5.983 36.134 5.982-31.094 19.354 35.672-8.301-21.321 29.78 29.78-21.321-8.301 35.672 19.354-31.094 5.983 36.135 5.982-36.134 19.354 31.094-8.301-35.672 29.78 21.321-21.321-29.78 35.672 8.301-31.093-19.355zm-30.073 16.087c-12.189 0-22.069-9.88-22.069-22.069s9.88-22.069 22.069-22.069 22.069 9.88 22.069 22.069-9.88 22.069-22.069 22.069z"
    />
    <circle
      style={{
        fill: "#ffe15a",
      }}
      cx={428.14}
      cy={172.14}
      r={16.552}
    />
  </svg>
);

export default SvgRwandaFlag;