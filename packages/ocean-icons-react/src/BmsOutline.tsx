import React, { forwardRef } from 'react';

type IconProps = {
  size?: number;
} & React.SVGProps<SVGSVGElement>;

const BmsOutline = (
  { size = 24, ...props }: IconProps,
  ref: React.Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 25"
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
      d="M20.618 6.484A11.955 11.955 0 0 1 12 3.444a11.955 11.955 0 0 1-8.618 3.04A12.02 12.02 0 0 0 3 9.5c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM10.6 15V9m-2.8 6V9m5.6 6V9m2.8 6V9"
    />
  </svg>
);

const ForwardRef = forwardRef(BmsOutline);
export default ForwardRef;
