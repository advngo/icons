import { SVGProps } from "react";

const SvgMadeiraFlag = (props: SVGProps<SVGSVGElement>) => (
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
        fill: "#41479b",
      }}
      d="M473.655 88.273H341.333v335.448h132.322c21.177 0 38.345-17.167 38.345-38.345V126.618c0-21.178-17.167-38.345-38.345-38.345z"
    />
    <path
      style={{
        fill: "#ffe15a",
      }}
      d="M170.67 88.277h170.67v335.45H170.67z"
    />
    <path
      style={{
        fill: "#41479b",
      }}
      d="M38.345 88.273C17.167 88.273 0 105.44 0 126.618v258.759c0 21.177 17.167 38.345 38.345 38.345h132.322V88.273H38.345z"
    />
    <path
      style={{
        fill: "#ff4b55",
      }}
      d="M300.138 233.928h-22.069v-22.069l13.241-17.655h-70.62l13.241 17.655v22.069h-22.069l-17.655-13.241v70.62l17.655-13.241h22.069v22.069L220.69 317.79h70.62l-13.241-17.655v-22.069h22.069l17.655 13.241v-70.62z"
    />
    <path
      style={{
        fill: "#f5f5f5",
      }}
      d="M300.138 247.169h-35.31v-35.31h-17.656v35.31h-35.31v17.656h35.31v35.31h17.656v-35.31h35.31z"
    />
  </svg>
);

export default SvgMadeiraFlag;
