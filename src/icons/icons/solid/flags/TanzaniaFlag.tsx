import { SVGProps } from "react";

const SvgTanzaniaFlag = (props: SVGProps<SVGSVGElement>) => (
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
      d="M38.345 88.276C17.167 88.276 0 105.443 0 126.621v217.655l388.414-256H38.345z"
    />
    <path
      style={{
        fill: "#4173cd",
      }}
      d="M473.655 423.724c21.177 0 38.345-17.167 38.345-38.345V167.724l-388.414 256h350.069z"
    />
    <path
      style={{
        fill: "#ffe15a",
      }}
      d="M473.655 88.276h-90.516L0 339.298v46.081c0 21.177 17.167 38.345 38.345 38.345h90.516L512 172.702v-46.081c0-21.178-17.167-38.345-38.345-38.345z"
    />
    <path
      style={{
        fill: "#464655",
      }}
      d="M473.655 88.276h-42.2L0 370.953v14.426c0 21.177 17.167 38.345 38.345 38.345h42.2L512 141.047v-14.426c0-21.178-17.167-38.345-38.345-38.345z"
    />
  </svg>
);

export default SvgTanzaniaFlag;
