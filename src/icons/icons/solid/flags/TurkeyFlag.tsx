import * as React from "react";
import { SVGProps } from "react";

const SvgTurkeyFlag = (props: SVGProps<SVGSVGElement>) => (
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
      d="M473.655 88.275H38.345C17.167 88.275 0 105.442 0 126.62v258.76c0 21.177 17.167 38.345 38.345 38.345h435.31c21.177 0 38.345-17.167 38.345-38.345V126.62c0-21.178-17.167-38.345-38.345-38.345z"
    />
    <path
      style={{
        fill: "#f5f5f5",
      }}
      d="m253.474 225.751 13.837 18.101 21.606-7.232c1.208-.405 2.236.962 1.513 2.01l-12.939 18.753 13.555 18.314c.758 1.024-.224 2.423-1.444 2.059l-21.834-6.511-13.228 18.55c-.739 1.037-2.375.536-2.406-.737l-.555-22.777-21.73-6.849c-1.215-.383-1.244-2.092-.042-2.515l21.491-7.566-.202-22.783c-.013-1.274 1.605-1.828 2.378-.817zM176.956 326.661c-38.995 0-70.627-31.633-70.627-70.663 0-38.958 31.633-70.662 70.627-70.662 14.508 0 27.887 4.462 39.038 12.014 1.707 1.156 3.656-1.087 2.227-2.573-16.663-17.325-40.248-27.894-66.398-27.002-44.926 1.533-82.118 37.553-84.989 82.413-3.288 51.384 37.398 94.087 88.054 94.087 24.953 0 47.379-10.432 63.393-27.111 1.415-1.474-.538-3.683-2.229-2.537-11.162 7.568-24.563 12.034-39.096 12.034z"
    />
  </svg>
);

export default SvgTurkeyFlag;
