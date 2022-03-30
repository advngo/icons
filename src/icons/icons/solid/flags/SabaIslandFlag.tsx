import { SVGProps } from "react";

const SvgSabaIslandFlag = (props: SVGProps<SVGSVGElement>) => (
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
      d="M0 385.379c0 21.177 17.167 38.345 38.345 38.345h435.309c21.177 0 38.345-17.167 38.345-38.345V256H0v129.379z"
    />
    <path
      style={{
        fill: "#ff4b55",
      }}
      d="M473.654 88.276H38.345C17.167 88.276 0 105.444 0 126.621V256h511.999V126.621c0-21.177-17.168-38.345-38.345-38.345z"
    />
    <path
      style={{
        fill: "#f5f5f5",
      }}
      d="M255.999 88.276 0 256l255.999 167.724L512 256z"
    />
    <path
      style={{
        fill: "#ffe15a",
      }}
      d="m258.647 158.704 21.191 60.962 64.526 1.315c2.656.054 3.753 3.43 1.636 5.035l-51.431 38.991 18.689 61.775c.769 2.543-2.102 4.63-4.284 3.112l-52.975-36.865-52.976 36.864c-2.182 1.517-5.053-.568-4.284-3.112l18.689-61.775-51.431-38.991c-2.118-1.606-1.021-4.981 1.636-5.035l64.526-1.315 21.191-60.962c.875-2.51 4.425-2.51 5.297.001z"
    />
  </svg>
);

export default SvgSabaIslandFlag;
