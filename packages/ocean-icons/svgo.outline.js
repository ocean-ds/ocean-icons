/* eslint-disable @typescript-eslint/no-var-requires */
const { extendDefaultPlugins } = require('svgo');

module.exports = {
  plugins: extendDefaultPlugins([
    'removeDimensions',
    'sortAttrs',
    {
      name: 'removeAttrs',
      params: { attrs: ['stroke'] },
    },
    {
      name: 'addAttributesToSVGElement',
      params: {
        attributes: [{ stroke: 'currentColor' }],
      },
    },
    {
      name: 'addStrokeNoneToFilledElements',
      type: 'perItem',
      fn: (item) => {
        if (item.type !== 'element' || item.name === 'svg') return;
        const { fill } = item.attributes;
        if (fill && fill !== 'none') item.attributes.stroke = 'none';
      },
    },
  ]),
};
