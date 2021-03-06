import { SVGProps } from "react";

const SvgMadagascarFlag = (props: SVGProps<SVGSVGElement>) => (
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
      d="M473.655 88.275H167.724v167.724H512V126.62c0-21.178-17.167-38.345-38.345-38.345z"
    />
    <path
      style={{
        fill: "#73af00",
      }}
      d="M167.724 423.724h305.933c21.177-.002 38.343-17.169 38.343-38.346V255.999H167.724v167.725z"
    />
    <path
      style={{
        fill: "#f5f5f5",
      }}
      d="M167.724 88.275H38.345C17.167 88.275 0 105.442 0 126.62v258.76c0 21.176 17.166 38.344 38.343 38.345h129.382V88.275h-.001z"
    />
  </svg>
);

export default SvgMadagascarFlag;
