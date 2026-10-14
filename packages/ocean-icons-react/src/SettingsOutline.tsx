import React, { forwardRef } from 'react';

type IconProps = {
  size?: number;
} & React.SVGProps<SVGSVGElement>;

const SettingsOutline = (
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
      d="M3 8h12m0 0a3 3 0 1 0 6 0 3 3 0 0 0-6 0zm-6 8h12M9 16a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"
    />
  </svg>
);

const ForwardRef = forwardRef(SettingsOutline);
export default ForwardRef;
