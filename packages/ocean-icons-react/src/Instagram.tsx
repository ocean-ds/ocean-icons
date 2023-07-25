import React, { forwardRef } from 'react';

type IconProps = {
  size?: number;
} & React.SVGProps<SVGSVGElement>;

const Instagram = (
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
    <path d="M10.403 7.491a2.5 2.5 0 1 0-.734 4.946 2.5 2.5 0 0 0 .734-4.946z" />
    <path
      fillRule="evenodd"
      d="M14.167 1.667H5.833a4.167 4.167 0 0 0-4.166 4.166v8.334a4.167 4.167 0 0 0 4.166 4.166h8.334a4.167 4.167 0 0 0 4.166-4.166V5.833a4.167 4.167 0 0 0-4.166-4.166zm-6.05 4.599a4.167 4.167 0 1 1 3.838 7.397 4.167 4.167 0 0 1-3.838-7.397zM15 5.833a.833.833 0 1 0 0-1.666.833.833 0 0 0 0 1.666z"
      clipRule="evenodd"
    />
  </svg>
);

const ForwardRef = forwardRef(Instagram);
export default ForwardRef;
