import React, { forwardRef } from 'react';

type IconProps = {
  size?: number;
} & React.SVGProps<SVGSVGElement>;

const WhatsappOutline = (
  { size = 24, ...props }: IconProps,
  ref: React.Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 25 24"
    stroke="currentColor"
    width={size}
    height={size}
    ref={ref}
    {...props}
  >
    <path
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12.664 3A8.892 8.892 0 0 0 8.21 4.196a8.803 8.803 0 0 0-3.24 3.26 8.715 8.715 0 0 0 .125 8.838L3.5 21l4.894-1.556a8.89 8.89 0 0 0 10.983-1.975 8.744 8.744 0 0 0 1.844-3.513c.336-1.296.37-2.65.096-3.96a8.736 8.736 0 0 0-1.669-3.598 8.823 8.823 0 0 0-3.095-2.502A8.894 8.894 0 0 0 12.663 3z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M10.63 8.393c-.152-.419-.32-.357-.438-.362-.117-.004-.25-.026-.383-.03a.716.716 0 0 0-.544.236c-.19.2-.727.678-.764 1.693-.036 1.014.646 2.021.741 2.162.095.142 1.303 2.34 3.309 3.244 2.006.904 2.017.63 2.386.61.368-.021 1.204-.455 1.388-.929.183-.474.2-.887.153-.976-.047-.088-.18-.144-.376-.255-.196-.11-1.165-.646-1.345-.723-.179-.078-.313-.116-.454.086-.142.2-.543.65-.664.784-.12.133-.239.144-.436.034a5.482 5.482 0 0 1-1.574-1.082 6.217 6.217 0 0 1-1.063-1.476c-.11-.211 0-.32.103-.418.103-.098.21-.232.314-.35a1.4 1.4 0 0 0 .213-.335.387.387 0 0 0 0-.362c-.047-.103-.414-1.131-.565-1.551z"
      clipRule="evenodd"
    />
  </svg>
);

const ForwardRef = forwardRef(WhatsappOutline);
export default ForwardRef;
