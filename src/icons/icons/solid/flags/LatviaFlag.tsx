import { SVGProps } from "react";

const SvgLatviaFlag = (props: SVGProps<SVGSVGElement>) => (
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
        fill: "#c8414b",
      }}
      d="M473.655 88.276H38.345C17.167 88.276 0 105.443 0 126.621v98.483h512v-98.483c0-21.178-17.167-38.345-38.345-38.345zM0 385.379c0 21.177 17.167 38.345 38.345 38.345h435.31c21.177 0 38.345-17.167 38.345-38.345v-98.483H0v98.483z"
    />
    <path
      style={{
        fill: "#f5f5f5",
      }}
      d="M0 225.1h512v61.793H0z"
    />
  </svg>
);

export default SvgLatviaFlag;
