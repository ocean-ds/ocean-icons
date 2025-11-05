import React, { forwardRef } from 'react';

type IconProps = {
  size?: number;
} & React.SVGProps<SVGSVGElement>;

const EyeglassStoreOutline = (
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
      strokeWidth={2}
      d="M10 10a2.828 2.828 0 0 1 4 0m8 2a4 4 0 1 1-8 0 4 4 0 0 1 8 0zm-12 0a4 4 0 1 1-8 0 4 4 0 0 1 8 0z"
    />
  </svg>
);

const ForwardRef = forwardRef(EyeglassStoreOutline);
export default ForwardRef;
