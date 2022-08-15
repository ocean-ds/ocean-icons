import React from 'react';

type IconProps = {
  size?: number;
} & React.SVGProps<SVGSVGElement>;

const Zero = (
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
    <rect
      width={8}
      height={14}
      x={6}
      y={3}
      stroke="currentColor"
      strokeWidth={2}
      rx={4}
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={2}
      d="M1-1h18.809"
      transform="matrix(-.57668 .81697 -.81046 -.5858 15 1)"
    />
  </svg>
);

const ForwardRef = React.forwardRef(Zero);
export default ForwardRef;
