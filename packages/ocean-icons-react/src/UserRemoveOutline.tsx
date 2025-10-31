import React, { forwardRef } from 'react';

type IconProps = {
  size?: number;
} & React.SVGProps<SVGSVGElement>;

const UserRemoveOutline = (
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
      d="M13 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0zm-4 7a6 6 0 0 0-6 6v1h12v-1a6 6 0 0 0-6-6zm12-2h-6"
    />
  </svg>
);

const ForwardRef = forwardRef(UserRemoveOutline);
export default ForwardRef;
