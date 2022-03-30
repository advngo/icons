import { SVGProps } from "react";

const SvgGreenlandFlag = (props: SVGProps<SVGSVGElement>) => (
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
      d="M473.885 88.279H38.115C17.045 88.403 0 105.517 0 126.617v129.385h512V126.617c0-21.1-17.045-38.214-38.115-38.338z"
    />
    <path
      style={{
        fill: "#ff4b55",
      }}
      d="M0 385.376c0 21.177 17.167 38.345 38.345 38.345h435.31c21.177 0 38.345-17.167 38.345-38.345V256.003H0v129.373z"
    />
    <path
      style={{
        fill: "#ff4b55",
      }}
      d="M176.552 141.245c-63.38 0-114.759 51.38-114.759 114.759H291.31c0-63.381-51.378-114.759-114.758-114.759z"
    />
    <path
      style={{
        fill: "#f5f5f5",
      }}
      d="M176.552 370.762c63.38 0 114.759-51.38 114.759-114.759H61.793c0 63.379 51.38 114.759 114.759 114.759z"
    />
  </svg>
);

export default SvgGreenlandFlag;
