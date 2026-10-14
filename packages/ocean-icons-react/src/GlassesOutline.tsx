import React, { forwardRef } from 'react';

type IconProps = {
  size?: number;
} & React.SVGProps<SVGSVGElement>;

const GlassesOutline = (
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
      d="M10 14.535a4.008 4.008 0 0 1 4 0M2 15l.701-7.015c.027-.266.04-.399.06-.513A3 3 0 0 1 5.485 5.01C5.599 5 5.733 5 6 5m16 10-.701-7.015c-.027-.266-.04-.399-.06-.513a3 3 0 0 0-2.723-2.463C18.402 5 18.268 5 18 5m-9.172 7.172a4 4 0 1 1-5.656 5.656 4 4 0 0 1 5.656-5.656zm12 0a4 4 0 1 1-5.656 5.656 4 4 0 0 1 5.656-5.656z"
    />
  </svg>
);

const ForwardRef = forwardRef(GlassesOutline);
export default ForwardRef;
