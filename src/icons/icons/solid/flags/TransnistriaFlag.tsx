import { SVGProps } from "react";

const SvgTransnistriaFlag = (props: SVGProps<SVGSVGElement>) => (
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
      d="M38.345 423.724h435.31c21.177 0 38.345-17.167 38.345-38.345v-89.655H0v89.655c0 21.178 17.167 38.345 38.345 38.345zM512 126.621c0-21.177-17.167-38.345-38.345-38.345H38.345C17.167 88.276 0 105.443 0 126.621v89.655h512v-89.655z"
    />
    <path
      style={{
        fill: "#73af00",
      }}
      d="M0 216.28h512v79.45H0z"
    />
  </svg>
);

export default SvgTransnistriaFlag;
