import React, { forwardRef } from 'react';

type IconProps = {
  size?: number;
} & React.SVGProps<SVGSVGElement>;

const Refer = (
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
      stroke="currentColor"
      d="M17.42 5.41h-5.493l-.8-.8a4.685 4.685 0 0 0-6.62 0L2.59 6.53a5.954 5.954 0 0 0-1.756 4.237 5.999 5.999 0 0 0 5.993 5.992h5.357a1.748 1.748 0 0 0 1.45-2.717 1.75 1.75 0 0 0 1.169-1.649c0-.358-.11-.693-.296-.97A1.75 1.75 0 0 0 15.44 8.9h1.98a1.746 1.746 0 1 0 0-3.49zm0 2.62h-5.674a.437.437 0 0 0 0 .872h2.183a.874.874 0 0 1 0 1.746h-1.31a.437.437 0 0 0 0 .873h.437a.874.874 0 0 1 0 1.746h-.873a.437.437 0 0 0 0 .873.874.874 0 0 1 0 1.746H6.826a5.126 5.126 0 0 1-5.12-5.119c0-1.367.533-2.652 1.5-3.62l1.92-1.92a3.797 3.797 0 0 1 2.692-1.112c.975 0 1.949.37 2.692 1.113l.182.182H8.254a.437.437 0 0 0 0 .873h9.167a.874.874 0 0 1 0 1.746z"
    />
  </svg>
);

const ForwardRef = forwardRef(Refer);
export default ForwardRef;
