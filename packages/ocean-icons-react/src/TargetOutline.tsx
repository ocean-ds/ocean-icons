import React, { forwardRef } from 'react';

type IconProps = {
  size?: number;
} & React.SVGProps<SVGSVGElement>;

const TargetOutline = (
  { size = 24, ...props }: IconProps,
  ref: React.Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 22 22"
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
      d="M15 7V4l3-3 1 2 2 1-3 3h-3zm0 0-4 4m10 0c0 5.523-4.477 10-10 10S1 16.523 1 11 5.477 1 11 1m5 10a5 5 0 1 1-5-5"
    />
  </svg>
);

const ForwardRef = forwardRef(TargetOutline);
export default ForwardRef;
