import React, { forwardRef } from 'react';

type IconProps = {
  size?: number;
} & React.SVGProps<SVGSVGElement>;

const NumberFourOutline = (
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
      d="M13.17 16.5v-1.969m0 0V7.5l-4.32 7.031h4.32zm0 0h1.08M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"
    />
  </svg>
);

const ForwardRef = forwardRef(NumberFourOutline);
export default ForwardRef;
