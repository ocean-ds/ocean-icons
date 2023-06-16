import React, { forwardRef } from 'react';

type IconProps = {
  size?: number;
} & React.SVGProps<SVGSVGElement>;

const Report = (
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
      d="M6.5 2C4.567 2 3 3.592 3 5.556v8.888C3 16.408 4.567 18 6.5 18h7c1.933 0 3.5-1.592 3.5-3.556V5.556C17 3.592 15.433 2 13.5 2h-7zm.41 7C6.406 9 6 9.448 6 10s.407 1 .91 1h6.18c.503 0 .91-.448.91-1s-.407-1-.91-1H6.91zM6 13a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1zm.91-7C6.406 6 6 6.448 6 7s.407 1 .91 1h6.18c.503 0 .91-.448.91-1s-.407-1-.91-1H6.91z"
      clipRule="evenodd"
    />
  </svg>
);

const ForwardRef = forwardRef(Report);
export default ForwardRef;
