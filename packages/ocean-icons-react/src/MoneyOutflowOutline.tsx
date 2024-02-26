import React, { forwardRef } from 'react';

type IconProps = {
  size?: number;
} & React.SVGProps<SVGSVGElement>;

const MoneyOutflowOutline = (
  { size = 24, ...props }: IconProps,
  ref: React.Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    width={size}
    height={size}
    ref={ref}
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M15 9.5c-.3-.833-1.3-1.25-3-1.25m0 0c-2.6 0-3 1.25-3 1.917 0 2.583 6 1.25 6 3.75 0 .666-.4 1.833-3 1.833m0-7.5V7m0 8.75c-1.7 0-2.7-.417-3-1.25m3 1.25V17"
    />
    <path
      strokeLinecap="round"
      strokeWidth={2}
      d="M21 12a9 9 0 1 1-9-9 8.97 8.97 0 0 1 3.6.749"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M23 4.633 21 3m0 0-2 1.633M21 3v5"
    />
  </svg>
);

const ForwardRef = forwardRef(MoneyOutflowOutline);
export default ForwardRef;
