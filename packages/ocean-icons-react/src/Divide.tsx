import React, { forwardRef } from 'react';

type IconProps = {
  size?: number;
} & React.SVGProps<SVGSVGElement>;

const Divide = (
  { size = 24, ...props }: IconProps,
  ref: React.Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    width={size}
    height={size}
    ref={ref}
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M10.874 5.248a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0zm-7.125 6.75a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75zm7.125 6.753a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0z"
      clipRule="evenodd"
    />
  </svg>
);

const ForwardRef = forwardRef(Divide);
export default ForwardRef;
