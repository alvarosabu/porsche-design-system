import { minifyHTML, withoutTagsOption } from './utils';
import { CDN_BASE_PATH_ICONS } from '../../../../../cdn.config';
import { ICON_NAMES, ICONS_MANIFEST } from '@porsche-design-system/icons';

export const generateIconLinksPartial = (): string => {
  const iconType = ICON_NAMES.map((x) => `'${x}'`).join(' | ');
  const types = `type IconNameCamelCase = ${iconType};

type GetIconLinksOptions = {
  icons?: IconNameCamelCase[];
  cdn?: Cdn;
  ${withoutTagsOption}
  format?: Format;
};
type GetIconLinksOptionsFormatHtml = Omit<GetIconLinksOptions, 'withoutTags'> & { format: 'html' };
type GetIconLinksOptionsFormatJsx = Omit<GetIconLinksOptions, 'withoutTags'> & { format: 'jsx' };
type GetIconLinksOptionsWithoutTags = Omit<GetIconLinksOptions, 'format'>;`;

  const link = minifyHTML('<link rel="prefetch" href="${url}" as="image" type="image/svg+xml" crossorigin>');

  const func = `export function getIconLinks(opts?: GetIconLinksOptionsFormatJsx): JSX.Element;
export function getIconLinks(opts?: GetIconLinksOptionsFormatHtml): string;
export function getIconLinks(opts?: GetIconLinksOptionsWithoutTags): string[];
export function getIconLinks(opts?: GetIconLinksOptions): string | string[] | JSX.Element {
  const { icons, cdn, withoutTags, format }: GetIconLinksOptions = {
    icons: ['arrowHeadRight'],
    cdn: 'auto',
    withoutTags: false,
    format: 'html',
    ...opts,
  };

  throwIfRunInBrowser('getIconLinks');

  const supportedIconNames: IconNameCamelCase[] = ${JSON.stringify(ICON_NAMES)};
  const invalidIconNames = icons.filter((x) => !supportedIconNames.includes(x));

  if (invalidIconNames.length) {
    throw new Error(\`The following supplied icon names are invalid:
  \${invalidIconNames.join(', ')}

Please use only valid icon names:
  \${supportedIconNames.join(', ')}\`);
  }

  const cdnBaseUrl = getCdnBaseUrl(cdn);
  const manifest = ${JSON.stringify(ICONS_MANIFEST)};
  const urls = icons.map((icon) => \`\${cdnBaseUrl}/${CDN_BASE_PATH_ICONS}/\${manifest[icon]}\`);
  const linksHtml = urls
    .map((url) => \`${link}\`)
    .join('');
  const linksJsx = urls.map((url, index) => <link key={index} rel="prefetch" href={url} as="image" type="image/svg+xml" crossOrigin="true" />);

  const markup = format === 'html' ? linksHtml : <>{linksJsx}</>;
  return withoutTags ? urls : markup;
}`;

  return [types, func].join('\n\n');
};
