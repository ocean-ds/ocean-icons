import React, { forwardRef } from 'react';

type IconProps = {
  size?: number;
} & React.SVGProps<SVGSVGElement>;

const Glasses = (
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
      d="M6.294 3.093a1 1 0 1 1-.518 1.932.733.733 0 0 0-.9.532L3.973 9.21a4.053 4.053 0 0 1 4.923 2.638h2.306a4.05 4.05 0 0 1 5.247-2.534L15.7 5.529a.653.653 0 0 0-.81-.504 1 1 0 1 1-.517-1.932 2.653 2.653 0 0 1 3.289 2.048l1.319 6.665a.998.998 0 0 1 .005.362 4.049 4.049 0 1 1-7.92 1.68H9.031a4.05 4.05 0 1 1-7.52-2.703.997.997 0 0 1 .018-.385l1.405-5.683a2.733 2.733 0 0 1 3.36-1.984zm8.755 12.07a2.049 2.049 0 1 0 0-4.098 2.049 2.049 0 0 0 0 4.097zm-10 0a2.049 2.049 0 1 0 0-4.098 2.049 2.049 0 0 0 0 4.097z"
      clipRule="evenodd"
    />
  </svg>
);

const ForwardRef = forwardRef(Glasses);
export default ForwardRef;
