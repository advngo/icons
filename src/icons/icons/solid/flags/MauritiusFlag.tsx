import { SVGProps } from "react";

const SvgMauritiusFlag = (props: SVGProps<SVGSVGElement>) => (
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
      d="M473.655 88.276H38.345C17.167 88.276 0 105.443 0 126.621v45.517h512v-45.517c0-21.178-17.167-38.345-38.345-38.345z"
    />
    <path
      style={{
        fill: "#41479b",
      }}
      d="M0 172.14h512V256H0z"
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
  </svg>
);

export default SvgMauritiusFlag;
