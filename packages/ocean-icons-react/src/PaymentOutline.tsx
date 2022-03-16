import React from 'react';

type IconProps = {
  size?: number;
} & React.SVGProps<SVGSVGElement>;

const SupplierOutline = (
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
      d="M18.3832 5.63087C14.8793 2.12304 9.12928 2.12304 5.62537 5.63087C2.48084 8.77891 2.21131 13.546 4.54725 17.0538L4.27771 18.2231L3.91834 19.7521C3.82849 20.2918 4.27771 20.7415 4.72693 20.5616L6.16443 20.1119L7.42225 19.7521C10.8363 21.8208 15.3285 21.2812 18.2933 18.4029C21.8871 14.8951 21.8871 9.13869 18.3832 5.63087Z"
      strokeWidth="2"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15 9C14.7 8 13.7 7.5 12 7.5M12 7.5C9.4 7.5 9 9 9 9.8C9 12.9 15 11.3 15 14.3C15 15.1 14.6 16.5 12 16.5M12 7.5V6M12 16.5C10.3 16.5 9.3 16 9 15M12 16.5V18"
      strokeWidth="2"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ForwardRef = React.forwardRef(SupplierOutline);
export default ForwardRef;
