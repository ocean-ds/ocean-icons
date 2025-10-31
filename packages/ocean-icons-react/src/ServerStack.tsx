import React, { forwardRef } from 'react';

type IconProps = {
  size?: number;
} & React.SVGProps<SVGSVGElement>;

const ServerStack = (
  { size = 24, ...props }: IconProps,
  ref: React.Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    width={size}
    height={size}
    ref={ref}
    {...props}
  >
    <path d="M5.507 4.048A3 3 0 0 1 7.785 3h8.43a3 3 0 0 1 2.278 1.048l1.722 2.008A4.533 4.533 0 0 0 19.5 6h-15c-.243 0-.482.02-.715.056l1.722-2.008z" />
    <path
      fillRule="evenodd"
      d="M1.5 10.5a3 3 0 0 1 3-3h15a3 3 0 1 1 0 6h-15a3 3 0 0 1-3-3zm15 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm2.25.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5zM4.5 15a3 3 0 1 0 0 6h15a3 3 0 1 0 0-6h-15zm11.25 3.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5zM19.5 18a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0z"
      clipRule="evenodd"
    />
  </svg>
);

const ForwardRef = forwardRef(ServerStack);
export default ForwardRef;
