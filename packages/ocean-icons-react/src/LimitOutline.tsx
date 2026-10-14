import React, { forwardRef } from 'react';

type IconProps = {
  size?: number;
} & React.SVGProps<SVGSVGElement>;

const LimitOutline = (
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
      d="M11 17H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2m-4-4V6m2.05 14h-4.1a.25.25 0 0 1-.21-.38l2.05-3.28a.25.25 0 0 1 .42 0l2.05 3.28a.25.25 0 0 1-.21.38z"
    />
  </svg>
);

const ForwardRef = forwardRef(LimitOutline);
export default ForwardRef;
