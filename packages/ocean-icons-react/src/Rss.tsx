import React, { forwardRef } from 'react';

type IconProps = {
  size?: number;
} & React.SVGProps<SVGSVGElement>;

const Rss = (
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
    <path d="M5 3a1 1 0 0 0 0 2c5.523 0 10 4.477 10 10a1 1 0 1 0 2 0C17 8.373 11.627 3 5 3z" />
    <path d="M4 9a1 1 0 0 1 1-1 7 7 0 0 1 7 7 1 1 0 1 1-2 0 5 5 0 0 0-5-5 1 1 0 0 1-1-1zm-1 6a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
  </svg>
);

const ForwardRef = forwardRef(Rss);
export default ForwardRef;
