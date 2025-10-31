import React, { forwardRef } from 'react';

type IconProps = {
  size?: number;
} & React.SVGProps<SVGSVGElement>;

const VideoCameraSlash = (
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
    <path d="M.97 3.97a.75.75 0 0 1 1.06 0l15 15a.75.75 0 1 1-1.06 1.06l-15-15a.75.75 0 0 1 0-1.06zm16.28 12.09 2.69 2.69c.944.945 2.56.276 2.56-1.06V6.31c0-1.336-1.616-2.005-2.56-1.06l-2.69 2.69v8.12zm-1.5-8.56v8.068L4.682 4.5h8.068a3 3 0 0 1 3 3zm-14.25 9V7.682l11.773 11.773a3.01 3.01 0 0 1-.523.045H4.5a3 3 0 0 1-3-3z" />
  </svg>
);

const ForwardRef = forwardRef(VideoCameraSlash);
export default ForwardRef;
