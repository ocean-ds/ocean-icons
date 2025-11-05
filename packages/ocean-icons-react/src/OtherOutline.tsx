import React, { forwardRef } from 'react';

type IconProps = {
  size?: number;
} & React.SVGProps<SVGSVGElement>;

const OtherOutline = (
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
      d="M21 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm-7 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm-7 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"
    />
  </svg>
);

const ForwardRef = forwardRef(OtherOutline);
export default ForwardRef;
