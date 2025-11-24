import React, { forwardRef } from 'react';

type IconProps = {
  size?: number;
} & React.SVGProps<SVGSVGElement>;

const Order = (
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
      d="M16 12a1 1 0 0 1 1 1v1h1a1 1 0 1 1 0 2h-1v1a1 1 0 1 1-2 0v-1h-1a1 1 0 1 1 0-2h1v-1a1 1 0 0 1 1-1z"
      clipRule="evenodd"
    />
    <path
      fillRule="evenodd"
      d="M14 2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7.268A2 2 0 0 1 16 11V4a2 2 0 0 0-2-2zM7 5a1 1 0 0 0 0 2h5a1 1 0 1 0 0-2H7zm0 3a1 1 0 0 0 0 2h5a1 1 0 1 0 0-2H7zm0 3a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2H7z"
      clipRule="evenodd"
    />
  </svg>
);

const ForwardRef = forwardRef(Order);
export default ForwardRef;
