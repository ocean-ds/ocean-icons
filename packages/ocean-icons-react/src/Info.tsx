import React, { forwardRef } from 'react';

type IconProps = {
  size?: number;
} & React.SVGProps<SVGSVGElement>;

const Info = (
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
    <path
      fillRule="evenodd"
      d="M17.391 6.939a7.999 7.999 0 1 1-14.78 6.122 7.999 7.999 0 0 1 14.78-6.122zM11 13.333a1 1 0 1 1-2 0V10a1 1 0 0 1 2 0v3.333zm-1-5.666a1 1 0 1 1 0-2h.008a1 1 0 1 1 0 2H10z"
      clipRule="evenodd"
    />
  </svg>
);

const ForwardRef = forwardRef(Info);
export default ForwardRef;
