import { SVGProps } from "react";

const SvgNorfolkIslandFlag = (props: SVGProps<SVGSVGElement>) => (
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
      d="M38.345 88.273C17.167 88.273 0 105.44 0 126.618v258.759c0 21.177 17.167 38.345 38.345 38.345h132.322V88.273H38.345z"
    />
    <path
      style={{
        fill: "#f5f5f5",
      }}
      d="M170.67 88.277h170.67v335.45H170.67z"
    />
    <path
      style={{
        fill: "#73af00",
      }}
      d="M473.655 88.273H341.333v335.448h132.322c21.177 0 38.345-17.167 38.345-38.345V126.618c0-21.178-17.167-38.345-38.345-38.345zM314.959 342.596l-27.396-159.812a49.976 49.976 0 0 0-6.402-17.266L256 123.583l-25.161 41.935a49.956 49.956 0 0 0-6.402 17.266l-27.396 159.813a4.997 4.997 0 0 0 4.925 5.841h44.041v39.973h19.987v-39.974h44.041a4.996 4.996 0 0 0 4.924-5.841z"
    />
  </svg>
);

export default SvgNorfolkIslandFlag;
