import React, { forwardRef } from 'react';

type IconProps = {
  size?: number;
} & React.SVGProps<SVGSVGElement>;

const ChartPie = (
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
    <path d="M2 10a8 8 0 0 1 8-8v8h8a8 8 0 1 1-16 0z" />
    <path d="M12 2.252A8.014 8.014 0 0 1 17.748 8H12V2.252z" />
  </svg>
);

const ForwardRef = forwardRef(ChartPie);
export default ForwardRef;
