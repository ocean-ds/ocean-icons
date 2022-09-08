import React, { forwardRef } from 'react';

type IconProps = {
  size?: number;
} & React.SVGProps<SVGSVGElement>;

const SupplierOutline = (
  { size = 24, ...props }: IconProps,
  ref: React.Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    stroke="currentColor"
    width={size}
    height={size}
    ref={ref}
    {...props}
  >
    <path d="m3.4 6.114.768.64-.768-.64zm2-2.395.768.64-.768-.64zm13.2 0 .768-.641-.768.64zm2 2.395.768-.641-.768.64zm-9.6.578a1 1 0 1 0 2 0h-2zM9 10a1 1 0 1 0 0 2v-2zm6 2a1 1 0 1 0 0-2v2zM2 7.189v12.018h2V7.189H2zM5 22h14v-2H5v2zm17-2.796V7.19h-2v12.013h2zM4.168 6.754l2-2.395-1.536-1.281-2 2.395 1.536 1.281zM17.832 4.36l2 2.395 1.536-1.281-2-2.395-1.536 1.281zM17 4c.356 0 .66.152.832.36l1.536-1.282C18.786 2.38 17.903 2 17 2v2zm-10.832.36C6.34 4.151 6.644 4 7 4V2c-.903 0-1.786.38-2.368 1.078l1.536 1.281zM22 7.19a2.68 2.68 0 0 0-.632-1.718l-1.536 1.281A.68.68 0 0 1 20 7.19h2zM19 22c1.553 0 3-1.154 3-2.796h-2c0 .341-.344.796-1 .796v2zM2 19.207C2 20.85 3.45 22 5 22v-2c-.658 0-1-.454-1-.793H2zM4 7.189c0-.142.05-.294.168-.435L2.632 5.473A2.673 2.673 0 0 0 2 7.189h2zm9-.497V3h-2v3.692h2zM7 4h5V2H7v2zm5 0h5V2h-5v2zM3 8h18V6H3v2zm6 4h6v-2H9v2z" />
  </svg>
);

const ForwardRef = forwardRef(SupplierOutline);
export default ForwardRef;
