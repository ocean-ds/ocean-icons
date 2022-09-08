import React, { forwardRef } from 'react';

type IconProps = {
  size?: number;
} & React.SVGProps<SVGSVGElement>;

const ChevronDoubleLeft = (
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
    <path
      fillRule="evenodd"
      d="M15.707 15.707a1 1 0 0 1-1.414 0l-5-5a1 1 0 0 1 0-1.414l5-5a1 1 0 1 1 1.414 1.414L11.414 10l4.293 4.293a1 1 0 0 1 0 1.414zm-6 0a1 1 0 0 1-1.414 0l-5-5a1 1 0 0 1 0-1.414l5-5a1 1 0 0 1 1.414 1.414L5.414 10l4.293 4.293a1 1 0 0 1 0 1.414z"
      clipRule="evenodd"
    />
  </svg>
);

const ForwardRef = forwardRef(ChevronDoubleLeft);
export default ForwardRef;
