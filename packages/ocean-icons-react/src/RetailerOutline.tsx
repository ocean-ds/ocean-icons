import React, { forwardRef } from 'react';

type IconProps = {
  size?: number;
} & React.SVGProps<SVGSVGElement>;

const RetailerOutline = (
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
    <path
      fill="CurrentColor"
      d="M2.094 8.403 1.142 8.1l.952.304zm1.278-4 .953.305-.953-.305zM7.888 7a1 1 0 0 0-2 0h2zm10.224 0a1 1 0 1 0-2 0h2zm3.794 1.403.952-.304-.953.304zm-1.278-4-.953.305.953-.305zM13 7a1 1 0 1 0-2 0h2zm2.067 14v1a1 1 0 0 0 1-1h-1zm-6.134 0h-1a1 1 0 0 0 1 1v-1zM3.047 8.708l1.278-4-1.905-.609-1.278 4 1.905.609zM5.324 4h13.352V2H5.324v2zm2.564 5V7h-2v2h2zm10.224 0V7h-2v2h2zm1.045 3h.797v-2h-.797v2zm3.701-3.9-1.278-4-1.905.608 1.278 4 1.905-.609zM19.954 12c2.025 0 3.531-1.938 2.904-3.9l-1.905.608c.196.613-.266 1.292-1 1.292v2zM5.888 9c0 .531-.447 1-1.045 1v2c1.66 0 3.045-1.322 3.045-3h-2zm12.788-5c.471 0 .868.299.999.708l1.905-.609A3.04 3.04 0 0 0 18.676 2v2zm-14.351.708a1.04 1.04 0 0 1 1-.708V2A3.04 3.04 0 0 0 2.42 4.1l1.905.608zM16.112 9c0 1.678 1.384 3 3.045 3v-2c-.598 0-1.045-.468-1.045-1h-2zm-14.97-.9c-.627 1.962.88 3.9 2.905 3.9v-2c-.734 0-1.196-.68-1-1.292l-1.905-.609zm7.79 3.9h1.023v-2H8.933v2zM13 9V7h-2v2h2zm-3.045 3C11.615 12 13 10.678 13 9h-2c0 .532-.447 1-1.045 1v2zm-1.022-2c-.598 0-1.045-.468-1.045-1h-2c0 1.678 1.384 3 3.045 3v-2zm5.112 2h1.022v-2h-1.022v2zm1.022 0c1.66 0 3.045-1.322 3.045-3h-2c0 .532-.447 1-1.045 1v2zm-1.022-2C13.447 10 13 9.532 13 9h-2c0 1.678 1.384 3 3.045 3v-2zM2.82 11v8.002h2V11h-2zm3.045 11h12.268v-2H5.866v2zm15.313-3v-8h-2v8h2zm-3.045 3c1.66 0 3.045-1.322 3.045-3h-2c0 .532-.447 1-1.045 1v2zM2.821 19.002C2.82 20.68 4.206 22 5.866 22v-2c-.6 0-1.045-.468-1.045-.998h-2zM2.543 8h18.914V6H2.543v2zm7.412 8h4.09v-2h-4.09v2zm4.112 0v5h2v-5h-2zm1 4H8.933v2h6.134v-2zm-5.134 1v-5h-2v5h2zm4.112-5a.04.04 0 0 1 .015.003.027.027 0 0 1 .008.005c.002.002.002.002.001 0a.02.02 0 0 1-.001-.005V16h2c0-1.125-.927-2-2.023-2v2zm-4.09-2c-1.096 0-2.022.875-2.022 2h2v.003l-.002.005c0 .002-.001.002 0 0a.026.026 0 0 1 .009-.005.04.04 0 0 1 .015-.003v-2zm-5.908-2h.796v-2h-.796v2z"
    />
  </svg>
);

const ForwardRef = forwardRef(RetailerOutline);
export default ForwardRef;
