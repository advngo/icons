import { SVGProps } from "react";

const SvgJordanFlag = (props: SVGProps<SVGSVGElement>) => (
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
        fill: "#464655",
      }}
      d="M473.655 88.276H38.345a38.165 38.165 0 0 0-23.767 8.266l191.171 103.55H512v-73.471c0-21.178-17.167-38.345-38.345-38.345z"
    />
    <path
      style={{
        fill: "#73af00",
      }}
      d="M14.578 415.458a38.167 38.167 0 0 0 23.767 8.266h435.31c21.177 0 38.345-17.167 38.345-38.345v-73.471H205.75L14.578 415.458z"
    />
    <path
      style={{
        fill: "#f5f5f5",
      }}
      d="M302.368 252.427c2.838 1.537 2.838 5.61 0 7.147l-96.618 52.334H512V200.092H205.749l96.619 52.335z"
    />
    <path
      style={{
        fill: "#ff4b55",
      }}
      d="M302.368 259.574c2.838-1.537 2.838-5.61 0-7.147l-96.619-52.334L14.578 96.542C5.702 103.565 0 114.423 0 126.621V385.379c0 12.198 5.702 23.057 14.578 30.079l191.171-103.55 96.619-52.334z"
    />
    <path
      style={{
        fill: "#f5f5f5",
      }}
      d="m95.399 233.164 5.247 11.381 12.169-2.994a.917.917 0 0 1 1.038 1.302l-5.626 11.198 9.928 7.648a.916.916 0 0 1-.371 1.623l-12.263 2.583.211 12.53a.917.917 0 0 1-1.5.723l-9.665-7.977-9.665 7.977a.917.917 0 0 1-1.5-.723l.211-12.53-12.263-2.583a.916.916 0 0 1-.371-1.623l9.928-7.648-5.626-11.198a.917.917 0 0 1 1.038-1.302l12.169 2.994 5.247-11.381c.326-.71 1.336-.71 1.664 0z"
    />
  </svg>
);

export default SvgJordanFlag;
