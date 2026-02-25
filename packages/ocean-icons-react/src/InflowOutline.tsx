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
      strokeWidth={2}
      d="M10 17H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m18 14 3 3m0 0-3 3m3-3h-7m-1.96-4c1.128 0 1.96-.895 1.96-2s-.832-2-1.96-2C10.915 9 10 9.895 10 11s.914 2 2.04 2z"
    />
  </svg>
);

const ForwardRef = forwardRef(InflowOutline);
export default ForwardRef;
