import React, { forwardRef } from 'react';

type IconProps = {
  size?: number;
} & React.SVGProps<SVGSVGElement>;

const ScoreOutline = (
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
      d="M15.723 3.722c-5.669-2.345-12.19 1.27-12.686 7.24-.586 7.061 5.875 11.121 11.183 9.785 3.248-.817 7.845-4.25 6.558-11.103m-10.647 2.91L20.32 5.048l-9.08 8.57-1.108-1.066z"
    />
  </svg>
);

const ForwardRef = forwardRef(ScoreOutline);
export default ForwardRef;
