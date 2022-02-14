import * as React from "react";
import { SVGProps } from "react";

const SvgSurinameFlag = (props: SVGProps<SVGSVGElement>) => (
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
      d="M473.885 88.279H38.115C17.045 88.403 0 105.517 0 126.617v258.759c0 21.177 17.167 38.345 38.345 38.345h435.31c21.177 0 38.345-17.167 38.345-38.345V126.617c0-21.1-17.045-38.214-38.115-38.338z"
    />
    <path
      style={{
        fill: "#f5f5f5",
      }}
      d="M0 150.07h512v35.31H0zM0 326.62h512v35.31H0z"
    />
    <path
      style={{
        fill: "#c8414b",
      }}
      d="M0 185.38h512v141.24H0z"
    />
    <path
      style={{
        fill: "#ffe15a",
      }}
      d="m253.801 201.617-12.854 38.541-40.627.314c-2.228.018-3.15 2.86-1.359 4.183l32.683 24.135-12.255 38.737c-.672 2.124 1.746 3.881 3.559 2.585L256 286.487l33.053 23.625c1.812 1.295 4.23-.461 3.559-2.585l-12.255-38.737 32.683-24.135c1.792-1.323.868-4.166-1.359-4.183l-40.627-.314-12.854-38.541c-.706-2.112-3.694-2.112-4.399 0z"
    />
  </svg>
);

export default SvgSurinameFlag;