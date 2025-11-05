import React, { forwardRef } from 'react';

type IconProps = {
  size?: number;
} & React.SVGProps<SVGSVGElement>;

const BluLogo = (
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
      stroke="currentColor"
      strokeLinejoin="bevel"
      strokeWidth={2}
      d="M7.125 3H5.708C5.318 3 5 3.298 5 3.667v12c0 .368.317.666.708.666h5.313c2.151 0 3.896-1.641 3.896-3.666 0-1.541-1.063-2.667-2.512-3.429 1.077-.572 1.803-1.658 1.803-2.905 0-1.84-1.585-3.333-3.541-3.333h-4.25"
    />
    <path d="M9.25 8.333c.783 0 1.417-.597 1.417-1.333s-.634-1.333-1.417-1.333c-.782 0-1.417.597-1.417 1.333s.635 1.333 1.417 1.333zm0 5.334c.783 0 1.417-.597 1.417-1.334 0-.736-.634-1.333-1.417-1.333-.782 0-1.417.597-1.417 1.333 0 .737.635 1.334 1.417 1.334z" />
    <path
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeWidth={1.7}
      d="M9.25 7v5.333"
    />
  </svg>
);

const ForwardRef = forwardRef(BluLogo);
export default ForwardRef;
