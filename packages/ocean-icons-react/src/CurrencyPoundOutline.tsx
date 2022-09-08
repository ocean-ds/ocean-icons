import React, { forwardRef } from 'react';

type IconProps = {
  size?: number;
} & React.SVGProps<SVGSVGElement>;

const CurrencyPoundOutline = (
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
      d="M15 9a2 2 0 1 0-4 0v5a2 2 0 0 1-2 2h6m-6-4h4m8 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"
    />
  </svg>
);

const ForwardRef = forwardRef(CurrencyPoundOutline);
export default ForwardRef;
