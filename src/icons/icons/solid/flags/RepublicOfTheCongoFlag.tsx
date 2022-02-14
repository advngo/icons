import * as React from "react";
import { SVGProps } from "react";

const SvgRepublicOfTheCongoFlag = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.668 412.91c6.901 6.688 16.3 10.812 26.669 10.814h111.732L500.332 99.09c-6.902-6.69-16.306-10.814-26.677-10.814H361.931L11.668 412.91z"
    />
    <path
      style={{
        fill: "#73af00",
      }}
      d="M11.668 412.91 361.931 88.276H38.345C17.167 88.276 0 105.443 0 126.621V385.38c0 10.805 4.477 20.56 11.668 27.53z"
    />
    <path
      style={{
        fill: "#ff4b55",
      }}
      d="M500.332 99.09 150.069 423.724h323.594c21.174-.004 38.337-17.17 38.337-38.345V126.621c0-10.806-4.477-20.561-11.668-27.531z"
    />
  </svg>
);

export default SvgRepublicOfTheCongoFlag;
