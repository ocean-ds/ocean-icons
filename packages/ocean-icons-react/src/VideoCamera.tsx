import React, { forwardRef } from 'react';

type IconProps = {
  size?: number;
} & React.SVGProps<SVGSVGElement>;

const VideoCamera = (
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
    <path d="M2 6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6zm12.553 1.106A1 1 0 0 0 14 8v4a1 1 0 0 0 .553.894l2 1A1 1 0 0 0 18 13V7a1 1 0 0 0-1.447-.894l-2 1z" />
  </svg>
);

const ForwardRef = forwardRef(VideoCamera);
export default ForwardRef;
