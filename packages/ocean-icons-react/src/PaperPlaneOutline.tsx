import React, { forwardRef } from 'react';

type IconProps = {
  size?: number;
} & React.SVGProps<SVGSVGElement>;

const PaperPlaneOutline = (
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
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20 4 2 11.23l7.26 3.54L12.816 22 20 4z"
    />
    <path strokeWidth={2} d="M9 15 20 4" />
  </svg>
);

const ForwardRef = forwardRef(PaperPlaneOutline);
export default ForwardRef;
