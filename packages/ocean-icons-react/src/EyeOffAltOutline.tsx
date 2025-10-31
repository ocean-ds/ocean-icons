import React, { forwardRef } from 'react';

type IconProps = {
  size?: number;
} & React.SVGProps<SVGSVGElement>;

const EyeOffAltOutline = (
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
      d="M21 8c-1.202 3.477-4.776 6-9 6-4.223 0-7.798-2.523-9-6m15.5 4.5L20 14M4 14l1.5-1.5m3 4.5 1.5-3m5.5 3L14 14"
    />
  </svg>
);

const ForwardRef = forwardRef(EyeOffAltOutline);
export default ForwardRef;
