import { SVGProps } from "react";

const SvgCubaFlag = (props: SVGProps<SVGSVGElement>) => (
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
      d="M512 126.621c0-21.177-17.167-38.345-38.345-38.345H38.345C17.167 88.276 0 105.443 0 126.621v28.745h512v-28.745zM38.345 423.724h435.31c21.177 0 38.345-17.167 38.345-38.345v-28.745H0v28.745c0 21.178 17.167 38.345 38.345 38.345z"
    />
    <path
      style={{
        fill: "#f5f5f5",
      }}
      d="M0 155.37h512v67.09H0z"
    />
    <path
      style={{
        fill: "#41479b",
      }}
      d="M0 222.46h512v67.09H0z"
    />
    <path
      style={{
        fill: "#f5f5f5",
      }}
      d="M0 289.55h512v67.09H0z"
    />
    <path
      style={{
        fill: "#ff4b55",
      }}
      d="m13.9 414.921 244.814-155.049c2.841-1.8 2.841-5.945 0-7.745L13.899 97.079C5.409 104.113 0 114.734 0 126.621V385.38c0 11.886 5.409 22.507 13.9 29.541z"
    />
    <path
      style={{
        fill: "#f5f5f5",
      }}
      d="m88.526 213.441 9.064 27.176 28.647.222c2.219.018 3.139 2.849 1.354 4.168l-23.046 17.018 8.641 27.313c.67 2.116-1.74 3.866-3.545 2.575l-23.306-16.658-23.306 16.658c-1.805 1.291-4.215-.46-3.545-2.575l8.641-27.313-23.045-17.018c-1.785-1.319-.865-4.151 1.354-4.168l28.647-.222 9.064-27.176c.701-2.105 3.68-2.105 4.381 0z"
    />
  </svg>
);

export default SvgCubaFlag;
