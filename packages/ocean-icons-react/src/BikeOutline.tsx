import React, { forwardRef } from 'react';

type IconProps = {
  size?: number;
} & React.SVGProps<SVGSVGElement>;

const BikeOutline = (
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
      d="m18 16-1.167-7M12 4h2.306a2 2 0 0 1 1.973 1.671L16.832 9M6 16l10.833-7M12 11.5 9 8H6m4 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zm12 0a4 4 0 1 1-8 0 4 4 0 0 1 8 0z"
    />
  </svg>
);

const ForwardRef = forwardRef(BikeOutline);
export default ForwardRef;
