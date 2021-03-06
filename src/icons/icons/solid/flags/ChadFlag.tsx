import { SVGProps } from "react";

const SvgChadFlag = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512.001 512.001"
    xmlSpace="preserve"
    width={24}
    height={24}
    {...props}
  >
    <path
      style={{
        fill: "#41479b",
      }}
      d="M38.345 88.273C17.167 88.273 0 105.441 0 126.618v258.76c0 21.177 17.167 38.345 38.345 38.345h132.321V88.273H38.345z"
    />
    <path
      style={{
        fill: "#ffe15a",
      }}
      d="M170.67 88.278h170.67v335.45H170.67z"
    />
    <path
      style={{
        fill: "#ff4b55",
      }}
      d="M512 126.581c-.02-21.16-17.179-38.307-38.344-38.307H341.333v335.449h132.324c21.165 0 38.324-17.148 38.344-38.307V126.581H512z"
    />
  </svg>
);

export default SvgChadFlag;
