import React from 'react';

type IconProps = {
  size?: number;
} & React.SVGProps<SVGSVGElement>;

const BluLogoOutline = (
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
      fill="currentColor"
      fillRule="evenodd"
      d="M7.615 2A2.615 2.615 0 005 4.615v14.77A2.615 2.615 0 007.615 22H15a5.385 5.385 0 005.385-5.385v-.769a5.38 5.38 0 00-2.474-4.53A5.385 5.385 0 0014.23 2H7.615zm0 17.692a.308.308 0 01-.307-.307V4.615c0-.17.137-.307.307-.307h6.616a3.077 3.077 0 011.538 5.742v2.816a3.078 3.078 0 012.308 2.98v.77A3.077 3.077 0 0115 19.692H7.615zm5.846-11.538c0 .57-.309 1.066-.769 1.332v5.027a1.538 1.538 0 11-1.538 0V9.486a1.538 1.538 0 112.307-1.332z"
      clipRule="evenodd"
    />
  </svg>
);

const ForwardRef = React.forwardRef(BluLogoOutline);
export default ForwardRef;
