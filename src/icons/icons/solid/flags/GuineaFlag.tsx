import { SVGProps } from "react";

const SvgGuineaFlag = (props: SVGProps<SVGSVGElement>) => (
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
      d="M473.885 88.274H341.333v335.443h132.322c21.177 0 38.345-17.167 38.345-38.345V126.613c0-21.101-17.045-38.215-38.115-38.339z"
    />
    <path
      style={{
        fill: "#ffe15a",
      }}
      d="M170.67 88.275h170.67v335.45H170.67z"
    />
    <path
      style={{
        fill: "#ff4b55",
      }}
      d="M38.115 88.274C17.045 88.398 0 105.512 0 126.612v258.759c0 21.177 17.167 38.345 38.345 38.345h132.322V88.274H38.115z"
    />
  </svg>
);

export default SvgGuineaFlag;
