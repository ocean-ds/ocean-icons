import React, { forwardRef } from 'react';

type IconProps = {
  size?: number;
} & React.SVGProps<SVGSVGElement>;

const NoSymbol = (
  { size = 24, ...props }: IconProps,
  ref: React.Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    width={size}
    height={size}
    ref={ref}
    {...props}
  >
    <path
      fillRule="evenodd"
      d="m6.72 5.66 11.62 11.62A8.25 8.25 0 0 0 6.72 5.66zm10.56 12.68L5.66 6.72a8.25 8.25 0 0 0 11.62 11.62zM5.105 5.106c3.807-3.808 9.98-3.808 13.788 0 3.808 3.807 3.808 9.98 0 13.788-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788z"
      clipRule="evenodd"
    />
  </svg>
);

const ForwardRef = forwardRef(NoSymbol);
export default ForwardRef;
