import React, { forwardRef } from 'react';

type IconProps = {
  size?: number;
} & React.SVGProps<SVGSVGElement>;

const ZeroOutline = (
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
    <path strokeLinecap="round" strokeWidth={2} d="M17 3 6.516 21.16" />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M16.256 5.789a5.5 5.5 0 0 0-9.91 3.287v7c0 1.555.646 2.96 1.684 3.96l1.049-1.817a3.485 3.485 0 0 1-.733-2.143v-7A3.5 3.5 0 0 1 15.1 7.788l1.155-2zm-5.782 13.508a3.5 3.5 0 0 0 4.871-3.221V10.86l1.827-3.163c.113.44.174.903.174 1.379v7a5.5 5.5 0 0 1-7.876 4.962l1.004-1.741z"
      clipRule="evenodd"
    />
  </svg>
);

const ForwardRef = forwardRef(ZeroOutline);
export default ForwardRef;
