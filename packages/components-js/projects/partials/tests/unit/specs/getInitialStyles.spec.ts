import { getInitialStyles } from '../../../src';
import { render } from '@testing-library/react';
import { INTERNAL_TAG_NAMES, TAG_NAMES } from '@porsche-design-system/shared';

const filteredTagNames = TAG_NAMES.filter((x) => !INTERNAL_TAG_NAMES.includes(x));
const tagNames = filteredTagNames.join();
const prefixedTagNames = filteredTagNames.map((x) => `custom-prefix-${x}`).join();

jest.mock('../../../src/shared');

describe('format: html', () => {
  it('should return core styles', () => {
    const result = getInitialStyles();
    const regex = new RegExp(
      `<style data-pds-initial-styles>${tagNames}{visibility:hidden}.hydrated,.ssr{visibility:inherit}</style>`
    );
    expect(result).toMatch(regex);
  });

  it('should add custom prefixes to component names', () => {
    const result = getInitialStyles({ prefix: 'custom-prefix' });
    const regex = new RegExp(
      `<style data-pds-initial-styles-custom-prefix>${prefixedTagNames}{visibility:hidden}.hydrated,.ssr{visibility:inherit}</style>`
    );
    expect(result).toMatch(regex);
  });
});

describe('format: jsx', () => {
  it('should return core styles', () => {
    const { container } = render(getInitialStyles({ format: 'jsx' }));
    const regex = new RegExp(
      `<style data-pds-initial-styles="">${tagNames}{visibility:hidden}.hydrated,.ssr{visibility:inherit}</style>`
    );
    expect(container.innerHTML).toMatch(regex);
  });

  it('should add custom prefix to component names', () => {
    const { container } = render(getInitialStyles({ format: 'jsx', prefix: 'custom-prefix' }));
    const regex = new RegExp(
      `<style data-pds-initial-styles-custom-prefix="">${prefixedTagNames}{visibility:hidden}.hydrated,.ssr{visibility:inherit}</style>`
    );
    expect(container.innerHTML).toMatch(regex);
  });
});

describe('withoutTags: true', () => {
  it('should return core styles without style tag', () => {
    const result = getInitialStyles({ withoutTags: true });
    const regex = new RegExp(`${tagNames}{visibility:hidden}`);
    expect(result).toMatch(regex);
  });
});
