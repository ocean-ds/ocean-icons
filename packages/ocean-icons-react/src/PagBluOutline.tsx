import React, { forwardRef } from 'react';

type IconProps = {
  size?: number;
} & React.SVGProps<SVGSVGElement>;

const PagBluOutline = (
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
    <path strokeLinecap="round" d="M4 10h1m-3 4h3" />
    <path
      strokeLinejoin="bevel"
      d="M10.571 4H8.857C8.384 4 8 4.358 8 4.8v14.4c0 .442.384.8.857.8h6.429C17.889 20 20 18.03 20 15.6c0-1.85-1.286-3.2-3.04-4.114 1.303-.686 2.183-1.99 2.183-3.486 0-2.21-1.919-4-4.286-4H9.714"
    />
    <path
      fill="currentColor"
      d="M13.15 10.5a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5zm0 6.4a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12.4 14.6v-6h1.5v6h-1.5z"
      clipRule="evenodd"
    />
  </svg>
);

const ForwardRef = forwardRef(PagBluOutline);
export default ForwardRef;
