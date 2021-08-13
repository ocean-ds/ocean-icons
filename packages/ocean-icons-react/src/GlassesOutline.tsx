import React from 'react';

type IconProps = {
  size?: number;
} & React.SVGProps<SVGSVGElement>;

const GlassesOutline = (
  { size = 24, ...props }: IconProps,
  svgRef: React.Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    width={size}
    height={size}
    ref={svgRef}
    {...props}
  >
    <path
      fill="#67697A"
      fillRule="evenodd"
      d="M15.334 5.328a1 1 0 01.707-1.225 2.998 2.998 0 013.672 2.123l1.94 7.273c.013.045.021.09.027.135a4.583 4.583 0 11-8.8 2.349h-1.76a4.584 4.584 0 11-8.799-2.35c.006-.045.014-.09.026-.134l1.94-7.273A2.998 2.998 0 017.96 4.103a1 1 0 01-.518 1.932.998.998 0 00-1.222.706l-1.132 4.245a4.585 4.585 0 015.882 2.997h2.062a4.585 4.585 0 015.882-2.997L17.781 6.74a.998.998 0 00-1.222-.706 1 1 0 01-1.225-.707zm-8.75 12.575a2.583 2.583 0 100-5.167 2.583 2.583 0 000 5.166zm10.832 0a2.583 2.583 0 100-5.167 2.583 2.583 0 000 5.166z"
      clipRule="evenodd"
    />
  </svg>
);

const ForwardRef = React.forwardRef(GlassesOutline);
export default ForwardRef;
