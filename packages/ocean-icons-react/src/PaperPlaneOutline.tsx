import React, { forwardRef } from 'react';

type IconProps = {
  size?: number;
} & React.SVGProps<SVGSVGElement>;

const PaperPlaneOutline = (
  { size = 24, ...props }: IconProps,
  ref: React.Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 25"
    stroke="currentColor"
    width={size}
    height={size}
    ref={ref}
    {...props}
  >
    <path
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20 4.5 2 11.73l7.26 3.54 3.555 7.23L20 4.5z"
    />
    <path strokeWidth={2} d="m9 15.5 11-11" />
  </svg>
);

const ForwardRef = forwardRef(PaperPlaneOutline);
export default ForwardRef;
