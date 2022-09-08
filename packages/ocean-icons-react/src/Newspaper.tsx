import React, { forwardRef } from 'react';

type IconProps = {
  size?: number;
} & React.SVGProps<SVGSVGElement>;

const Newspaper = (
  { size = 24, ...props }: IconProps,
  ref: React.Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    width={size}
    height={size}
    ref={ref}
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M2 5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v10a2 2 0 0 0 2 2H4a2 2 0 0 1-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
      clipRule="evenodd"
    />
    <path d="M15 7h1a2 2 0 0 1 2 2v5.5a1.5 1.5 0 0 1-3 0V7z" />
  </svg>
);

const ForwardRef = forwardRef(Newspaper);
export default ForwardRef;
