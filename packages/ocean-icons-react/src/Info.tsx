import React from 'react';

type IconProps = {
  size?: number;
} & React.SVGProps<SVGSVGElement>;

const Info = (
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
      d="M10 13.333V10v3.333zm0-6.666h.008H10zM17.5 10a7.5 7.5 0 10-15 0 7.5 7.5 0 0015 0z"
    />
  </svg>
);

const ForwardRef = React.forwardRef(Info);
export default ForwardRef;
