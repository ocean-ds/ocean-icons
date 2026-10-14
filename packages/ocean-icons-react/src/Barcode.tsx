import React, { forwardRef } from 'react';

type IconProps = {
  size?: number;
} & React.SVGProps<SVGSVGElement>;

const Barcode = (
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
    <path d="M3 5a1 1 0 0 1 2 0v10a1 1 0 1 1-2 0V5zm4 0a1 1 0 0 1 2 0v8a1 1 0 1 1-2 0V5zm4 0a1 1 0 1 1 2 0v8a1 1 0 1 1-2 0V5zm4 0a1 1 0 1 1 2 0v10a1 1 0 1 1-2 0V5z" />
  </svg>
);

const ForwardRef = forwardRef(Barcode);
export default ForwardRef;
