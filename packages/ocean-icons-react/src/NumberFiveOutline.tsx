import React, { forwardRef } from 'react';

type IconProps = {
  size?: number;
} & React.SVGProps<SVGSVGElement>;

const NumberFiveOutline = (
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
      d="M9.525 15.53a3.018 3.018 0 0 0 2.43 1.195c1.64 0 2.97-1.26 2.97-2.813 0-1.553-1.33-2.812-2.97-2.812a3.018 3.018 0 0 0-2.43 1.195l.54-4.57h4.32M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"
    />
  </svg>
);

const ForwardRef = forwardRef(NumberFiveOutline);
export default ForwardRef;
