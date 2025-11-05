import React, { forwardRef } from 'react';

type IconProps = {
  size?: number;
} & React.SVGProps<SVGSVGElement>;

const DrugStoreOutline = (
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
      strokeWidth={2}
      d="m8.465 8.464 7.07 7.072M4.93 19.07a5 5 0 0 1 0-7.071L12 4.929A5 5 0 0 1 19.071 12l-7.07 7.071a5 5 0 0 1-7.072 0z"
    />
  </svg>
);

const ForwardRef = forwardRef(DrugStoreOutline);
export default ForwardRef;
