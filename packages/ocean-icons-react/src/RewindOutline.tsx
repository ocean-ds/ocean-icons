import React, { forwardRef } from 'react';

type IconProps = {
  size?: number;
} & React.SVGProps<SVGSVGElement>;

const RewindOutline = (
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
      d="M12.066 11.2a1 1 0 0 0 0 1.6l5.334 4A1 1 0 0 0 19 16V8a1 1 0 0 0-1.6-.8l-5.333 4zm-8 0a1 1 0 0 0 0 1.6l5.334 4A1 1 0 0 0 11 16V8a1 1 0 0 0-1.6-.8l-5.334 4z"
    />
  </svg>
);

const ForwardRef = forwardRef(RewindOutline);
export default ForwardRef;
