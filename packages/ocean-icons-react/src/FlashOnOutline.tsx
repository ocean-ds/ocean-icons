import React, { forwardRef } from 'react';

type IconProps = {
  size?: number;
} & React.SVGProps<SVGSVGElement>;

const FlashOnOutline = (
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
      d="M13.003 2 4.096 12.688c-.349.418-.523.628-.526.804a.5.5 0 0 0 .186.397c.138.111.41.111.955.111h7.292l-1 8 8.906-10.688c.35-.418.524-.628.526-.804a.5.5 0 0 0-.185-.397C20.111 10 19.84 10 19.295 10h-7.292l1-8z"
    />
  </svg>
);

const ForwardRef = forwardRef(FlashOnOutline);
export default ForwardRef;
