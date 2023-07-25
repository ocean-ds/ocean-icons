import React, { forwardRef } from 'react';

type IconProps = {
  size?: number;
} & React.SVGProps<SVGSVGElement>;

const LinkedinOutline = (
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
      <path
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5.841 22.322a.678.678 0 0 1-.677.677H2.292a.677.677 0 0 1-.677-.677V10.28a.678.678 0 0 1 .677-.677h2.87a.677.677 0 0 1 .677.677v12.042h.002zM3.731 6.463a2.732 2.732 0 1 1 0-5.463 2.732 2.732 0 0 1 0 5.463zm19.13 15.914a.624.624 0 0 1-.623.623h-3.08a.624.624 0 0 1-.622-.623V17.5c0-.844.245-3.691-2.201-3.691-1.901 0-2.285 1.95-2.363 2.824v5.737a.624.624 0 0 1-.622.623h-2.985a.623.623 0 0 1-.62-.623V10.226a.623.623 0 0 1 .62-.623h2.985a.624.624 0 0 1 .622.623v1.047a4.243 4.243 0 0 1 3.984-1.872c4.934 0 4.906 4.614 4.906 7.152v5.828l-.002-.004z"
      />
    </g>
    <defs>
      <clipPath id="prefix__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(LinkedinOutline);
export default ForwardRef;
