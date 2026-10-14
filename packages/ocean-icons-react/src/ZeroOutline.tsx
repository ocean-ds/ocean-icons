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
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17 3 6.516 21.159m8.812-15.934a4.5 4.5 0 0 0-7.982 2.851v7c0 .892.26 1.724.708 2.424m8.292-7.5v5.076a4.5 4.5 0 0 1-5.717 4.333"
    />
  </svg>
);

const ForwardRef = forwardRef(ZeroOutline);
export default ForwardRef;
