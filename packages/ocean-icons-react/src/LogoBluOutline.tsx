import React, { forwardRef } from 'react';

type IconProps = {
  size?: number;
} & React.SVGProps<SVGSVGElement>;

const LogoBluOutline = (
  { size = 24, ...props }: IconProps,
  ref: React.Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 73 33"
    stroke="currentColor"
    width={size}
    height={size}
    ref={ref}
    {...props}
  >
    <path d="M12.948 9.342c0-1.255-1.001-2.273-2.238-2.273S8.47 8.086 8.47 9.342c0 .862.473 1.612 1.17 1.997v9.114a2.277 2.277 0 0 0-1.17 1.998c0 1.255 1.003 2.273 2.24 2.273 1.236 0 2.238-1.017 2.238-2.273 0-.863-.473-1.612-1.17-1.998V11.34a2.28 2.28 0 0 0 1.17-1.997z" />
    <path d="M19.33 15.155a8.814 8.814 0 0 0 2.705-6.381c0-4.838-3.876-8.774-8.64-8.774H3.697C1.66 0 0 1.685 0 3.756v24.957c0 2.072 1.66 3.756 3.698 3.756h10.67c5.097 0 9.243-4.21 9.243-9.386 0-3.282-1.652-6.238-4.282-7.928zM14.367 29.84H3.698a1.12 1.12 0 0 1-1.11-1.128V3.755a1.12 1.12 0 0 1 1.11-1.128h9.695c3.338 0 6.053 2.758 6.053 6.146 0 1.98-.928 3.805-2.47 4.954v3.137c2.443 1.052 4.048 3.476 4.048 6.218 0 3.726-2.986 6.758-6.656 6.758zm32.977-16.564a6.703 6.703 0 0 0-2.36-1.454 8.436 8.436 0 0 0-2.897-.49c-.962 0-1.857.166-2.665.494V6.443l-.216-.036a9.904 9.904 0 0 0-1.632-.148c-.463 0-1.02.05-1.656.147l-.22.033v18.458l.141.073c1.731.899 3.69 1.355 5.822 1.355 1.123 0 2.18-.18 3.14-.535a7.017 7.017 0 0 0 2.488-1.542 6.815 6.815 0 0 0 1.594-2.442c.37-.95.557-2.009.557-3.151 0-1.104-.182-2.127-.543-3.038a6.546 6.546 0 0 0-1.553-2.341zm-7.922 2.027c.704-.336 1.523-.507 2.437-.507 1.204 0 2.121.36 2.805 1.098.678.735 1.022 1.712 1.022 2.905 0 1.27-.344 2.285-1.022 3.018-.674.73-1.637 1.099-2.863 1.099-.83 0-1.63-.138-2.38-.41v-7.203zM54.19 6.259c-.64 0-1.193.05-1.645.15l-.204.046v19.333l.209.042c.488.098 1.05.15 1.668.15.678 0 1.24-.052 1.675-.151l.201-.046V6.453l-.206-.044c-.47-.1-1.042-.15-1.699-.15zm17.604 5.55c-.47-.1-1.033-.15-1.67-.15-.638 0-1.2.05-1.67.15l-.206.043v10.584c-.74.288-1.579.434-2.495.434-1.046 0-1.818-.22-2.297-.653-.47-.426-.708-1.281-.708-2.542v-7.819l-.201-.046c-.435-.1-.989-.15-1.647-.15a8.57 8.57 0 0 0-1.697.15l-.208.042v8.774c0 1.315.272 2.401.81 3.229a4.919 4.919 0 0 0 2.199 1.854c.909.397 2.027.598 3.323.598 2.338 0 4.534-.493 6.526-1.467l.147-.072V11.852l-.206-.043z" />
  </svg>
);

const ForwardRef = forwardRef(LogoBluOutline);
export default ForwardRef;