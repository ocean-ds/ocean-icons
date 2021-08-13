import React from 'react';

type IconProps = {
  size?: number;
} & React.SVGProps<SVGSVGElement>;

const Order = (
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
      strokeWidth={2}
      d="M7 8h5m-5 3h3"
    />
    <path d="M9.517 16.298a1 1 0 100-2v2zm4.78-6.798a1 1 0 102 0h-2zm-9-5.202h8v-2h-8v2zm-1 9v-8h-2v8h2zm5.22 1h-4.22v2h4.22v-2zm4.78-9V9.5h2V5.298h-2zm-12 8a3 3 0 003 3v-2a1 1 0 01-1-1h-2zm11-9a1 1 0 011 1h2a3 3 0 00-3-3v2zm-8-2a3 3 0 00-3 3h2a1 1 0 011-1v-2z" />
    <path
      stroke="#67697A"
      strokeLinecap="round"
      strokeWidth={2}
      d="M13.298 15h4m-2-2v4"
    />
  </svg>
);

const ForwardRef = React.forwardRef(Order);
export default ForwardRef;
