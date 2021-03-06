import { SVGProps } from "react";

const SvgBahamasFlag = (props: SVGProps<SVGSVGElement>) => (
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
      d="M473.885 88.279H38.115C17.045 88.403 0 105.517 0 126.617v73.478h512v-73.478c0-21.1-17.045-38.214-38.115-38.338zM0 385.376c0 21.177 17.167 38.345 38.345 38.345h435.31c21.177 0 38.345-17.167 38.345-38.345v-73.465H0v73.465z"
    />
    <path
      style={{
        fill: "#ffe15a",
      }}
      d="M0 200.1h512v111.81H0z"
    />
    <path
      style={{
        fill: "#464655",
      }}
      d="m12.831 413.993 193.267-153.415c2.946-2.338 2.946-6.812 0-9.151L12.824 98.007C4.958 105.03 0 115.243 0 126.617v258.759c0 11.379 4.96 21.594 12.831 28.617z"
    />
  </svg>
);

export default SvgBahamasFlag;
