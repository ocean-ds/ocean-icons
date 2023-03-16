import React, { forwardRef } from 'react';

type IconProps = {
  size?: number;
} & React.SVGProps<SVGSVGElement>;

const BtokenOutline = (
  { size = 24, ...props }: IconProps,
  ref: React.Ref<SVGSVGElement>
) => (
  <svg
    width={size}
    stroke="currentColor"
    height={size}
    viewBox="0 0 73 33"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <path
      d="M17.1817 4.9867C14.5468 5.12663 11.9639 4.21555 10 2.45337C8.03606 4.21555 5.45325 5.12663 2.81834 4.9867C2.60628 5.80763 2.49931 6.65216 2.5 7.50004C2.5 12.1592 5.68667 16.075 10 17.185C14.3133 16.075 17.5 12.16 17.5 7.50004C17.5 6.6317 17.3892 5.79004 17.1817 4.9867Z"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

const ForwardRef = forwardRef(BtokenOutline);
export default ForwardRef;
