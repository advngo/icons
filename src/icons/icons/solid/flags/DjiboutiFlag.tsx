import { SVGProps } from "react";

const SvgDjiboutiFlag = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13.696 97.252C5.325 104.286 0 114.828 0 126.617v258.759c0 11.794 5.329 22.338 13.704 29.373L256 256.003 13.696 97.252z"
    />
    <path
      style={{
        fill: "#73af00",
      }}
      d="M13.704 414.749a38.183 38.183 0 0 0 24.641 8.972h435.31c21.177 0 38.345-17.167 38.345-38.345V256.003H256L13.704 414.749z"
    />
    <path
      style={{
        fill: "#82afff",
      }}
      d="M473.885 88.279H38.115a38.177 38.177 0 0 0-24.419 8.973L256 256.003h256V126.617c0-21.1-17.045-38.214-38.115-38.338z"
    />
    <path
      style={{
        fill: "#ff4b55",
      }}
      d="m91.766 216.137-8.94 26.806-28.257.22c-1.549.012-2.191 1.99-.946 2.91l22.732 16.787-8.523 26.942c-.467 1.478 1.215 2.699 2.475 1.798l22.989-16.431 22.989 16.431c1.26.9 2.942-.321 2.475-1.798l-8.523-26.942 22.732-16.787c1.246-.92.604-2.898-.946-2.91l-28.257-.22-8.94-26.806c-.491-1.47-2.57-1.47-3.06 0z"
    />
  </svg>
);

export default SvgDjiboutiFlag;
