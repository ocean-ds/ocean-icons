import React, { forwardRef } from 'react';

type IconProps = {
  size?: number;
} & React.SVGProps<SVGSVGElement>;

const InflowOutline = (
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
      d="M10 17H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4m-2 9 3-3-3-3m3 3h-7m0-6c0 1.105-.832 2-1.96 2-1.126 0-2.04-.895-2.04-2s.914-2 2.04-2c1.128 0 1.96.895 1.96 2z"
    />
  </svg>
);

const ForwardRef = forwardRef(InflowOutline);
export default ForwardRef;
