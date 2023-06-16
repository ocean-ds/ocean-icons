import React, { forwardRef } from 'react';

type IconProps = {
  size?: number;
} & React.SVGProps<SVGSVGElement>;

const ReportOutline = (
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
      strokeWidth={2}
      d="M8.5 12h7m-7 3.429H12M8.5 8.57h7M5 6.095C5 4.938 5.958 4 7.139 4h9.722C18.042 4 19 4.938 19 6.095v11.81C19 19.062 18.042 20 16.861 20H7.14C5.958 20 5 19.062 5 17.905V6.095z"
    />
  </svg>
);

const ForwardRef = forwardRef(ReportOutline);
export default ForwardRef;
