import { SVGProps } from "react";

const SvgBurkinaFasoFlag = (props: SVGProps<SVGSVGElement>) => (
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
      d="M473.651 88.257H38.292c-20.485 0-37.215 16.061-38.292 36.277V256h512V126.606c0-21.18-17.169-38.349-38.349-38.349z"
    />
    <path
      style={{
        fill: "#73af00",
      }}
      d="M0 387.466c1.077 20.215 17.807 36.277 38.292 36.277h435.359c21.18 0 38.349-17.169 38.349-38.349V256H0v131.466z"
    />
    <path
      style={{
        fill: "#ffe15a",
      }}
      d="m258.715 207.849 11.107 33.304 35.106.273c2.72.021 3.847 3.492 1.66 5.107l-28.242 20.855 10.59 33.472c.82 2.593-2.132 4.739-4.345 3.156l-28.563-20.414-28.562 20.415c-2.213 1.581-5.166-.564-4.345-3.156l10.59-33.472-28.242-20.855c-2.188-1.616-1.061-5.086 1.66-5.107l35.106-.273 11.107-33.304c.862-2.581 4.512-2.581 5.373-.001z"
    />
  </svg>
);

export default SvgBurkinaFasoFlag;
