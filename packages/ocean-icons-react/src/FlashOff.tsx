import React, { forwardRef } from 'react';

type IconProps = {
  size?: number;
} & React.SVGProps<SVGSVGElement>;

const FlashOff = (
  { size = 24, ...props }: IconProps,
  ref: React.Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
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
      d="M15.833 15.833 2.5 2.5m3.333-.833v9.166h2.5v7.5l5.834-10h-3.334l3.334-6.666H5.833z"
    />
  </svg>
);

const ForwardRef = forwardRef(FlashOff);
export default ForwardRef;
