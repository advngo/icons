import * as React from "react";
import { SVGProps } from "react";

const SvgChileFlag = (props: SVGProps<SVGSVGElement>) => (
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
        fill: "#f5f5f5",
      }}
      d="M473.655 88.276H158.897a8.829 8.829 0 0 1 8.828 8.828v150.069a8.829 8.829 0 0 1-8.828 8.828H512v-129.38c0-21.178-17.167-38.345-38.345-38.345z"
    />
    <path
      style={{
        fill: "#ff4b55",
      }}
      d="M17.655 256H8.828A8.829 8.829 0 0 1 0 247.172V385.38c0 21.177 17.167 38.345 38.345 38.345h435.31c21.177 0 38.345-17.167 38.345-38.345V256H17.655z"
    />
    <path
      style={{
        fill: "#41479b",
      }}
      d="M8.828 256H158.897a8.829 8.829 0 0 0 8.828-8.828V97.103a8.829 8.829 0 0 0-8.828-8.828H38.345C17.167 88.276 0 105.443 0 126.621v120.552A8.829 8.829 0 0 0 8.828 256z"
    />
    <path
      style={{
        fill: "#f5f5f5",
      }}
      d="m87.262 134.487 8.416 25.234 26.6.206c3.444.026 4.872 4.422 2.101 6.467l-21.398 15.801 8.023 25.362c1.038 3.284-2.7 5.999-5.502 3.997l-21.64-15.467-21.641 15.468c-2.802 2.003-6.54-.714-5.502-3.997l8.023-25.362-21.398-15.801c-2.771-2.046-1.342-6.441 2.101-6.467l26.6-.206 8.416-25.234c1.09-3.268 5.712-3.268 6.801-.001z"
    />
  </svg>
);

export default SvgChileFlag;
