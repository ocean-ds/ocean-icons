import React, { forwardRef } from 'react';

type IconProps = {
  size?: number;
} & React.SVGProps<SVGSVGElement>;

const Puzzle = (
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
    <path d="M10 3.5a1.5 1.5 0 0 1 3 0V4a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-.5a1.5 1.5 0 0 0 0 3h.5a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1v-.5a1.5 1.5 0 0 0-3 0v.5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-3a1 1 0 0 0-1-1h-.5a1.5 1.5 0 0 1 0-3H4a1 1 0 0 0 1-1V6a1 1 0 0 1 1-1h3a1 1 0 0 0 1-1v-.5z" />
  </svg>
);

const ForwardRef = forwardRef(Puzzle);
export default ForwardRef;
