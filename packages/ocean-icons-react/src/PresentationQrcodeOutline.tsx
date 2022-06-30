import React from 'react';

type IconProps = {
  size?: number;
} & React.SVGProps<SVGSVGElement>;

const PresentationQrcodeOutline = (
  { size = 24, ...props }: IconProps,
  svgRef: React.Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 25"
    stroke="currentColor"
    width={size}
    height={size}
    ref={svgRef}
    {...props}
  >
    <path d="M21 22.5a1 1 0 100-2v2zm-1-1v1-1zm-17-1a1 1 0 100 2v-2zM4 4.73H3h1zM5 3.5v-1 1zm14 0v1-1zm1 1.23h1-1zM9 16.5v1-1zm1 1a1 1 0 100-2v2zm-2-2H7h1zm1-1a1 1 0 10-2 0h2zm6-6v-1 1zm-1-1a1 1 0 100 2v-2zm2 2h-1 1zm-1 1a1 1 0 102 0h-2zm6 10h-1v2h1v-2zm-1 0H4v2h16v-2zm-16 0H3v2h1v-2zm1 1V4.73H3V21.5h2zM5 4.73c0-.12.04-.204.069-.239L3.517 3.23A2.387 2.387 0 003 4.73h2zm.069-.239c.012-.015.015-.013.003-.006A.162.162 0 015 4.5v-2c-.605 0-1.132.297-1.483.73l1.552 1.26zM5 4.5h14v-2H5v2zm14 0a.162.162 0 01-.072-.015c-.012-.007-.01-.009.003.006l1.552-1.261A1.912 1.912 0 0019 2.5v2zm-.069-.009a.397.397 0 01.069.24h2c0-.532-.17-1.074-.517-1.501l-1.552 1.26zm.069.24V21.5h2V4.73h-2zM14 14.5h1v-2h-1v2zm1 0v1h2v-1h-2zm0 1h-1v2h1v-2zm-1 0v-1h-2v1h2zm0 0h-2a2 2 0 002 2v-2zm1 0v2a2 2 0 002-2h-2zm0-1h2a2 2 0 00-2-2v2zm-1-2a2 2 0 00-2 2h2v-2zm-5-3h1v-2H9v2zm1 0v1h2v-1h-2zm0 1H9v2h1v-2zm-1 0v-1H7v1h2zm0 0H7a2 2 0 002 2v-2zm1 0v2a2 2 0 002-2h-2zm0-1h2a2 2 0 00-2-2v2zm-1-2a2 2 0 00-2 2h2v-2zm0 10h1v-2H9v2zm0-2v-1H7v1h2zm0 0H7a2 2 0 002 2v-2zm6-8h-1v2h1v-2zm0 2v1h2v-1h-2zm0 0h2a2 2 0 00-2-2v2z" />
  </svg>
);

const ForwardRef = React.forwardRef(PresentationQrcodeOutline);
export default ForwardRef;
