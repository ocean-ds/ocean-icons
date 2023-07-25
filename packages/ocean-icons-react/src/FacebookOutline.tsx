import React, { forwardRef } from 'react';

type IconProps = {
  size?: number;
} & React.SVGProps<SVGSVGElement>;

const FacebookOutline = (
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
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9.05 22.994h-.023v-9.5H6.6a.583.583 0 0 1-.584-.576L6 9.858a.585.585 0 0 1 .584-.584h2.458V6.316A4.834 4.834 0 0 1 14.2 1.012h2.514a.585.585 0 0 1 .584.584V4.18a.584.584 0 0 1-.584.584h-1.546c-1.668 0-1.991.791-1.991 1.951v2.56h3.657a.584.584 0 0 1 .578.653l-.36 3.06a.582.582 0 0 1-.578.514H13.19L13.176 23l-4.126-.008"
    />
  </svg>
);

const ForwardRef = forwardRef(FacebookOutline);
export default ForwardRef;
