import React, { forwardRef } from 'react';

type IconProps = {
  size?: number;
} & React.SVGProps<SVGSVGElement>;

const ContactBook2Outline = (
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
    <rect width={16} height={18} x={4} y={3} strokeWidth={2} rx={2} />
    <path strokeWidth={2} d="M7 21a5 5 0 0 1 10 0H7z" />
    <circle cx={12} cy={10} r={3} strokeWidth={2} />
    <path strokeLinecap="round" strokeWidth={2} d="M4 8H2m2 4H2m2 4H2" />
  </svg>
);

const ForwardRef = forwardRef(ContactBook2Outline);
export default ForwardRef;
