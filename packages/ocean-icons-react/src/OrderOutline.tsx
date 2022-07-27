import React from 'react';

type IconProps = {
  size?: number;
} & React.SVGProps<SVGSVGElement>;

const OrderOutline = (
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
    <g strokeLinecap="round" strokeWidth={2} clipPath="url(#prefix__a)">
      <path d="M7.83 8.702h6.616M7.83 11.574h6.616M7.83 14.446h4.701" />
    </g>
    <path
      strokeLinecap="round"
      strokeWidth={2}
      d="M16.446 19.233h3.745m-1.915 1.915v-3.744"
    />
    <path
      fill="currentColor"
      d="M12.574 20.276a1 1 0 100-2v2zm4.744-6.745a1 1 0 102 0h-2zM5.872 4.957h10.532v-2H5.872v2zm-.915 12.404V5.872h-2v11.489h2zm7.617.915H5.872v2h6.702v-2zm4.744-12.404v7.66h2v-7.66h-2zM2.958 17.361a2.915 2.915 0 002.914 2.915v-2a.915.915 0 01-.915-.915h-2zM16.403 4.957c.505 0 .914.41.914.915h2a2.915 2.915 0 00-2.915-2.915v2zm-10.532-2a2.915 2.915 0 00-2.915 2.915h2c0-.505.41-.915.915-.915v-2z"
    />
    <defs>
      <clipPath id="prefix__a">
        <path
          fill="#fff"
          d="M0 0h8.617v7.659H0z"
          transform="translate(6.83 7.787)"
        />
      </clipPath>
    </defs>
  </svg>
);

const ForwardRef = React.forwardRef(OrderOutline);
export default ForwardRef;
