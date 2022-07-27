import React from 'react';

type IconProps = {
  size?: number;
} & React.SVGProps<SVGSVGElement>;

const VariableTaxOutline = (
  { size = 24, ...props }: IconProps,
  svgRef: React.Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    stroke="currentColor"
    width={size}
    height={size}
    ref={svgRef}
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 8.627H3V6l1 2.627zm0 0c.747-1.847 1.74-3.394 3.46-4.399a9.001 9.001 0 0113.47 6.65M4 8.627h2m14 6.75h1V18l-1-2.623zm0 0c-.748 1.845-1.74 3.391-3.46 4.395a9.004 9.004 0 01-13.47-6.646M20 15.377h-2"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 15l6-6m-5 .5a.5.5 0 11-1 0 .5.5 0 011 0zm5 5a.5.5 0 11-1 0 .5.5 0 011 0z"
    />
    <circle cx={14.5} cy={14.5} r={1.5} />
    <circle cx={9.5} cy={9.5} r={1.5} />
  </svg>
);

const ForwardRef = React.forwardRef(VariableTaxOutline);
export default ForwardRef;
