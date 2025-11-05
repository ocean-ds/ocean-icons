import React, { forwardRef } from 'react';

type IconProps = {
  size?: number;
} & React.SVGProps<SVGSVGElement>;

const FootwareOutline = (
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
      d="M22 15V8c-2.213.738-2.937 1.158-5 0-2.885-1.619-2.62-2.38-5 0m10 7v1a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1m20 0H9m-7 0v-1a4 4 0 0 1 4-4h1m-5 5h7m4-6-1-1m0 0-5 2m2 5v-1.764c0-1.37-.774-2.623-2-3.236"
    />
  </svg>
);

const ForwardRef = forwardRef(FootwareOutline);
export default ForwardRef;
