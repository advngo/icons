import { SVGProps } from "react";

const SvgIsraelFlag = (props: SVGProps<SVGSVGElement>) => (
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
      d="M473.655 88.275H38.345C17.167 88.275 0 105.442 0 126.62v258.76c0 21.177 17.167 38.345 38.345 38.345h435.31c21.177 0 38.345-17.167 38.345-38.345V126.62c0-21.178-17.167-38.345-38.345-38.345z"
    />
    <path
      style={{
        fill: "#f5f5f5",
      }}
      d="M0 150.07h512v211.86H0z"
    />
    <path
      style={{
        fill: "#41479b",
      }}
      d="m301.869 255.999 22.933-39.721h-45.865L256 176.551l-22.936 39.727h-45.865l22.933 39.721-22.933 39.721h45.865L256 335.448l22.936-39.727h45.865l-22.932-39.722zm.433-26.729-7.933 13.74-7.933-13.74h15.866zm-15.433 26.729-15.433 26.73h-30.873l-15.432-26.73 15.433-26.73h30.873l15.432 26.73zM256 202.533l7.936 13.746h-15.872L256 202.533zm-46.302 26.737h15.865l-7.933 13.74-7.932-13.74zm0 53.459 7.933-13.74 7.933 13.74h-15.866zM256 309.466l-7.936-13.746h15.872L256 309.466zm38.369-40.476 7.933 13.74h-15.865l7.932-13.74z"
    />
  </svg>
);

export default SvgIsraelFlag;
