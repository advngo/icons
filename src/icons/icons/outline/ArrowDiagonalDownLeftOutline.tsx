import * as React from "react";
import { SVGProps } from "react";

const SvgArrowDiagonalDownLeftOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 19 19"
    {...props}
  >
    <path
      d="M12.5.5h-6c-2.828 0-4.243 0-5.121.88S.5 3.67.5 6.5v6c0 2.83 0 4.24.879 5.12s2.293.88 5.121.88h6c2.828 0 4.243 0 5.121-.88s.879-2.29.879-5.12v-6"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
    />
    <path
      d="M6.5 12.5H6v.5h.5Zm8.354-7.65a.5.5 0 0 0-.708-.7ZM13.5 12h-7v1h7Zm-6.5.5v-7H6v7Zm-.146.35 8-8-.708-.7-8 8Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgArrowDiagonalDownLeftOutline;
