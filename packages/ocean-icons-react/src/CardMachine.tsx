import React, { forwardRef } from 'react';

type IconProps = {
  size?: number;
} & React.SVGProps<SVGSVGElement>;

const CardMachine = (
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
      d="M7 3a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H7zm1 3a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2H8zm-.2 4.6a.8.8 0 1 0 0-1.6.8.8 0 0 0 0 1.6zm2.2 0A.8.8 0 1 0 10 9a.8.8 0 0 0 0 1.6zm3-.8a.8.8 0 1 1-1.6 0 .8.8 0 0 1 1.6 0zm-5.2 3a.8.8 0 1 0 0-1.6.8.8 0 0 0 0 1.6zm3-.8a.8.8 0 1 1-1.6 0 .8.8 0 0 1 1.6 0zm1.4.8a.8.8 0 1 0 0-1.6.8.8 0 0 0 0 1.6zm-3.6 1.4a.8.8 0 1 1-1.6 0 .8.8 0 0 1 1.6 0zm1.4.8a.8.8 0 1 0 0-1.6.8.8 0 0 0 0 1.6zm3-.8a.8.8 0 1 1-1.6 0 .8.8 0 0 1 1.6 0z"
      clipRule="evenodd"
    />
  </svg>
);

const ForwardRef = forwardRef(CardMachine);
export default ForwardRef;
