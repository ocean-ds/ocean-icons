import React, { forwardRef } from 'react';

type IconProps = {
  size?: number;
} & React.SVGProps<SVGSVGElement>;

const FlashOffOutline = (
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
    <g clipPath="url(#prefix__a)">
      <path strokeLinecap="round" strokeWidth={2} d="M3.414 3 18.97 18.556" />
      <path
        fill="currentColor"
        d="M7 2a1 1 0 0 0-1 1v4l2 2V4h7.382l-3.276 6.553A1 1 0 0 0 13 12h2.259l-1.57 2.69 1.463 1.462 2.712-4.648A1 1 0 0 0 17 10h-2.382l3.276-6.553A1 1 0 0 0 17 2H7zm7.11 15.939-1.462-1.463L11 19.301v-4.473L9.172 13H8v-1.172l-2-2V14a1 1 0 0 0 1 1h2v8a1 1 0 0 0 1.864.504l3.246-5.565z"
      />
    </g>
    <defs>
      <clipPath id="prefix__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(FlashOffOutline);
export default ForwardRef;
