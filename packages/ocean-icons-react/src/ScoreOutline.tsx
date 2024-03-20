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
      fill="currentColor"
      d="M19.974 4.057a.332.332 0 0 0-.054.036c-.464.364-7.328 5.747-9.093 7.054-1.824 1.35.166 3.844 2.053 2.336a.72.72 0 0 0 .063-.06l7.63-8.586c.37-.418-.117-1.028-.599-.78z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 20a8 8 0 0 0 7.758-9.963 1.153 1.153 0 0 1 .235-1.052c.508-.571 1.43-.43 1.636.306A10 10 0 0 1 22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2c1.504 0 2.93.332 4.21.926.708.33.682 1.285.008 1.681a1.158 1.158 0 0 1-1.047.046A8 8 0 1 0 12 20z"
      clipRule="evenodd"
    />
  </svg>
);

const ForwardRef = forwardRef(ScoreOutline);
export default ForwardRef;
