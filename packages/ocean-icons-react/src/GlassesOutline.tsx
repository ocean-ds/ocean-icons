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
      d="M15.334 5.328a1 1 0 0 1 .707-1.225 2.998 2.998 0 0 1 3.672 2.123l1.94 7.273c.013.045.021.09.027.135a4.583 4.583 0 1 1-8.8 2.349h-1.76a4.584 4.584 0 1 1-8.799-2.35c.006-.045.014-.09.026-.134l1.94-7.273A2.998 2.998 0 0 1 7.96 4.103a1 1 0 0 1-.518 1.932.998.998 0 0 0-1.222.706l-1.132 4.245a4.585 4.585 0 0 1 5.882 2.997h2.062a4.585 4.585 0 0 1 5.882-2.997L17.781 6.74a.998.998 0 0 0-1.222-.706 1 1 0 0 1-1.225-.707zm-8.75 12.575a2.583 2.583 0 1 0 0-5.167 2.583 2.583 0 0 0 0 5.166zm10.832 0a2.583 2.583 0 1 0 0-5.167 2.583 2.583 0 0 0 0 5.166z"
      clipRule="evenodd"
    />
  </svg>
);

const ForwardRef = forwardRef(GlassesOutline);
export default ForwardRef;
