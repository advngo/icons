import * as React from "react";
import { SVGProps } from "react";

const SvgCameroonFlag = (props: SVGProps<SVGSVGElement>) => (
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
      d="M38.345 423.721h132.322V88.273H38.345C17.167 88.273 0 105.44 0 126.618v258.759c0 21.177 17.167 38.344 38.345 38.344z"
    />
    <path
      style={{
        fill: "#ff4b55",
      }}
      d="M170.67 88.277h170.67v335.45H170.67z"
    />
    <path
      style={{
        fill: "#ffe15a",
      }}
      d="M473.655 423.721c21.177 0 38.345-17.167 38.345-38.345V126.618c0-21.177-17.167-38.345-38.345-38.345H341.334v335.448h132.321zM257.834 223.641l7.584 22.741 23.971.185c1.857.014 2.627 2.385 1.133 3.488l-19.284 14.24 7.231 22.856c.561 1.771-1.455 3.235-2.967 2.155L256 275.366l-19.502 13.94c-1.511 1.08-3.527-.385-2.967-2.155l7.231-22.856-19.284-14.24c-1.494-1.103-.724-3.474 1.133-3.488l23.971-.185 7.584-22.741c.588-1.762 3.08-1.762 3.668 0z"
    />
  </svg>
);

export default SvgCameroonFlag;
