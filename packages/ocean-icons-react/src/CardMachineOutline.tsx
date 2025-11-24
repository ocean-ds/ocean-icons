import React, { forwardRef } from 'react';

type IconProps = {
  size?: number;
} & React.SVGProps<SVGSVGElement>;

const CardMachineOutline = (
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
    <rect width={14} height={20} x={5} y={2} strokeWidth={2} rx={3} />
    <path
      fill="currentColor"
      d="M8 7a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1zm2 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm0 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm0 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3-6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm0 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm0 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3-6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm0 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm0 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
    />
  </svg>
);

const ForwardRef = forwardRef(CardMachineOutline);
export default ForwardRef;
