import { JSX, Component, Prop, h, Element } from '@stencil/core';
import type { BreakpointCustomizable, PropTypes, SelectedAriaAttributes, ThemeExtendedElectricDark } from '../../types';
import type { SpinnerSize, SpinnerAriaAttribute } from './spinner-utils';
import { verifySpinnerSize, SPINNER_ARIA_ATTRIBUTES, SPINNER_SIZES } from './spinner-utils';
import {
  AllowedTypes,
  attachComponentCss,
  parseAndGetAriaAttributes,
  THEMES_EXTENDED_ELECTRIC_DARK,
  validateProps,
} from '../../utils';
import { getComponentCss } from './spinner-styles';

const propTypes: PropTypes<typeof Spinner> = {
  size: AllowedTypes.breakpoint<SpinnerSize>(SPINNER_SIZES),
  theme: AllowedTypes.oneOf<ThemeExtendedElectricDark>(THEMES_EXTENDED_ELECTRIC_DARK),
  aria: AllowedTypes.aria<SpinnerAriaAttribute>(SPINNER_ARIA_ATTRIBUTES),
};

@Component({
  tag: 'p-spinner',
  shadow: true,
})
export class Spinner {
  @Element() public host!: HTMLElement;

  /** Size of the spinner. */
  @Prop() public size?: BreakpointCustomizable<SpinnerSize> = 'small';

  /** Adapts the spinner color depending on the theme. */
  @Prop() public theme?: ThemeExtendedElectricDark = 'light';

  /** Add ARIA attributes. */
  @Prop() public aria?: SelectedAriaAttributes<SpinnerAriaAttribute>;

  public render(): JSX.Element {
    validateProps(this, propTypes);
    verifySpinnerSize(this.size); // TODO: redundant?
    attachComponentCss(this.host, getComponentCss, this.size, this.theme);

    return (
      <span class="root" role="alert" aria-live="assertive" {...parseAndGetAriaAttributes(this.aria)}>
        {/* empty element needed to announce aria-label in screen readers */}
        <span class="sr-only">&nbsp;</span>
        <svg viewBox="-16 -16 32 32" width="100%" height="100%" focusable="false" aria-hidden="true">
          <circle r="9" />
          <circle r="9" />
        </svg>
      </span>
    );
  }
}
