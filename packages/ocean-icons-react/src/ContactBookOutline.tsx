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
    viewBox="0 0 25 24"
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
      d="M6.221 16H3.09m3.13-8H3.09m0 4h3.13m13.869 7V5c0-.53-.2-1.04-.553-1.414A1.837 1.837 0 0 0 18.2 3H6.868c-.501 0-.982.21-1.336.586A2.061 2.061 0 0 0 4.979 5v14c0 .53.199 1.04.553 1.414.354.375.835.586 1.336.586H18.2c.5 0 .981-.21 1.336-.586.354-.375.553-.884.553-1.414z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M9.09 16a4.5 4.5 0 0 1 .266-1.53c.176-.486.434-.927.759-1.298.325-.372.71-.667 1.136-.867.424-.201.88-.305 1.339-.305.46 0 .915.104 1.34.305.424.2.81.495 1.135.867.325.371.583.812.758 1.297A4.5 4.5 0 0 1 16.09 16h-7z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M13.65 10.56a1.5 1.5 0 1 1-2.12-2.12 1.5 1.5 0 0 1 2.12 2.12z"
    />
  </svg>
);

const ForwardRef = forwardRef(ContactBookOutline);
export default ForwardRef;
