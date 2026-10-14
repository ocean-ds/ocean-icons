import React, { forwardRef } from 'react';

type IconProps = {
  size?: number;
} & React.SVGProps<SVGSVGElement>;

const Equal = (
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
    <path d="M14 11a1 1 0 1 1 0 2H6a1 1 0 1 1 0-2h8zm0-5a1 1 0 1 1 0 2H6a1 1 0 0 1 0-2h8z" />
  </svg>
);

const ForwardRef = forwardRef(Equal);
export default ForwardRef;
