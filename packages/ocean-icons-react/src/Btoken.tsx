import React, { forwardRef } from 'react';

type IconProps = {
  size?: number;
} & React.SVGProps<SVGSVGElement>;

const Btoken = (
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
    <path d="M17.946 4.751A10.82 10.82 0 0 1 10.146 2a10.82 10.82 0 0 1-7.8 2.751A10.88 10.88 0 0 0 2 7.481c0 5.06 3.461 9.313 8.146 10.519 4.684-1.206 8.145-5.458 8.145-10.519 0-.943-.12-1.857-.345-2.73z" />
  </svg>
);

const ForwardRef = forwardRef(Btoken);
export default ForwardRef;
