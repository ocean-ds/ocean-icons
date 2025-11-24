import React, { forwardRef } from 'react';

type IconProps = {
  size?: number;
} & React.SVGProps<SVGSVGElement>;

const EventsOutline = (
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
      d="M6.741 14.966a3 3 0 0 1-2.121-3.674l1.035-3.864a1 1 0 0 1 1.225-.707l3.863 1.035a1 1 0 0 1 .708 1.225l-1.036 3.864a3 3 0 0 1-3.674 2.12zm0 0-1.553 5.796m0 0-1.932-.518m1.932.518 1.932.517m10.139-6.313a3 3 0 0 1-3.675-2.121L12.55 8.98a1 1 0 0 1 .707-1.225l3.864-1.035a1 1 0 0 1 1.225.707l1.035 3.864a3 3 0 0 1-2.121 3.674zm0 0 1.553 5.796m0 0-1.932.517m1.932-.517 1.931-.518M12 4V2m3 2 1-1M9 4 8 3"
    />
  </svg>
);

const ForwardRef = forwardRef(EventsOutline);
export default ForwardRef;
