import React from 'react';

type IconProps = {
  size?: number;
} & React.SVGProps<SVGSVGElement>;

const Send = (
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
      strokeLinejoin="round"
      strokeWidth={2}
      d="M18 2L2 8.427l6.454 3.146L11.614 18 18 2z"
    />
    <path stroke="currentColor" strokeWidth={2} d="M8 12L18 2" />
  </svg>
);

const ForwardRef = React.forwardRef(Send);
export default ForwardRef;
