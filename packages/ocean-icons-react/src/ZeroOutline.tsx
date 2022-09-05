import React, { forwardRef } from 'react';

type IconProps = {
  size?: number;
} & React.SVGProps<SVGSVGElement>;

const ZeroOutline = (
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
    <rect width={10} height={18} x={7} y={3} strokeWidth={2} rx={5} />
    <path
      strokeLinecap="round"
      strokeWidth={2}
      d="M19.233 2.395 5.395 21.767"
    />
  </svg>
);

const ForwardRef = forwardRef(ZeroOutline);
export default ForwardRef;
