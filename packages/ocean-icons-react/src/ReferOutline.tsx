import React, { forwardRef } from 'react';

type IconProps = {
  size?: number;
} & React.SVGProps<SVGSVGElement>;

const ReferOutline = (
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
    <path d="M20.905 6.491h-6.593l-.96-.96a5.622 5.622 0 0 0-7.943 0L3.107 7.836A7.145 7.145 0 0 0 1 12.921c0 3.965 3.226 7.19 7.19 7.19h6.43a2.098 2.098 0 0 0 1.74-3.26 2.1 2.1 0 0 0 1.402-1.979c0-.43-.131-.832-.355-1.165a2.1 2.1 0 0 0 1.402-1.978c0-.381-.102-.74-.281-1.047h2.377c1.155 0 2.095-.94 2.095-2.096 0-1.155-.94-2.095-2.095-2.095zm0 3.144h-6.81a.524.524 0 0 0 0 1.048h2.62a1.049 1.049 0 0 1 0 2.095h-1.572a.524.524 0 0 0 0 1.048h.524a1.049 1.049 0 0 1 0 2.095h-1.048a.524.524 0 0 0 0 1.047 1.049 1.049 0 0 1 0 2.096H8.191a6.15 6.15 0 0 1-6.143-6.143c0-1.641.639-3.183 1.8-4.344L6.15 6.273a4.557 4.557 0 0 1 3.231-1.335c1.17 0 2.34.445 3.23 1.335l.22.22H9.905a.524.524 0 0 0 0 1.047h11a1.049 1.049 0 0 1 0 2.095z" />
  </svg>
);

const ForwardRef = forwardRef(ReferOutline);
export default ForwardRef;
