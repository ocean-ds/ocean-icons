import React from 'react';

type IconProps = {
  size?: number;
} & React.SVGProps<SVGSVGElement>;

const HelpOutline = (
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
      strokeWidth={2}
      d="M12 17h.01"
    />
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
      strokeWidth={2}
      d="M11.914 14c0-1.75 1.621-2.043 2.18-2.517.56-.475.906-1.132.906-1.858C15 8.175 13.618 7 11.914 7c-.921 0-1.749.344-2.314.888a2.57 2.57 0 00-.6.871"
    />
  </svg>
);

const ForwardRef = React.forwardRef(HelpOutline);
export default ForwardRef;
