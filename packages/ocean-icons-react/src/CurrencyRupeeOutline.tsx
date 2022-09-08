import React, { forwardRef } from 'react';

type IconProps = {
  size?: number;
} & React.SVGProps<SVGSVGElement>;

const CurrencyRupeeOutline = (
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
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 8h6m-5 0a3 3 0 1 1 0 6H9l3 3m-3-6h6m6 1a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"
    />
  </svg>
);

const ForwardRef = forwardRef(CurrencyRupeeOutline);
export default ForwardRef;
