import { SVGProps } from "react";

const SvgSeychellesFlag = (props: SVGProps<SVGSVGElement>) => (
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
      d="M38.345 423.724h435.31c21.177 0 38.345-17.167 38.345-38.345v-73.471L20.404 419.268a38.157 38.157 0 0 0 17.941 4.456z"
    />
    <path
      style={{
        fill: "#41479b",
      }}
      d="M38.345 88.276C17.167 88.276 0 105.443 0 126.621V385.38a38.166 38.166 0 0 0 7.751 23.111L170.666 88.276H38.345z"
    />
    <path
      style={{
        fill: "#ffe15a",
      }}
      d="M170.666 88.276 7.751 408.49a38.66 38.66 0 0 0 3.581 4.098L341.333 88.276H170.666z"
    />
    <path
      style={{
        fill: "#ff4b55",
      }}
      d="M473.655 88.276H341.333L11.331 412.588a38.425 38.425 0 0 0 4.847 4.069L512 200.092v-73.471c0-21.178-17.167-38.345-38.345-38.345z"
    />
    <path
      style={{
        fill: "#f5f5f5",
      }}
      d="M20.404 419.268 512 311.908V200.092L16.178 416.658a38.437 38.437 0 0 0 4.226 2.61z"
    />
  </svg>
);

export default SvgSeychellesFlag;
