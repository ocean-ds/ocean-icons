import React from 'react';

type IconProps = {
  size?: number;
} & React.SVGProps<SVGSVGElement>;

const MinusSm = (
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
      fillRule="evenodd"
      d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
      clipRule="evenodd"
    />
  </svg>
);

const ForwardRef = React.forwardRef(MinusSm);
export default ForwardRef;
