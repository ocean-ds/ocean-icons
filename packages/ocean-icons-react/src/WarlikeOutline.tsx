import React, { forwardRef } from 'react';

type IconProps = {
  size?: number;
} & React.SVGProps<SVGSVGElement>;

const WarlikeOutline = (
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
      strokeWidth={2}
      d="M21 12a9 9 0 0 1-9 9m9-9a9 9 0 0 0-9-9m9 9h-6m-3 9a9 9 0 0 1-9-9m9 9v-6m-9-3a9 9 0 0 1 9-9m-9 9h6m3-9v6m5 3a5 5 0 1 1-10 0 5 5 0 0 1 10 0z"
    />
  </svg>
);

const ForwardRef = forwardRef(WarlikeOutline);
export default ForwardRef;
