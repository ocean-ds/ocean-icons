import React, { forwardRef } from 'react';

type IconProps = {
  size?: number;
} & React.SVGProps<SVGSVGElement>;

const BtokenOutlineOutline = (
  { size = 24, ...props }: IconProps,
  ref: React.Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 20 20"
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
      d="M17.182 4.987A9.963 9.963 0 0 1 10 2.453a9.962 9.962 0 0 1-7.182 2.534C2.606 5.807 2.5 6.652 2.5 7.5c0 4.66 3.187 8.575 7.5 9.685 4.313-1.11 7.5-5.025 7.5-9.685 0-.868-.11-1.71-.318-2.513z"
    />
  </svg>
);

const ForwardRef = forwardRef(BtokenOutlineOutline);
export default ForwardRef;
