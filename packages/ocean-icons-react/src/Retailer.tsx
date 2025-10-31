import React, { forwardRef } from 'react';

type IconProps = {
  size?: number;
} & React.SVGProps<SVGSVGElement>;

const Retailer = (
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
    <path d="M14.944 10c-1.213 0-2.197-.895-2.197-2 0 1.105-.984 2-2.198 2H9.451c-1.214 0-2.198-.895-2.198-2 0 1.105-.984 2-2.197 2h-.857c-1.482 0-2.54-1.309-2.097-2.597l1.373-4C3.762 2.568 4.611 2 5.572 2h8.855c.962 0 1.811.568 2.098 1.403l1.373 4C18.341 8.691 17.284 10 15.801 10h-.857zm-7.691.18a3.343 3.343 0 0 1-2.198.82H4.2a3.28 3.28 0 0 1-.199-.006V16a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-5.006a3.302 3.302 0 0 1-.2.006h-.856c-.824 0-1.61-.304-2.198-.82a3.343 3.343 0 0 1-2.197.82h-1.1c-.824 0-1.61-.304-2.197-.82z" />
  </svg>
);

const ForwardRef = forwardRef(Retailer);
export default ForwardRef;
