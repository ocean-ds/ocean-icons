import React from 'react';

type IconProps = {
  size?: number;
} & React.SVGProps<SVGSVGElement>;

const RetailerOutline = (
  { size = 24, ...props }: IconProps,
  svgRef: React.Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    stroke="currentColor"
    width={size}
    height={size}
    ref={svgRef}
    {...props}
  >
    <path d="M2.311 8.403l-.954-.298.954.298zm1.25-4l.955.299-.955-.299zM8 8a1 1 0 10-2 0h2zm10 0a1 1 0 10-2 0h2zm3.689.403l.954-.298-.954.298zm-1.25-4l-.955.299.955-.299zM13 8a1 1 0 10-2 0h2zm2 13v1a1 1 0 001-1h-1zm-6 0H8a1 1 0 001 1v-1zM3.266 8.702l1.25-4-1.91-.597-1.25 4 1.91.597zM5.47 4h13.06V2H5.47v2zM8 9V8H6v1h2zm10 0V8h-2v1h2zm1 3h.78v-2H19v2zm3.643-3.895l-1.25-4-1.909.597 1.25 4 1.909-.597zM19.78 12a3 3 0 002.863-3.895l-1.909.597A1 1 0 0119.78 10v2zM6 9a1 1 0 01-1 1v2a3 3 0 003-3H6zm12.53-5a1 1 0 01.954.702l1.909-.597A3 3 0 0018.53 2v2zm-14.014.702A1 1 0 015.47 4V2a3 3 0 00-2.863 2.105l1.909.597zM16 9a3 3 0 003 3v-2a1 1 0 01-1-1h-2zM1.357 8.105A3 3 0 004.22 12v-2a1 1 0 01-.955-1.298l-1.91-.597zM9 12h1v-2H9v2zm4-3V8h-2v1h2zm-3 3a3 3 0 003-3h-2a1 1 0 01-1 1v2zm-1-2a1 1 0 01-1-1H6a3 3 0 003 3v-2zm5 2h1v-2h-1v2zm1 0a3 3 0 003-3h-2a1 1 0 01-1 1v2zm-1-2a1 1 0 01-1-1h-2a3 3 0 003 3v-2zM3 11v8.002h2V11H3zm3 11h12v-2H6v2zm15-3v-8h-2v8h2zm-3 3a3 3 0 003-3h-2a1 1 0 01-1 1v2zM3 19.002A2.998 2.998 0 006 22v-2c-.553 0-1-.447-1-.998H3zM3 8h17.5V6H3v2zm7 8h4v-2h-4v2zm4 0v5h2v-5h-2zm1 4H9v2h6v-2zm-5 1v-5H8v5h2zm4-5h2a2 2 0 00-2-2v2zm-4-2a2 2 0 00-2 2h2v-2zm-5.78-2H5v-2h-.78v2z" />
  </svg>
);

const ForwardRef = React.forwardRef(RetailerOutline);
export default ForwardRef;
