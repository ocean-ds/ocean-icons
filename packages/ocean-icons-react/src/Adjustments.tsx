import React, { forwardRef } from 'react';

type IconProps = {
  size?: number;
} & React.SVGProps<SVGSVGElement>;

const Adjustments = (
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
    <path d="M5 4a1 1 0 0 0-2 0v7.268a2 2 0 0 0 0 3.464V16a1 1 0 1 0 2 0v-1.268a2 2 0 0 0 0-3.464V4zm6 0a1 1 0 1 0-2 0v1.268a2 2 0 0 0 0 3.464V16a1 1 0 1 0 2 0V8.732a2 2 0 0 0 0-3.464V4zm5-1a1 1 0 0 1 1 1v7.268a2 2 0 0 1 0 3.464V16a1 1 0 1 1-2 0v-1.268a2 2 0 0 1 0-3.464V4a1 1 0 0 1 1-1z" />
  </svg>
);

const ForwardRef = forwardRef(Adjustments);
export default ForwardRef;
