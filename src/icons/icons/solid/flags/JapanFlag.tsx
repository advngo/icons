import * as React from "react";
import { SVGProps } from "react";

const SvgJapanFlag = (props: SVGProps<SVGSVGElement>) => (
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
        fill: "#f5f5f5",
      }}
      d="M473.655 88.275H38.345C17.167 88.275 0 105.442 0 126.62v258.76c0 21.177 17.167 38.345 38.345 38.345h435.31c21.177 0 38.345-17.167 38.345-38.345V126.62c0-21.178-17.167-38.345-38.345-38.345z"
    />
    <circle
      style={{
        fill: "#ff4b55",
      }}
      cx={256}
      cy={255.999}
      r={97.1}
    />
  </svg>
);

export default SvgJapanFlag;
