import * as React from "react";
import { SVGProps } from "react";

const SvgScotlandFlag = (props: SVGProps<SVGSVGElement>) => (
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
        fill: "#4173cd",
      }}
      d="M473.655 423.724H38.345C17.167 423.724 0 406.557 0 385.379V126.621c0-21.177 17.167-38.345 38.345-38.345h435.31c21.177 0 38.345 17.167 38.345 38.345V385.38c0 21.177-17.167 38.344-38.345 38.344z"
    />
    <path
      style={{
        fill: "#f5f5f5",
      }}
      d="M511.47 391.713 304.329 256 511.47 120.287c-3.02-18.162-18.796-32.011-37.815-32.011h-9.984L256 224.337 48.329 88.276h-9.984c-19.019 0-34.795 13.849-37.815 32.011L207.671 256 .53 391.713c3.02 18.162 18.796 32.011 37.815 32.011h9.984L256 287.663l207.671 136.061h9.984c19.019 0 34.795-13.849 37.815-32.011z"
    />
  </svg>
);

export default SvgScotlandFlag;
