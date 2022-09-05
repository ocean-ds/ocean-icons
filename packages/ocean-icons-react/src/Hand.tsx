import React, { forwardRef } from 'react';

type IconProps = {
  size?: number;
} & React.SVGProps<SVGSVGElement>;

const Hand = (
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
      fillRule="evenodd"
      d="M9 3a1 1 0 0 1 2 0v5.5a.5.5 0 0 0 1 0V4a1 1 0 1 1 2 0v4.5a.5.5 0 0 0 1 0V6a1 1 0 1 1 2 0v5a7 7 0 1 1-14 0V9a1 1 0 0 1 2 0v2.5a.5.5 0 0 0 1 0V4a1 1 0 0 1 2 0v4.5a.5.5 0 0 0 1 0V3z"
      clipRule="evenodd"
    />
  </svg>
);

const ForwardRef = forwardRef(Hand);
export default ForwardRef;
