import React, { forwardRef } from 'react';

type IconProps = {
  size?: number;
} & React.SVGProps<SVGSVGElement>;

const QrCodeDisplayOutline = (
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
      d="M21 22a1 1 0 1 0 0-2v2zm-1-1v1-1zM3 20a1 1 0 1 0 0 2v-2zM4 4.23H3h1zM5 3V2v1zm14 0v1-1zm1 1.23h1-1zM9 16v1-1zm1 1a1 1 0 1 0 0-2v2zm-2-2H7h1zm1-1a1 1 0 1 0-2 0h2zm6-6V7v1zm-1-1a1 1 0 1 0 0 2V7zm2 2h-1 1zm-1 1a1 1 0 1 0 2 0h-2zm6 10h-1v2h1v-2zm-1 0H4v2h16v-2zM4 20H3v2h1v-2zm1 1V4.23H3V21h2zM5 4.23c0-.12.04-.204.069-.239L3.517 2.73A2.387 2.387 0 0 0 3 4.23h2zm.069-.239c.012-.015.015-.013.003-.006A.162.162 0 0 1 5 4V2c-.605 0-1.132.297-1.483.73l1.552 1.26zM5 4h14V2H5v2zm14 0a.162.162 0 0 1-.072-.015c-.012-.007-.01-.009.003.006l1.552-1.261A1.912 1.912 0 0 0 19 2v2zm-.069-.009a.397.397 0 0 1 .069.24h2c0-.532-.17-1.074-.517-1.501l-1.552 1.26zm.069.24V21h2V4.23h-2zM14 14h1v-2h-1v2zm1 0v1h2v-1h-2zm0 1h-1v2h1v-2zm-1 0v-1h-2v1h2zm0 0h-2a2 2 0 0 0 2 2v-2zm1 0v2a2 2 0 0 0 2-2h-2zm0-1h2a2 2 0 0 0-2-2v2zm-1-2a2 2 0 0 0-2 2h2v-2zM9 9h1V7H9v2zm1 0v1h2V9h-2zm0 1H9v2h1v-2zm-1 0V9H7v1h2zm0 0H7a2 2 0 0 0 2 2v-2zm1 0v2a2 2 0 0 0 2-2h-2zm0-1h2a2 2 0 0 0-2-2v2zM9 7a2 2 0 0 0-2 2h2V7zm0 10h1v-2H9v2zm0-2v-1H7v1h2zm0 0H7a2 2 0 0 0 2 2v-2zm6-8h-1v2h1V7zm0 2v1h2V9h-2zm0 0h2a2 2 0 0 0-2-2v2z"
    />
  </svg>
);

const ForwardRef = forwardRef(QrCodeDisplayOutline);
export default ForwardRef;
