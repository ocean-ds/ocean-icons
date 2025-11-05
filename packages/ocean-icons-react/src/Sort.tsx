import React, { forwardRef } from 'react';

type IconProps = {
  size?: number;
} & React.SVGProps<SVGSVGElement>;

const Sort = (
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
    <path d="M12.302 12.283a1.001 1.001 0 0 1 1.396 1.434l-3.08 3a1.001 1.001 0 0 1-1.414-.02l-2.92-3-.068-.076a1 1 0 0 1 1.426-1.389l.075.07 2.221 2.283 2.364-2.302zM9.907 3a1 1 0 0 1 .711.283l3.08 3 .07.075a1.001 1.001 0 0 1-1.39 1.426l-.076-.067-2.364-2.303-2.221 2.283a1 1 0 0 1-1.434-1.394l2.921-3 .072-.068A1 1 0 0 1 9.907 3z" />
  </svg>
);

const ForwardRef = forwardRef(Sort);
export default ForwardRef;
