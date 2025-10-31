import React, { forwardRef } from 'react';

type IconProps = {
  size?: number;
} & React.SVGProps<SVGSVGElement>;

const ContactLessOutline = (
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
      d="M5.2 5a8.093 8.093 0 0 1 4 7 8.093 8.093 0 0 1-4 7M2 9c1.214.794 2 2.066 2 3.5 0 1.434-.786 2.706-2 3.5m11 2v.01M7 6V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-1"
    />
  </svg>
);

const ForwardRef = forwardRef(ContactLessOutline);
export default ForwardRef;
