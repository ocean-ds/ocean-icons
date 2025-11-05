import React, { forwardRef } from 'react';

type IconProps = {
  size?: number;
} & React.SVGProps<SVGSVGElement>;

const BluLogoOutline = (
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
      strokeLinejoin="bevel"
      strokeWidth={2}
      d="M8 2.5H6c-.552 0-1 .425-1 .95v17.1c0 .525.448.95 1 .95h7.5c3.038 0 5.5-2.34 5.5-5.225 0-2.196-1.5-3.8-3.546-4.886C16.974 10.575 18 9.026 18 7.25c0-2.623-2.239-4.75-5-4.75H7"
    />
    <path
      fill="currentColor"
      d="M11 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
    />
    <path strokeMiterlimit={10} strokeWidth={2} d="M11 8v8" />
  </svg>
);

const ForwardRef = forwardRef(BluLogoOutline);
export default ForwardRef;
