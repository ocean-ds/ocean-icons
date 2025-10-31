import React, { forwardRef } from 'react';

type IconProps = {
  size?: number;
} & React.SVGProps<SVGSVGElement>;

const ArrowTurnRightUp = (
  { size = 24, ...props }: IconProps,
  ref: React.Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    width={size}
    height={size}
    ref={ref}
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M3.738 20.249a.75.75 0 0 1 .75-.75H14.99V5.56l-2.47 2.47a.75.75 0 0 1-1.06-1.061l3.75-3.75a.75.75 0 0 1 1.06 0l3.751 3.75a.75.75 0 0 1-1.06 1.06L16.49 5.56v14.69a.75.75 0 0 1-.75.75H4.487a.75.75 0 0 1-.75-.75z"
      clipRule="evenodd"
    />
  </svg>
);

const ForwardRef = forwardRef(ArrowTurnRightUp);
export default ForwardRef;
