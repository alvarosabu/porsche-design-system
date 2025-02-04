import { Component, Element, h, JSX, Prop } from '@stencil/core';
import type { GridItemInternalHTMLProps, GridItemOffset, GridItemSize } from './grid-item-utils';
import { GRID_ITEM_OFFSETS, GRID_ITEM_SIZES } from './grid-item-utils';
import { getComponentCss } from './grid-item-styles';
import type { BreakpointCustomizable, PropTypes } from '../../../types';
import { AllowedTypes, attachComponentCss, throwIfParentIsNotOfKind, validateProps } from '../../../utils';

const propTypes: PropTypes<typeof GridItem> = {
  size: AllowedTypes.breakpoint<GridItemSize>(GRID_ITEM_SIZES),
  offset: AllowedTypes.breakpoint<GridItemOffset>(GRID_ITEM_OFFSETS),
};

@Component({
  tag: 'p-grid-item',
  shadow: true,
})
export class GridItem {
  @Element() public host!: HTMLElement & GridItemInternalHTMLProps;

  /** The size of the column. Can be between 1 and 12. Also defines the size of the column for specific breakpoints, like {base: 6, l: 3}. You always need to provide a base value when doing this. */
  @Prop() public size?: BreakpointCustomizable<GridItemSize> = 1;

  /** The offset of the column. Can be between 0 and 11. Also defines the offset of the column for specific breakpoints, like {base: 6, l: 3}. You always need to provide a base value when doing this. */
  @Prop() public offset?: BreakpointCustomizable<GridItemOffset> = 0;

  public connectedCallback(): void {
    throwIfParentIsNotOfKind(this.host, 'p-grid');
  }

  public render(): JSX.Element {
    validateProps(this, propTypes);
    attachComponentCss(
      this.host,
      getComponentCss,
      this.size,
      this.offset,
      this.host.gutter || { base: 16, s: 24, m: 36 } // default as fallback
    );

    return <slot />;
  }
}
