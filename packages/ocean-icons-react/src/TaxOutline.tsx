import React from 'react';

type IconProps = {
  size?: number;
} & React.SVGProps<SVGSVGElement>;

const TaxOutline = (
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
      strokeLinecap="round"
      strokeWidth={2}
      d="M10 8v8m4-8v8M4 4h16M4 20h16"
    />
    <path strokeWidth={2} d="M6 4h12v16H6z" />
  </svg>
);

const ForwardRef = React.forwardRef(TaxOutline);
export default ForwardRef;
