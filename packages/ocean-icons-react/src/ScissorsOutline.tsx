import React, { forwardRef } from 'react';

type IconProps = {
  size?: number;
} & React.SVGProps<SVGSVGElement>;

const ScissorsOutline = (
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
      d="M14.121 14.121 19 19m-7-7 7-7m-7 7-2.879 2.879M12 12 9.121 9.121m0 5.758a3 3 0 1 0-4.243 4.243 3 3 0 0 0 4.243-4.243zm0-5.758a3 3 0 1 0-4.243-4.243 3 3 0 0 0 4.243 4.243z"
    />
  </svg>
);

const ForwardRef = forwardRef(ScissorsOutline);
export default ForwardRef;
