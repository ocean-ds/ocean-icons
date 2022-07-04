import React from 'react';

type IconProps = {
  size?: number;
} & React.SVGProps<SVGSVGElement>;

const CashbackOutline = (
  { size = 24, ...props }: IconProps,
  svgRef: React.Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    width={size}
    height={size}
    ref={svgRef}
    {...props}
  >
    <path d="M14.5 9.5c-.25-.833-1.083-1.25-2.5-1.25m0 0c-2.167 0-2.5 1.25-2.5 1.917 0 2.583 5 1.25 5 3.75 0 .666-.333 1.833-2.5 1.833m0-7.5V7m0 8.75c-1.417 0-2.25-.417-2.5-1.25m2.5 1.25V17" />
    <path d="M3 12a9 9 0 112 5.657M7 17H4v2.7" />
  </svg>
);

const ForwardRef = React.forwardRef(CashbackOutline);
export default ForwardRef;
