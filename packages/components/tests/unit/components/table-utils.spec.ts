import {
  getAriaSort,
  getSlottedCss,
  getTableCss,
  isDirectionAsc,
  TABLE_COMPONENTS,
  TableHeadItem,
  toggleDirection,
} from '../../../src/components/layout/table/table-utils';
import { AriaAttributes } from 'react';

describe('isDirectionAsc()', () => {
  it('should return true for "asc"', () => {
    expect(isDirectionAsc('asc')).toBe(true);
  });

  it('should return false for "desc"', () => {
    expect(isDirectionAsc('desc')).toBe(false);
  });
});

describe('toggleDirection()', () => {
  it('should return "asc" for "desc"', () => {
    expect(toggleDirection('asc')).toBe('desc');
  });

  it('should return "desc" for "asc"', () => {
    expect(toggleDirection('desc')).toBe('asc');
  });
});

describe('getAriaSort()', () => {
  const data: [TableHeadItem, AriaAttributes['aria-sort']][] = [
    [{ isSortable: false, isSorting: false, direction: 'asc' }, 'none'],
    [{ isSortable: false, isSorting: false, direction: 'desc' }, 'none'],
    [{ isSortable: false, isSorting: true, direction: 'asc' }, 'none'],
    [{ isSortable: false, isSorting: true, direction: 'desc' }, 'none'],
    [{ isSortable: true, isSorting: false, direction: 'asc' }, 'none'],
    [{ isSortable: true, isSorting: false, direction: 'desc' }, 'none'],
    [{ isSortable: true, isSorting: true, direction: 'asc' }, 'ascending'],
    [{ isSortable: true, isSorting: true, direction: 'desc' }, 'descending'],
  ];
  it.each(data)('should for %s return %s', (params, result) => {
    expect(getAriaSort(params)).toBe(result);
  });
});

describe('getSlottedCss()', () => {
  it('should return correct css', () => {
    const host = document.createElement('p-table');
    expect(getSlottedCss(host)).toMatchSnapshot();
  });

  it('should return correct css with prefix', () => {
    const host = document.createElement('prefixed-p-table');
    expect(getSlottedCss(host)).toMatchSnapshot();
  });
});

describe('getTableCss()', () => {
  it.each(TABLE_COMPONENTS.map((component) => `p-${component}`))(
    'should return correct css for component: %s',
    (tableComponent) => {
      const host = document.createElement(tableComponent);
      expect(getTableCss(host)).toMatchSnapshot();
    }
  );

  it.each(TABLE_COMPONENTS.map((component) => `prefixed-p-${component}`))(
    'should return correct css for component with prefix: %s',
    (tableComponent) => {
      const host = document.createElement(tableComponent);
      expect(getTableCss(host)).toMatchSnapshot();
    }
  );
});
