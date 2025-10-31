import React, { forwardRef } from 'react';

type IconProps = {
  size?: number;
} & React.SVGProps<SVGSVGElement>;

const FaceOutline = (
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
    <circle cx={12} cy={12} r={10} strokeWidth={2} />
    <circle cx={8} cy={9} r={1} fill="currentColor" />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12.5 10v2h-1"
    />
    <path
      strokeLinecap="round"
      strokeWidth={2}
      d="M9.32 14.516c.332.94 1.88 2.565 4.245 1.494"
    />
    <circle cx={16} cy={9} r={1} fill="currentColor" />
  </svg>
);

const ForwardRef = forwardRef(FaceOutline);
export default ForwardRef;
