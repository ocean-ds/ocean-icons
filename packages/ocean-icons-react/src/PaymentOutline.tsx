import React from 'react';

type IconProps = {
  size?: number;
} & React.SVGProps<SVGSVGElement>;

const PaymentOutline = (
  { size = 24, ...props }: IconProps,
  svgRef: React.Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    width={size}
    height={size}
    ref={svgRef}
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M18.383 5.63c-3.504-3.507-9.254-3.507-12.758 0-3.144 3.149-3.414 7.916-1.078 11.424l-.27 1.17-.359 1.528c-.09.54.36.99.809.81l1.437-.45 1.258-.36c3.414 2.069 7.907 1.53 10.871-1.35 3.594-3.507 3.594-9.263.09-12.771z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M15 9c-.3-1-1.3-1.5-3-1.5m0 0C9.4 7.5 9 9 9 9.8c0 3.1 6 1.5 6 4.5 0 .8-.4 2.2-3 2.2m0-9V6m0 10.5c-1.7 0-2.7-.5-3-1.5m3 1.5V18"
    />
  </svg>
);

const ForwardRef = React.forwardRef(PaymentOutline);
export default ForwardRef;
