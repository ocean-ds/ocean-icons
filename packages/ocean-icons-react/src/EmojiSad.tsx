import React, { forwardRef } from 'react';

type IconProps = {
  size?: number;
} & React.SVGProps<SVGSVGElement>;

const EmojiSad = (
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
      d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM7 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm7-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-7.536 5.879a1 1 0 0 0 1.415 0 3 3 0 0 1 4.242 0 1 1 0 0 0 1.415-1.415 5 5 0 0 0-7.072 0 1 1 0 0 0 0 1.415z"
      clipRule="evenodd"
    />
  </svg>
);

const ForwardRef = forwardRef(EmojiSad);
export default ForwardRef;
