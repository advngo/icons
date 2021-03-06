import { SVGProps } from "react";

const SvgBotswanaFlag = (props: SVGProps<SVGSVGElement>) => (
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
        fill: "#82afff",
      }}
      d="M473.654 423.724H38.345C17.167 423.724 0 406.557 0 385.379V126.621c0-21.177 17.167-38.345 38.345-38.345h435.309c21.177 0 38.345 17.167 38.345 38.345v258.758c0 21.178-17.168 38.345-38.345 38.345z"
    />
    <path
      style={{
        fill: "#464655",
      }}
      d="M0 229.521h512v52.965H0z"
    />
    <path
      style={{
        fill: "#f5f5f5",
      }}
      d="M0 211.861h512v17.655H0zM0 282.481h512v17.655H0z"
    />
  </svg>
);

export default SvgBotswanaFlag;
