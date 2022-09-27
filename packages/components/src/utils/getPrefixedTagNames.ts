import type { TagNameCamelCase } from '@porsche-design-system/shared';
import { TAG_NAMES } from '@porsche-design-system/shared';
import { paramCaseToCamelCase } from '.';
import { getTagName } from './getTagName';

// prevent internal usage of p-headline and p-text
type AllowedTagNameCamelCase = Exclude<TagNameCamelCase, 'pHeadline' | 'pText'>;
type PrefixedTagNames = Record<AllowedTagNameCamelCase, string>;

export const PREFIXED_TAG_NAMES_CACHE = new Map<string, PrefixedTagNames>();
const tagNamesWithoutTextAndHeadline = TAG_NAMES.filter((item) => item !== 'p-text' && item !== 'p-headline');

export const getPrefixedTagNames = (host: HTMLElement): PrefixedTagNames => {
  const [, prefix = ''] = /^([a-z-]+)-p-[a-z-]+$/.exec(getTagName(host)) || [];

  if (!PREFIXED_TAG_NAMES_CACHE.has(prefix)) {
    const tagNames: PrefixedTagNames = tagNamesWithoutTextAndHeadline.reduce(
      prefix
        ? (result, tag) => ({
            ...result,
            [paramCaseToCamelCase(tag)]: `${prefix}-${tag}`,
          })
        : (result, tag) => ({
            ...result,
            [paramCaseToCamelCase(tag)]: tag,
          }),
      {} as PrefixedTagNames
    );

    PREFIXED_TAG_NAMES_CACHE.set(prefix, tagNames);
  }

  return PREFIXED_TAG_NAMES_CACHE.get(prefix);
};
