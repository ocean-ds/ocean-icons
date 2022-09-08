import React, { forwardRef } from 'react';

type IconProps = {
  size?: number;
} & React.SVGProps<SVGSVGElement>;

const SearchCircleOutline = (
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
      d="m8 16 2.879-2.879m0 0a3 3 0 1 0 4.243-4.242 3 3 0 0 0-4.243 4.242zM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"
    />
  </svg>
);

const ForwardRef = forwardRef(SearchCircleOutline);
export default ForwardRef;
