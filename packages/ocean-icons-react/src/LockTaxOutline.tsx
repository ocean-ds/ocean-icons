import React, { forwardRef } from 'react';

type IconProps = {
  size?: number;
} & React.SVGProps<SVGSVGElement>;

const LockTaxOutline = (
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
      d="M6 21h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2zM16 9V7a4 4 0 1 0-8 0v2h8z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m9 18 6-6m-5 .5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm5 5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"
    />
    <circle cx={14.5} cy={17.5} r={1.5} />
    <circle cx={9.5} cy={12.5} r={1.5} />
  </svg>
);

const ForwardRef = forwardRef(LockTaxOutline);
export default ForwardRef;
