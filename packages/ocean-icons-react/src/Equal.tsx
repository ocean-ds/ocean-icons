import React from 'react';

type IconProps = {
  size?: number;
} & React.SVGProps<SVGSVGElement>;

const Equal = (
  { size = 24, ...props }: IconProps,
  svgRef: React.Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    width={size}
    height={size}
    ref={svgRef}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14 12H6m8-5H6"
    />
  </svg>
);

const ForwardRef = React.forwardRef(Equal);
export default ForwardRef;
