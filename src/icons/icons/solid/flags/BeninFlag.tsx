import { SVGProps } from "react";

const SvgBeninFlag = (props: SVGProps<SVGSVGElement>) => (
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
        fill: "#ffe15a",
      }}
      d="M512 126.621c0-21.177-17.167-38.345-38.345-38.345H38.345C17.167 88.276 0 105.443 0 126.621V256h512V126.621z"
    />
    <path
      style={{
        fill: "#ff4b55",
      }}
      d="M38.345 423.724h435.31c21.177 0 38.345-17.167 38.345-38.345V256H0v129.379c0 21.178 17.167 38.345 38.345 38.345z"
    />
    <path
      style={{
        fill: "#73af00",
      }}
      d="M38.115 423.719h132.551V88.276H38.345C17.167 88.276 0 105.443 0 126.621V385.38c0 21.099 17.045 38.214 38.115 38.339z"
    />
  </svg>
);

export default SvgBeninFlag;
