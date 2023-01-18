import React, { forwardRef } from 'react';

type IconProps = {
  size?: number;
} & React.SVGProps<SVGSVGElement>;

const BmsOutline = (
  { size = 24, ...props }: IconProps,
  ref: React.Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 25"
    width={size}
    height={size}
    ref={ref}
    {...props}
  >
    <path
      d="M20.618 6.48397C17.4561 6.65189 14.3567 5.55858 12 3.44397C9.64327 5.55858 6.5439 6.65189 3.382 6.48397C3.12754 7.46908 2.99918 8.48252 3 9.49997C3 15.091 6.824 19.79 12 21.122C17.176 19.79 21 15.092 21 9.49997C21 8.45797 20.867 7.44797 20.618 6.48397Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.5998 15V9M7.7998 15V9M13.3998 15V9M16.1998 15V9"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ForwardRef = forwardRef(BmsOutline);
export default ForwardRef;
