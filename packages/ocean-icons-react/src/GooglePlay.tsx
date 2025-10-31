import React, { forwardRef } from 'react';

type IconProps = {
  size?: number;
} & React.SVGProps<SVGSVGElement>;

const GooglePlay = (
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
    <path d="M6.112 2.204a1.364 1.364 0 0 0-1.32-.064l7.117 7.199 2.327-2.36-8.124-4.775zm-1.974.602c-.09.192-.138.406-.138.625V16.6c0 .22.049.43.14.618l7.113-7.214-7.115-7.198zm7.772 7.861-7.106 7.206c.189.089.39.127.59.127.247 0 .494-.06.718-.195l8.125-4.783-2.327-2.355zm5.42-1.869a.131.131 0 0 0-.009-.005l-2.255-1.326-2.501 2.536 2.502 2.53s2.26-1.33 2.263-1.33A1.4 1.4 0 0 0 18 10c0-.496-.25-.945-.67-1.202z" />
  </svg>
);

const ForwardRef = forwardRef(GooglePlay);
export default ForwardRef;
