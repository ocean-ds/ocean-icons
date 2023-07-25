import React, { forwardRef } from 'react';

type IconProps = {
  size?: number;
} & React.SVGProps<SVGSVGElement>;

const Youtube = (
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
      d="M18.199 4.3c.284.292.485.655.584 1.05a24.15 24.15 0 0 1 .384 4.442 24.173 24.173 0 0 1-.384 4.375 2.316 2.316 0 0 1-1.616 1.666c-1.434.384-7.167.384-7.167.384s-5.733 0-7.167-.384a2.317 2.317 0 0 1-1.616-1.6 24.167 24.167 0 0 1-.384-4.441 24.167 24.167 0 0 1 .384-4.409 2.317 2.317 0 0 1 1.616-1.666C4.267 3.333 10 3.333 10 3.333s5.733 0 7.167.35c.392.111.748.324 1.032.617zm-9.451 7.863a.417.417 0 0 1-.623-.363V7.783c0-.32.345-.52.623-.362L12.28 9.43c.28.16.28.564 0 .724l-3.532 2.009z"
      clipRule="evenodd"
    />
  </svg>
);

const ForwardRef = forwardRef(Youtube);
export default ForwardRef;
