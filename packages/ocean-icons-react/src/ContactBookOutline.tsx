import React, { forwardRef } from 'react';

type IconProps = {
  size?: number;
} & React.SVGProps<SVGSVGElement>;

const ContactBookOutline = (
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
      d="M6.132 16H3m3.132-8H3m0 4h3.132M20 19V5c0-.53-.199-1.04-.553-1.414A1.837 1.837 0 0 0 18.11 3H6.778c-.501 0-.982.21-1.336.586A2.061 2.061 0 0 0 4.89 5v14c0 .53.199 1.04.553 1.414.354.375.835.586 1.336.586H18.11c.501 0 .982-.21 1.336-.586C19.8 20.04 20 19.53 20 19z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M9 16a4.5 4.5 0 0 1 .266-1.53 4.08 4.08 0 0 1 .76-1.298 3.47 3.47 0 0 1 1.135-.867c.424-.201.88-.305 1.339-.305.46 0 .915.104 1.34.305.424.2.81.495 1.135.867.325.371.583.812.759 1.297A4.5 4.5 0 0 1 16 16H9z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M13.56 10.56a1.5 1.5 0 1 1-2.12-2.12 1.5 1.5 0 0 1 2.12 2.12z"
    />
  </svg>
);

const ForwardRef = forwardRef(ContactBookOutline);
export default ForwardRef;
