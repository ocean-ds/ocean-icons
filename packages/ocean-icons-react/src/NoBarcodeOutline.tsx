import React, { forwardRef } from 'react';

type IconProps = {
  size?: number;
} & React.SVGProps<SVGSVGElement>;

const NoBarcodeOutline = (
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
    <path strokeLinecap="round" strokeWidth={2} d="m6 3 12 18" />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M3 18a1 1 0 1 0 2 0V6a1 1 0 1 0-2 0v12zm4 0a1 1 0 1 0 2 0v-6.04L7 8.85V18zM7 6a1 1 0 0 1 .841.46L9 8.261V6a1 1 0 0 0-2 0zm4 9.072V18a1 1 0 0 0 1.987.162L11 15.072zm2-.588-2-3.111V6a1 1 0 1 1 2 0v8.484zm2.9 4.511-.9-1.4V6a1 1 0 1 1 2 0v12a1 1 0 0 1-1.1.995zM19 18a1 1 0 1 0 2 0V6a1 1 0 1 0-2 0v12z"
      clipRule="evenodd"
    />
  </svg>
);

const ForwardRef = forwardRef(NoBarcodeOutline);
export default ForwardRef;
