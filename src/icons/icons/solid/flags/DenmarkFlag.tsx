import { SVGProps } from "react";

const SvgDenmarkFlag = (props: SVGProps<SVGSVGElement>) => (
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
      d="M512 229.517H211.862V88.276h-52.965v141.241H0v52.966h158.897v141.241h52.965V282.483H512z"
    />
  </svg>
);

export default SvgDenmarkFlag;
