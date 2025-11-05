import React, { forwardRef } from 'react';

type IconProps = {
  size?: number;
} & React.SVGProps<SVGSVGElement>;

const GlassesOutline = (
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
      strokeWidth={2}
      d="M10.085 16h3.83M21 15.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0zm-11 0a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m20.99 15.003-2.28-8.54a1.968 1.968 0 0 0-2.41-1.394M3.01 15.003l2.28-8.54A1.968 1.968 0 0 1 7.7 5.068"
    />
  </svg>
);

const ForwardRef = forwardRef(GlassesOutline);
export default ForwardRef;
