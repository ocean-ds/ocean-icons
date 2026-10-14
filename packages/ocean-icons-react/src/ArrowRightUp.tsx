import React, { forwardRef } from 'react';

type IconProps = {
  size?: number;
} & React.SVGProps<SVGSVGElement>;

const ArrowRightUp = (
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
    <path d="M14.293 4.293a1 1 0 1 1 1.414 1.414l-10 10a1 1 0 1 1-1.414-1.414l10-10z" />
    <path d="M14 15V6H5a1 1 0 0 1 0-2h10a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0z" />
  </svg>
);

const ForwardRef = forwardRef(ArrowRightUp);
export default ForwardRef;
