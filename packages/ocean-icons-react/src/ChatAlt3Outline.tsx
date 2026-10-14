import React, { forwardRef } from 'react';

type IconProps = {
  size?: number;
} & React.SVGProps<SVGSVGElement>;

const ChatAlt3Outline = (
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
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6.667A2.667 2.667 0 0 1 6.667 4h10.666A2.667 2.667 0 0 1 20 6.667v7.11a2.667 2.667 0 0 1-2.667 2.667h-7.305c-1.306 0-2.567.48-3.544 1.348L4 20V6.667z"
    />
  </svg>
);

const ForwardRef = forwardRef(ChatAlt3Outline);
export default ForwardRef;
