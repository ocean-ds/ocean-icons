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
    <path d="M10 8V16" strokeWidth="2" strokeLinecap="round" />
    <path d="M14 8V16" strokeWidth="2" strokeLinecap="round" />
    <path d="M4 4L20 4" strokeWidth="2" strokeLinecap="round" />
    <path d="M4 20L20 20" strokeWidth="2" strokeLinecap="round" />
    <rect x="6" y="4" width="12" height="16" strokeWidth="2" />
  </svg>
);

const ForwardRef = React.forwardRef(TaxOutline);
export default ForwardRef;
