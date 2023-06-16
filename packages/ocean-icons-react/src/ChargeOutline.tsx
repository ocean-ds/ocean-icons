import React, { forwardRef } from 'react';

type IconProps = {
  size?: number;
} & React.SVGProps<SVGSVGElement>;

const ChargeOutline = (
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
      strokeWidth={2}
      d="M14.5 9.5c-.25-.833-1.083-1.25-2.5-1.25m0 0c-2.167 0-2.5 1.25-2.5 1.917 0 2.583 5 1.25 5 3.75 0 .666-.333 1.833-2.5 1.833m0-7.5V7m0 8.75c-1.417 0-2.25-.417-2.5-1.25m2.5 1.25V17m9-5a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"
    />
  </svg>
);

const ForwardRef = forwardRef(ChargeOutline);
export default ForwardRef;
