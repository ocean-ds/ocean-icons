import React, { forwardRef } from 'react';

type IconProps = {
  size?: number;
} & React.SVGProps<SVGSVGElement>;

const FlashOn = (
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
    <path d="M5 2a1 1 0 0 1 1-1h8a1 1 0 0 1 .894 1.447L12.418 7.4H14a1 1 0 0 1 .864 1.504l-5.6 9.6A1 1 0 0 1 7.4 18v-6.2H6a1 1 0 0 1-1-1V2z" />
  </svg>
);

const ForwardRef = forwardRef(FlashOn);
export default ForwardRef;
