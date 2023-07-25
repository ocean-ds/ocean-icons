import React, { forwardRef } from 'react';

type IconProps = {
  size?: number;
} & React.SVGProps<SVGSVGElement>;

const Linkedin = (
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
    <path d="M5.357 18.39a.61.61 0 0 1-.61.609H2.164a.61.61 0 0 1-.61-.61V7.553a.61.61 0 0 1 .61-.61h2.583a.61.61 0 0 1 .61.61V18.39h.001zM3.458 5.917a2.458 2.458 0 1 1 0-4.917 2.458 2.458 0 0 1 0 4.917zm15.416 12.522a.562.562 0 0 1-.56.561h-2.771a.562.562 0 0 1-.56-.56v-5.088c0-.76.22-3.322-1.982-3.322-1.71 0-2.056 1.755-2.126 2.542v5.861a.562.562 0 0 1-.56.56H7.629a.56.56 0 0 1-.559-.56V7.503a.56.56 0 0 1 .559-.56h2.686a.562.562 0 0 1 .56.56v.943A3.819 3.819 0 0 1 14.46 6.76c4.441 0 4.415 4.153 4.415 6.437v5.244-.003z" />
  </svg>
);

const ForwardRef = forwardRef(Linkedin);
export default ForwardRef;
