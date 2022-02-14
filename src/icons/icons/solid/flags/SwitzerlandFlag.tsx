import * as React from "react";
import { SVGProps } from "react";

const SvgSwitzerlandFlag = (props: SVGProps<SVGSVGElement>) => (
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
      d="M473.655 423.724H38.345C17.167 423.724 0 406.557 0 385.379V126.621c0-21.177 17.167-38.345 38.345-38.345h435.31c21.177 0 38.345 17.167 38.345 38.345V385.38c0 21.177-17.167 38.344-38.345 38.344z"
    />
    <path
      style={{
        fill: "#f5f5f5",
      }}
      d="M353.103 220.69H291.31v-61.793a8.829 8.829 0 0 0-8.828-8.828h-52.966a8.829 8.829 0 0 0-8.828 8.828v61.793h-61.793a8.829 8.829 0 0 0-8.828 8.828v52.966a8.829 8.829 0 0 0 8.828 8.828h61.793v61.793a8.829 8.829 0 0 0 8.828 8.828h52.966a8.829 8.829 0 0 0 8.828-8.828V291.31h61.793a8.829 8.829 0 0 0 8.828-8.828v-52.966c0-4.874-3.953-8.826-8.828-8.826z"
    />
  </svg>
);

export default SvgSwitzerlandFlag;
