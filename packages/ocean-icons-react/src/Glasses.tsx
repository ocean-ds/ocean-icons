import React, { forwardRef } from 'react';

type IconProps = {
  size?: number;
} & React.SVGProps<SVGSVGElement>;

const Glasses = (
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
    <path d="M18 13c0 1.657-1.393 3-3.111 3-1.718 0-3.111-1.343-3.111-3s1.393-3 3.11-3C16.609 10 18 11.343 18 13zm-9.778 0c0 1.657-1.393 3-3.11 3C3.391 16 2 14.657 2 13s1.393-3 3.111-3c1.718 0 3.111 1.343 3.111 3z" />
    <path
      stroke="currentColor"
      strokeWidth={2}
      d="M8.298 13.429h3.404M18 13c0 1.657-1.393 3-3.111 3-1.718 0-3.111-1.343-3.111-3s1.393-3 3.11-3C16.609 10 18 11.343 18 13zm-9.778 0c0 1.657-1.393 3-3.11 3C3.391 16 2 14.657 2 13s1.393-3 3.111-3c1.718 0 3.111 1.343 3.111 3z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m18 13-2.029-7.685a1.75 1.75 0 0 0-2.145-1.254M2 13l2.029-7.685A1.75 1.75 0 0 1 6.174 4.06"
    />
  </svg>
);

const ForwardRef = forwardRef(Glasses);
export default ForwardRef;
