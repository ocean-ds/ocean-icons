import React, { forwardRef } from 'react';

type IconProps = {
  size?: number;
} & React.SVGProps<SVGSVGElement>;

const Microphone = (
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
      d="M7 4a3 3 0 0 1 6 0v4a3 3 0 1 1-6 0V4zm4 10.93A7.001 7.001 0 0 0 17 8a1 1 0 1 0-2 0A5 5 0 0 1 5 8a1 1 0 0 0-2 0 7.001 7.001 0 0 0 6 6.93V17H6a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2h-3v-2.07z"
      clipRule="evenodd"
    />
  </svg>
);

const ForwardRef = forwardRef(Microphone);
export default ForwardRef;
