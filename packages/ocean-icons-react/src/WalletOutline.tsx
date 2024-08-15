import React, { forwardRef } from 'react';

type IconProps = {
  size?: number;
} & React.SVGProps<SVGSVGElement>;

const WalletOutline = (
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
      d="M16 8V4.5c0-.831 0-1.247-.175-1.503a1 1 0 0 0-.657-.42c-.306-.052-.683.122-1.438.47L4.858 7.143c-.673.31-1.01.466-1.257.707a2 2 0 0 0-.486.76C3 8.936 3 9.307 3 10.048V15m13.5-.5h.01M3 11.2v6.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C4.52 21 5.08 21 6.2 21h11.6c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874C21 19.48 21 18.92 21 17.8v-6.6c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C19.48 8 18.92 8 17.8 8H6.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C3 9.52 3 10.08 3 11.2zm14 3.3a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"
    />
  </svg>
);

const ForwardRef = forwardRef(WalletOutline);
export default ForwardRef;
