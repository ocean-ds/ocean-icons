import svgr from '@svgr/core';
import { promises as fs } from 'fs';
import template from './template';

const resetSrcDir = async () => {
  try {
    await fs.rmdir('src', { recursive: true });
    await fs.mkdir('src');
  } catch (error) {
    throw new Error(error);
  }
};

const getIconSuffixByType = (type: string) => {
  // Create a suffix for each other icon style that is not solid
  const iconSuffix = type === 'solid' ? '' : `${type.split('-')[0]}`;
  return iconSuffix.charAt(0).toUpperCase() + iconSuffix.substring(1);
};

const getIconNameByType = (name: string, type: string) =>
  name
    .replace('.svg', '')
    .split('-')
    .map((el) => el.charAt(0).toUpperCase() + el.substring(1))
    .join('') + type;

const genNamedComponentFromBuffer = async (
  componentName: string,
  svgCode: Buffer
): Promise<string> => {
  try {
    return await svgr(
      svgCode,
      {
        template,
        svgo: true,
        ref: true,
        svgProps: { width: '{size}', height: '{size}' },
        plugins: [
          '@svgr/plugin-svgo',
          '@svgr/plugin-jsx',
          '@svgr/plugin-prettier',
        ],
      },
      { componentName }
    );
  } catch (error) {
    throw new Error(error);
  }
};

(async () => {
  await resetSrcDir();

  const inputPath = '../ocean-icons/src';

  for (const type of ['solid', 'outline']) {
    const fileList = await fs.readdir(`${inputPath}/${type}`);

    for (const iconName of fileList) {
      const exportName = getIconNameByType(iconName, getIconSuffixByType(type));

      const data = await fs.readFile(`${inputPath}/${type}/${iconName}`);
      const jsx = await genNamedComponentFromBuffer(exportName, data);
      await fs.writeFile(`src/${exportName}.tsx`, jsx);

      const exportStr = `export { default as ${exportName} } from './${exportName}';\n`;
      await fs.writeFile('src/index.ts', exportStr, { flag: 'a' });
    }
  }
})();
