/* eslint-disable @typescript-eslint/no-var-requires */
const { extendDefaultPlugins } = require('svgo');

module.exports = {
  plugins: extendDefaultPlugins([
    'removeDimensions',
    'sortAttrs',
    {
      name: 'removeAttrs',
      params: { attrs: ['fill'] },
    },
    {
      name: 'addAttributesToSVGElement',
      params: {
        attributes: [{ fill: 'currentColor' }],
      },
    },
  ]),
};
