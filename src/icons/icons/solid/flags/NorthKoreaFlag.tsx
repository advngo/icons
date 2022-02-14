import * as React from "react";
import { SVGProps } from "react";

const SvgNorthKoreaFlag = (props: SVGProps<SVGSVGElement>) => (
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
        fill: "#41479b",
      }}
      d="M0 385.379c0 21.177 17.167 38.345 38.345 38.345h435.31c21.177 0 38.345-17.167 38.345-38.345v-5.793H0v5.793zM473.655 88.276H38.345C17.167 88.276 0 105.443 0 126.621v5.793h512v-5.793c0-21.178-17.167-38.345-38.345-38.345z"
    />
    <path
      style={{
        fill: "#f5f5f5",
      }}
      d="M0 132.41h512v17.655H0zM0 361.93h512v17.655H0z"
    />
    <path
      style={{
        fill: "#ff4b55",
      }}
      d="M0 150.07h512v211.86H0z"
    />
    <circle
      style={{
        fill: "#f5f5f5",
      }}
      cx={141.24}
      cy={256}
      r={70.62}
    />
    <path
      style={{
        fill: "#ff4b55",
      }}
      d="m143.122 191.705 14.167 42.478 44.777.348c1.905.014 2.695 2.445 1.162 3.577l-36.021 26.6 13.506 42.692c.575 1.816-1.493 3.318-3.042 2.211l-36.429-26.039-36.429 26.038c-1.549 1.108-3.617-.395-3.042-2.211l13.507-42.692-36.021-26.6c-1.533-1.131-.743-3.562 1.162-3.577l44.777-.348 14.167-42.478c.601-1.806 3.156-1.806 3.759.001z"
    />
  </svg>
);

export default SvgNorthKoreaFlag;
