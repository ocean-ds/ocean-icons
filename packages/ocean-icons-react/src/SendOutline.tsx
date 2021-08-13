import React from 'react';

type IconProps = {
  size?: number;
} & React.SVGProps<SVGSVGElement>;

const SendOutline = (
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
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 3L3 10.23l7.26 3.54L13.816 21 21 3z"
    />
    <path strokeWidth={2} d="M10 14L21 3" />
  </svg>
);

const ForwardRef = React.forwardRef(SendOutline);
export default ForwardRef;
