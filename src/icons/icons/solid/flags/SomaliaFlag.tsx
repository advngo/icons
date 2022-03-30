import { SVGProps } from "react";

const SvgSomaliaFlag = (props: SVGProps<SVGSVGElement>) => (
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
        fill: "#82afff",
      }}
      d="M473.655 423.724H38.345C17.167 423.724 0 406.557 0 385.379V126.621c0-21.177 17.167-38.345 38.345-38.345h435.31c21.177 0 38.345 17.167 38.345 38.345V385.38c0 21.177-17.167 38.344-38.345 38.344z"
    />
    <path
      style={{
        fill: "#f5f5f5",
      }}
      d="m253.466 193.448-14.81 44.409-46.813.363c-2.567.02-3.63 3.295-1.566 4.82l37.658 27.809-14.121 44.633c-.775 2.447 2.012 4.471 4.099 2.978L256 291.239l38.086 27.222c2.088 1.492 4.874-.532 4.099-2.978l-14.121-44.633 37.658-27.809c2.065-1.525 1.001-4.8-1.566-4.82l-46.813-.363-14.81-44.409c-.812-2.435-4.254-2.435-5.067-.001z"
    />
  </svg>
);

export default SvgSomaliaFlag;
