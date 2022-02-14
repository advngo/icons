import * as React from "react";
import { SVGProps } from "react";

const SvgBasqueCountryFlag = (props: SVGProps<SVGSVGElement>) => (
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
      d="M473.654 423.724H38.345C17.167 423.724 0 406.556 0 385.379V126.621c0-21.177 17.167-38.345 38.345-38.345h435.309c21.177 0 38.345 17.167 38.345 38.345v258.758c0 21.177-17.168 38.345-38.345 38.345z"
    />
    <path
      style={{
        fill: "#73af00",
      }}
      d="M473.654 88.276h-1.921L255.999 229.619 40.267 88.276h-1.922c-17.38 0-32.052 11.567-36.757 27.422L215.735 256 1.588 396.302c4.705 15.854 19.377 27.422 36.757 27.422h1.922l215.732-141.343 215.734 141.343h1.921c17.38 0 32.053-11.567 36.757-27.422L296.265 256l214.146-140.302c-4.705-15.853-19.376-27.422-36.757-27.422z"
    />
    <path
      style={{
        fill: "#f5f5f5",
      }}
      d="M512 233.931H278.068V88.276h-44.137v145.655H0v44.138h233.931v145.655h44.137V278.069H512z"
    />
  </svg>
);

export default SvgBasqueCountryFlag;