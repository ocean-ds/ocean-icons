import React, { forwardRef } from 'react';

type IconProps = {
  size?: number;
} & React.SVGProps<SVGSVGElement>;

const PetshopOutline = (
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
      strokeLinejoin="round"
      strokeWidth={2}
      d="m6.267 14.986 2.171-1.737a5.701 5.701 0 0 1 7.124 0l2.17 1.737A3.377 3.377 0 0 1 19 17.623v.14a3.236 3.236 0 0 1-4.683 2.895l-.423-.21a4.236 4.236 0 0 0-3.788 0l-.423.21A3.237 3.237 0 0 1 5 17.764v-.141c0-1.026.466-1.996 1.267-2.637zm12.135-5.254c-.552.957-.418 2.068.299 2.482.718.414 1.747-.025 2.3-.982.551-.957.418-2.068-.3-2.482-.717-.414-1.747.025-2.299.982zm-12.804 0c.552.957.419 2.068-.299 2.482-.717.414-1.747-.025-2.299-.982-.552-.957-.418-2.068.3-2.482.717-.414 1.746.025 2.298.982zm7.762-3.87c-.429 1.6.088 3.13 1.155 3.416 1.067.286 2.28-.78 2.709-2.38.428-1.6-.089-3.13-1.156-3.416-1.067-.286-2.28.78-2.708 2.38zm-2.72 0c.429 1.6-.088 3.13-1.155 3.416-1.067.286-2.28-.78-2.709-2.38-.428-1.6.089-3.13 1.156-3.416 1.067-.286 2.28.78 2.708 2.38z"
    />
  </svg>
);

const ForwardRef = forwardRef(PetshopOutline);
export default ForwardRef;
