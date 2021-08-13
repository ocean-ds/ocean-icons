import React from 'react';

type IconProps = {
  size?: number;
} & React.SVGProps<SVGSVGElement>;

const FlashOn = (
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
      stroke="#67697A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5.833 1.667v9.166h2.5v7.5l5.834-10h-3.334l3.334-6.666H5.833z"
    />
  </svg>
);

const ForwardRef = React.forwardRef(FlashOn);
export default ForwardRef;
