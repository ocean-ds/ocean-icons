import React, { forwardRef } from 'react';

type IconProps = {
  size?: number;
} & React.SVGProps<SVGSVGElement>;

const OutflowOutline = (
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
      d="M14 17h4a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m6 14-3 3m0 0 3 3m-3-3h7m1.96-4c-1.128 0-1.96-.895-1.96-2s.832-2 1.96-2c1.126 0 2.04.895 2.04 2s-.914 2-2.04 2z"
    />
  </svg>
);

const ForwardRef = forwardRef(OutflowOutline);
export default ForwardRef;
