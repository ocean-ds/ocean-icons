import React, { forwardRef } from 'react';

type IconProps = {
  size?: number;
} & React.SVGProps<SVGSVGElement>;

const Facebook = (
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
    <path d="M7.495 18.995h-.018v-7.772H5.49a.476.476 0 0 1-.478-.472L5 8.248a.479.479 0 0 1 .478-.478h2.011V5.35a3.955 3.955 0 0 1 4.22-4.34h2.056a.479.479 0 0 1 .478.478V3.6a.477.477 0 0 1-.478.478h-1.264c-1.365 0-1.63.647-1.63 1.596V7.77h2.993a.477.477 0 0 1 .472.535l-.295 2.503a.476.476 0 0 1-.472.42h-2.686L10.871 19l-3.376-.006" />
  </svg>
);

const ForwardRef = forwardRef(Facebook);
export default ForwardRef;
