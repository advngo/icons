import { SVGProps } from "react";

const SvgLibyaFlag = (props: SVGProps<SVGSVGElement>) => (
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
      d="M0 385.379c0 21.177 17.167 38.345 38.345 38.345h435.31c21.177 0 38.345-17.167 38.345-38.345v-49.931H0v49.931z"
    />
    <path
      style={{
        fill: "#ff4b55",
      }}
      d="M473.655 88.276H38.345C17.167 88.276 0 105.443 0 126.621v49.931h512v-49.931c0-21.178-17.167-38.345-38.345-38.345z"
    />
    <path
      style={{
        fill: "#464655",
      }}
      d="M0 176.55h512v158.9H0z"
    />
    <path
      style={{
        fill: "#f5f5f5",
      }}
      d="m306.058 227.432 13.286 17.379 20.745-6.944c1.16-.388 2.146.924 1.452 1.93l-12.424 18.006 13.014 17.583c.727.983-.215 2.327-1.387 1.977l-20.963-6.251-12.701 17.811c-.711.996-2.28.514-2.31-.708l-.533-21.869-20.864-6.575c-1.166-.367-1.194-2.008-.04-2.415l20.634-7.264-.193-21.875c-.011-1.224 1.541-1.757 2.284-.785z"
    />
    <path
      style={{
        fill: "#f5f5f5",
      }}
      d="M270.001 298.898c-23.672 0-42.876-19.203-42.876-42.898 0-23.65 19.203-42.897 42.876-42.897 8.808 0 16.93 2.709 23.699 7.294 1.036.702 2.22-.66 1.352-1.562-10.116-10.517-24.434-16.934-40.309-16.392-27.274.93-49.852 22.797-51.594 50.031-1.996 31.194 22.703 57.118 53.455 57.118 15.148 0 28.762-6.333 38.485-16.459.858-.895-.327-2.236-1.354-1.54-6.776 4.592-14.911 7.305-23.734 7.305z"
    />
  </svg>
);

export default SvgLibyaFlag;
