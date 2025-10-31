import React, { forwardRef } from 'react';

type IconProps = {
  size?: number;
} & React.SVGProps<SVGSVGElement>;

const UserRemove = (
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
    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm3 11a6 6 0 0 0-12 0h12zm-1-9a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-4z" />
  </svg>
);

const ForwardRef = forwardRef(UserRemove);
export default ForwardRef;
