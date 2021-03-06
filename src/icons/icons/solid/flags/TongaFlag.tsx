import { SVGProps } from "react";

const SvgTongaFlag = (props: SVGProps<SVGSVGElement>) => (
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
      d="M38.345 423.724h435.31c21.177 0 38.345-17.167 38.345-38.345V126.622c0-21.177-17.167-38.345-38.345-38.345H38.345C17.167 88.277 0 105.444 0 126.622V385.38c0 21.177 17.167 38.344 38.345 38.344z"
    />
    <path
      style={{
        fill: "#f5f5f5",
      }}
      d="M8.828 256h185.379a8.829 8.829 0 0 0 8.828-8.828V97.104a8.828 8.828 0 0 0-8.825-8.828H38.345C17.167 88.277 0 105.444 0 126.622v120.552C0 252.048 3.953 256 8.828 256z"
    />
    <path
      style={{
        fill: "#ff4b55",
      }}
      d="M167.724 150.07h-44.138v-44.138H79.448v44.138H35.31v44.138h44.138v44.138h44.138v-44.138h44.138z"
    />
  </svg>
);

export default SvgTongaFlag;
