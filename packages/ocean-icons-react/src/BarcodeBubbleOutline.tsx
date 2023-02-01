import React, { forwardRef } from 'react';

type IconProps = {
  size?: number;
} & React.SVGProps<SVGSVGElement>;

const BarcodeBubbleOutline = (
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
      d="M10.6 15.5v-7m-2.8 7v-7m5.6 7v-7m2.8 7v-7m2.2-2.87c-3.507-3.507-9.264-3.507-12.772 0C2.48 8.78 2.21 13.547 4.55 17.055l-.27 1.17-.36 1.528c-.09.54.36.99.81.81l1.439-.45 1.26-.36c3.417 2.069 7.914 1.53 10.882-1.35 3.598-3.507 3.598-9.263.09-12.771z"
    />
  </svg>
);

const ForwardRef = forwardRef(BarcodeBubbleOutline);
export default ForwardRef;
