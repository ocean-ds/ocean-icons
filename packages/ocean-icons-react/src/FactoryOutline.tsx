import React from 'react';

type IconProps = {
  size?: number;
} & React.SVGProps<SVGSVGElement>;

const FactoryOutline = (
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
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M5 21h14M18 3h3c.6 0 1 .4 1 1v16c0 .6-.4 1-1 1h-4V4c0-.6.4-1 1-1zm-1 9H4c-1.1 0-2 .9-2 2v7h15v-9zM5 15h1m3 0h1m3 0h1m-9 3h1m3 0h1m3 0h1M12.5 5h-1.8c-.3-.6-1-1-1.7-1s-1.4.4-1.7 1h-.4c-.2-1.1-1.2-2-2.4-2C3.1 3 2 4.1 2 5.5 2 6.8 3 7.8 4.2 8h8.3c.8 0 1.5-.7 1.5-1.5S13.3 5 12.5 5zM18 7h3"
    />
  </svg>
);

const ForwardRef = React.forwardRef(FactoryOutline);
export default ForwardRef;
