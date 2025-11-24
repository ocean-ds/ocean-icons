import React, { forwardRef } from 'react';

type IconProps = {
  size?: number;
} & React.SVGProps<SVGSVGElement>;

const GasStationOutline = (
  { size = 24, ...props }: IconProps,
  ref: React.Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    width={size}
    height={size}
    ref={ref}
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 11h2.517c.267 0 .483.216.483.483V16.5a1.5 1.5 0 0 0 3 0V6l-3-3M2 21h15m-1 0V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v16h13z"
    />
    <mask id="prefix__a" fill="#fff">
      <rect width={9} height={7} x={5} y={5} rx={1} />
    </mask>
    <rect
      width={9}
      height={7}
      x={5}
      y={5}
      strokeWidth={4}
      mask="url(#prefix__a)"
      rx={1}
    />
    <path fill="currentColor" d="M23 7a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" />
    <path fill="currentColor" d="M19 4h2v3h-2V4z" />
  </svg>
);

const ForwardRef = forwardRef(GasStationOutline);
export default ForwardRef;
