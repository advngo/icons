import { SVGProps } from "react";

const SvgTrinidadAndTobagoFlag = (props: SVGProps<SVGSVGElement>) => (
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
      d="M473.655 423.724H38.345C17.167 423.724 0 406.557 0 385.379V126.621c0-21.177 17.167-38.345 38.345-38.345h435.31c21.177 0 38.345 17.167 38.345 38.345V385.38c0 21.177-17.167 38.344-38.345 38.344z"
    />
    <path
      style={{
        fill: "#f5f5f5",
      }}
      d="m11.668 99.091 350.263 324.633h26.483L28.014 89.695a38.282 38.282 0 0 0-16.346 9.396zM500.332 412.909 150.069 88.276h-26.483l360.399 334.029a38.28 38.28 0 0 0 16.347-9.396z"
    />
    <path
      style={{
        fill: "#464655",
      }}
      d="m26.483 88.276 361.931 335.448h97.103L123.586 88.276z"
    />
  </svg>
);

export default SvgTrinidadAndTobagoFlag;
