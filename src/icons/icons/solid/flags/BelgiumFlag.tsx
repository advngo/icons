import { SVGProps } from "react";

const SvgBelgiumFlag = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 511.9 511.9"
    xmlSpace="preserve"
    width={24}
    height={24}
    {...props}
  >
    <path
      style={{
        fill: "#ffe15a",
      }}
      d="M473.7 423.65H38.3c-21.1 0-38.3-17.1-38.3-38.3v-258.8c0-21.2 17.2-38.3 38.3-38.3h435.3c21.2 0 38.3 17.2 38.3 38.3v258.8c.1 21.2-17.1 38.3-38.2 38.3z"
    />
    <path
      style={{
        fill: "#464655",
      }}
      d="M38.3 88.25c-21.1 0-38.3 17.1-38.3 38.3v258.8c0 21.2 17.2 38.3 38.3 38.3h132.3V88.25H38.3z"
    />
    <path
      style={{
        fill: "#ff4b55",
      }}
      d="M473.7 88.25H341.3v335.4h132.3c21.2 0 38.3-17.2 38.3-38.3v-258.8c.1-21.2-17.1-38.3-38.2-38.3z"
    />
  </svg>
);

export default SvgBelgiumFlag;
