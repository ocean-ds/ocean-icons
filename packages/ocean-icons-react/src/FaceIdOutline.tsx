import React, { forwardRef } from 'react';

type IconProps = {
  size?: number;
} & React.SVGProps<SVGSVGElement>;

const FaceIdOutline = (
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
      strokeWidth={2}
      d="M2 14.914v3a4 4 0 0 0 4 4h2.364m7.272 0H18a4 4 0 0 0 4-4v-3m-20-6v-3a4 4 0 0 1 4-4h2.364m7.272 0H18a4 4 0 0 1 4 4v3m-14-1v2m8-2v2m-4-2v3.5c0 .5-.3 1.5-1.5 1.5m-1.5 3.5c.833.777 3.5 1.795 6 0"
    />
  </svg>
);

const ForwardRef = forwardRef(FaceIdOutline);
export default ForwardRef;
