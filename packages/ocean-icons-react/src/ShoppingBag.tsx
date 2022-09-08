import React, { forwardRef } from 'react';

type IconProps = {
  size?: number;
} & React.SVGProps<SVGSVGElement>;

const ShoppingBag = (
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
      d="M10 2a4 4 0 0 0-4 4v1H5a1 1 0 0 0-.994.89l-1 9A1 1 0 0 0 4 18h12a1 1 0 0 0 .994-1.11l-1-9A1 1 0 0 0 15 7h-1V6a4 4 0 0 0-4-4zm2 5V6a2 2 0 1 0-4 0v1h4zm-6 3a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm7-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
      clipRule="evenodd"
    />
  </svg>
);

const ForwardRef = forwardRef(ShoppingBag);
export default ForwardRef;
