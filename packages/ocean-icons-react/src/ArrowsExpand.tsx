import React, { forwardRef } from 'react';

type IconProps = {
  size?: number;
} & React.SVGProps<SVGSVGElement>;

const ArrowsExpand = (
  { size = 24, ...props }: IconProps,
  ref: React.Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 19 20"
    fill="currentColor"
    width={size}
    height={size}
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 8V4m0 0h4M3 4l4 4m8 0V4m0 0h-4m4 0-4 4m-8 4v4m0 0h4m-4 0 4-4m8 4-4-4m4 4v-4m0 4h-4"
    />
  </svg>
);

const ForwardRef = forwardRef(ArrowsExpand);
export default ForwardRef;
