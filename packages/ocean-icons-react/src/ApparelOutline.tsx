import React, { forwardRef } from 'react';

type IconProps = {
  size?: number;
} & React.SVGProps<SVGSVGElement>;

const ApparelOutline = (
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
      d="M7 12H4a1 1 0 0 1-1-1V7a4 4 0 0 1 4-4h2m-2 9V9m0 3v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-8m0 0h3a1 1 0 0 0 1-1V7a4 4 0 0 0-4-4h-2m2 9V9M9 3v1a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V3M9 3h6"
    />
  </svg>
);

const ForwardRef = forwardRef(ApparelOutline);
export default ForwardRef;
