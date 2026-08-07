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
      strokeWidth={2}
      d="M17.049 20H12.95a.25.25 0 0 1-.212-.383l2.049-3.278a.25.25 0 0 1 .424 0l2.049 3.279a.25.25 0 0 1-.212.382z"
    />
    <path
      strokeLinecap="round"
      strokeWidth={2}
      d="M11 17H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2m-4-4V6"
    />
  </svg>
);

const ForwardRef = forwardRef(LimitOutline);
export default ForwardRef;
