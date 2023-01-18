import React, { forwardRef } from 'react';

type IconProps = {
  size?: number;
} & React.SVGProps<SVGSVGElement>;

const PagBluOutline = (
  { size = 24, ...props }: IconProps,
  ref: React.Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    ref={ref}
    {...props}
  >
    <line
      x1="4"
      y1="10"
      x2="5"
      y2="10"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
    />
    <line
      x1="2"
      y1="14"
      x2="5"
      y2="14"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
    />
    <path
      d="M10.5714 4H8.85714C8.38376 4 8 4.35817 8 4.8V19.2C8 19.6418 8.38376 20 8.85714 20H15.2857C17.8893 20 20 18.0301 20 15.6C20 13.7506 18.7143 12.4 16.9607 11.4858C18.2634 10.7996 19.1429 9.49565 19.1429 8C19.1429 5.79086 17.2241 4 14.8571 4H9.71429"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinejoin="bevel"
    />
    <path
      d="M13.15 10.5C14.1165 10.5 14.9 9.7165 14.9 8.75C14.9 7.7835 14.1165 7 13.15 7C12.1835 7 11.4 7.7835 11.4 8.75C11.4 9.7165 12.1835 10.5 13.15 10.5Z"
      fill="currentColor"
    />
    <path
      d="M13.15 16.9C14.1165 16.9 14.9 16.1165 14.9 15.15C14.9 14.1835 14.1165 13.4 13.15 13.4C12.1835 13.4 11.4 14.1835 11.4 15.15C11.4 16.1165 12.1835 16.9 13.15 16.9Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.4 14.6L12.4 8.60004H13.9L13.9 14.6H12.4Z"
      fill="currentColor"
    />
  </svg>
);

const ForwardRef = forwardRef(PagBluOutline);
export default ForwardRef;
