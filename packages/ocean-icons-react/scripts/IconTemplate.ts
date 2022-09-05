/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types */
const IconTemplate = ({ jsx, exports, componentName }: any, { tpl }: any) => {
  return tpl`
    import React, { forwardRef } from 'react';
    ${'\n'}
    type IconProps = {
      size?: number;
    } & React.SVGProps<SVGSVGElement>;
    
    const ${componentName} = ({ size = 24, ...props }: IconProps, ref: React.Ref<SVGSVGElement>) => (
      ${jsx}
    );
    
    ${exports}
  `;
};

export default IconTemplate;
