import React, { forwardRef } from 'react';

type IconProps = {
  size?: number;
} & React.SVGProps<SVGSVGElement>;

const Gift = (
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
    <path
      fillRule="evenodd"
      d="M5 5a3 3 0 0 1 5-2.236A3 3 0 0 1 14.83 6H16a2 2 0 1 1 0 4h-5V9a1 1 0 1 0-2 0v1H4a2 2 0 1 1 0-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 1 0-1 1h1zm3 0a1 1 0 1 0-1-1v1h1z"
      clipRule="evenodd"
    />
    <path d="M9 11H3v5a2 2 0 0 0 2 2h4v-7zm2 7h4a2 2 0 0 0 2-2v-5h-6v7z" />
  </svg>
);

const ForwardRef = forwardRef(Gift);
export default ForwardRef;
