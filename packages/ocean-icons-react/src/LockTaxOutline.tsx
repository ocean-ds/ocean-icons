import React from 'react';

type IconProps = {
  size?: number;
} & React.SVGProps<SVGSVGElement>;

const LockTaxOutline = (
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
      d="M6 21H18C18.5304 21 19.0391 20.7893 19.4142 20.4142C19.7893 20.0391 20 19.5304 20 19V11C20 10.4696 19.7893 9.96086 19.4142 9.58579C19.0391 9.21071 18.5304 9 18 9H6C5.46957 9 4.96086 9.21071 4.58579 9.58579C4.21071 9.96086 4 10.4696 4 11V19C4 19.5304 4.21071 20.0391 4.58579 20.4142C4.96086 20.7893 5.46957 21 6 21ZM16 9V7C16 5.93913 15.5786 4.92172 14.8284 4.17157C14.0783 3.42143 13.0609 3 12 3C10.9391 3 9.92172 3.42143 9.17157 4.17157C8.42143 4.92172 8 5.93913 8 7V9H16Z"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M9 18L15 12M10 12.5C10 12.6326 9.94732 12.7598 9.85355 12.8536C9.75979 12.9473 9.63261 13 9.5 13C9.36739 13 9.24021 12.9473 9.14645 12.8536C9.05268 12.7598 9 12.6326 9 12.5C9 12.3674 9.05268 12.2402 9.14645 12.1464C9.24021 12.0527 9.36739 12 9.5 12C9.63261 12 9.75979 12.0527 9.85355 12.1464C9.94732 12.2402 10 12.3674 10 12.5ZM15 17.5C15 17.6326 14.9473 17.7598 14.8536 17.8536C14.7598 17.9473 14.6326 18 14.5 18C14.3674 18 14.2402 17.9473 14.1464 17.8536C14.0527 17.7598 14 17.6326 14 17.5C14 17.3674 14.0527 17.2402 14.1464 17.1464C14.2402 17.0527 14.3674 17 14.5 17C14.6326 17 14.7598 17.0527 14.8536 17.1464C14.9473 17.2402 15 17.3674 15 17.5Z"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <circle cx="14.5" cy="17.5" r="1.5"></circle>
    <circle cx="9.5" cy="12.5" r="1.5"></circle>
  </svg>
);

const ForwardRef = React.forwardRef(LockTaxOutline);
export default ForwardRef;
