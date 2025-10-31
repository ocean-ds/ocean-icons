import React, { forwardRef } from 'react';

type IconProps = {
  size?: number;
} & React.SVGProps<SVGSVGElement>;

const AppStore = (
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
    <path d="M13.304 1h.123c.098 1.199-.365 2.095-.926 2.743-.552.645-1.307 1.27-2.527 1.175-.082-1.182.381-2.011.942-2.659.52-.603 1.474-1.14 2.388-1.259zM17 13.479v.033a9.858 9.858 0 0 1-1.43 2.729c-.545.742-1.213 1.742-2.406 1.742-1.03 0-1.715-.656-2.772-.674-1.117-.018-1.732.548-2.754.691H7.29c-.75-.108-1.356-.696-1.797-1.226-1.3-1.566-2.306-3.589-2.493-6.178v-.76c.08-1.853.989-3.36 2.197-4.09.638-.388 1.515-.719 2.492-.57.418.063.846.205 1.22.346.356.135.8.374 1.22.362.286-.009.57-.156.857-.26.841-.3 1.666-.645 2.753-.483 1.307.195 2.235.77 2.808 1.657-1.106.697-1.98 1.746-1.83 3.538.132 1.629 1.089 2.581 2.283 3.143z" />
  </svg>
);

const ForwardRef = forwardRef(AppStore);
export default ForwardRef;
