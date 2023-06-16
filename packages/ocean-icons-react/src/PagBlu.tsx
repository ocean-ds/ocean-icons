import React, { forwardRef } from 'react';

type IconProps = {
  size?: number;
} & React.SVGProps<SVGSVGElement>;

const PagBlu = (
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
      d="M2.727 9.09a.91.91 0 0 1 .91-.908h.909a.91.91 0 1 1 0 1.818h-.91a.91.91 0 0 1-.909-.91zM.91 11.818a.91.91 0 0 1 .908-.909h2.728a.91.91 0 1 1 0 1.818H1.818a.91.91 0 0 1-.909-.909zM6.364 4.24c0-.891.787-1.513 1.623-1.513h4.091c2.414 0 4.48 1.768 4.48 4.073 0 1.058-.44 2.008-1.148 2.723 1.066.796 1.863 1.897 1.863 3.357 0 2.482-2.226 4.393-4.838 4.393H7.987c-.836 0-1.623-.622-1.623-1.513V4.24zm6.363 2.578c0 .505-.274.946-.681 1.181v4.002a1.363 1.363 0 1 1-1.364 0V7.999a1.363 1.363 0 1 1 2.045-1.18z"
      clipRule="evenodd"
    />
  </svg>
);

const ForwardRef = forwardRef(PagBlu);
export default ForwardRef;
