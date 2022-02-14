import * as React from "react";
import { SVGProps } from "react";

const SvgCzechRepublicFlag = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13.7 97.251C5.326 104.286 0 114.829 0 126.621V385.38c0 11.791 5.326 22.335 13.7 29.369L256 256 13.7 97.251z"
    />
    <path
      style={{
        fill: "#ff4b55",
      }}
      d="M13.7 414.749a38.18 38.18 0 0 0 24.644 8.975h435.31c21.177 0 38.345-17.167 38.345-38.345V256H256L13.7 414.749z"
    />
    <path
      style={{
        fill: "#f5f5f5",
      }}
      d="M473.655 88.276H38.345a38.188 38.188 0 0 0-24.644 8.975L256 256h256V126.621c0-21.178-17.167-38.345-38.345-38.345z"
    />
  </svg>
);

export default SvgCzechRepublicFlag;
