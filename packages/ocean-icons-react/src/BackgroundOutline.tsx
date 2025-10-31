import React, { forwardRef } from 'react';

type IconProps = {
  size?: number;
} & React.SVGProps<SVGSVGElement>;

const BackgroundOutline = (
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
      strokeWidth={2}
      d="M8.663 7.719H20a1 1 0 0 1 1 1v11.337a1 1 0 0 1-1 1H8.663a1 1 0 0 1-1-1V8.719a1 1 0 0 1 1-1zm7.674-2h-.18l.18-.163v.163zM4.477 16.337l.287-.26.9-.818v1.078H4.477z"
    />
  </svg>
);

const ForwardRef = forwardRef(BackgroundOutline);
export default ForwardRef;
