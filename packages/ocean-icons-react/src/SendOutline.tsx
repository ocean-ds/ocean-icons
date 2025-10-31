import React, { forwardRef } from 'react';

type IconProps = {
  size?: number;
} & React.SVGProps<SVGSVGElement>;

const SendOutline = (
  { size = 24, ...props }: IconProps,
  ref: React.Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 20 20"
    stroke="currentColor"
    width={size}
    height={size}
    ref={ref}
    {...props}
  >
    <path
      strokeLinejoin="round"
      strokeWidth={2}
      d="M18 2 2 8.427l6.454 3.146L11.614 18 18 2z"
    />
    <path strokeWidth={2} d="M8 12 18 2" />
  </svg>
);

const ForwardRef = forwardRef(SendOutline);
export default ForwardRef;
