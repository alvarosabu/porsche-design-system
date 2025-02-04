import type { Styles, JssStyle } from 'jss';
import type { GetJssStyleFunction } from '../utils';
import type { BreakpointCustomizable, LinkButtonVariant, ThemeExtendedElectric } from '../types';
import { buildResponsiveStyles, isThemeDark } from '../utils';
import {
  addImportantToEachRule,
  addImportantToRule,
  getFocusJssStyle,
  getInsetJssStyle,
  getTransition,
  pxToRemWithUnit,
  getThemedColors,
} from './';
import { hoverMediaQuery } from './hover-media-query';
import { textSmall } from '@porsche-design-system/utilities-v2';

const { baseColor: darkThemeBaseColor } = getThemedColors('dark');
const { baseColor: lightThemeBaseColor } = getThemedColors('light');

const getVariantColors = (
  variant: LinkButtonVariant,
  theme: ThemeExtendedElectric
): { primaryColor: string; primaryColorHover: string; baseColor: string } => {
  const { brandColor, baseColor, contrastHighColor, hoverColorDarken, contrastHighColorDarken, baseColorDarken } =
    getThemedColors(theme);

  const colors: {
    [t in ThemeExtendedElectric]: {
      [v in LinkButtonVariant]: { primaryColor: string; primaryColorHover: string; baseColor: string };
    };
  } = {
    light: {
      primary: {
        primaryColor: brandColor,
        primaryColorHover: hoverColorDarken,
        baseColor: darkThemeBaseColor,
      },
      secondary: {
        primaryColor: contrastHighColor,
        primaryColorHover: contrastHighColorDarken,
        baseColor: darkThemeBaseColor,
      },
      tertiary: {
        primaryColor: contrastHighColor,
        primaryColorHover: contrastHighColorDarken,
        baseColor,
      },
    },
    dark: {
      primary: {
        primaryColor: brandColor,
        primaryColorHover: hoverColorDarken,
        baseColor: darkThemeBaseColor,
      },
      secondary: {
        primaryColor: darkThemeBaseColor,
        primaryColorHover: baseColorDarken,
        baseColor: lightThemeBaseColor,
      },
      tertiary: {
        primaryColor: darkThemeBaseColor,
        primaryColorHover: darkThemeBaseColor,
        baseColor,
      },
    },
    'light-electric': {
      primary: {
        primaryColor: brandColor,
        primaryColorHover: hoverColorDarken,
        baseColor: darkThemeBaseColor,
      },
      secondary: {
        primaryColor: contrastHighColor,
        primaryColorHover: contrastHighColorDarken,
        baseColor: darkThemeBaseColor,
      },
      tertiary: {
        primaryColor: contrastHighColor,
        primaryColorHover: contrastHighColorDarken,
        baseColor,
      },
    },
  };

  return colors[theme][variant];
};

const linkButtonPadding = `${pxToRemWithUnit(11)} ${pxToRemWithUnit(15)} ${pxToRemWithUnit(11)} ${pxToRemWithUnit(39)}`;

export const getRootJssStyle: GetJssStyleFunction = (hideLabel: boolean): JssStyle => {
  return {
    padding: hideLabel ? 0 : linkButtonPadding,
  };
};

export const getIconJssStyle: GetJssStyleFunction = (hideLabel: boolean): JssStyle => {
  return hideLabel
    ? {
        left: '50%',
        top: '50%',
        transform: 'translate3d(-50%, -50%, 0)',
      }
    : {
        left: pxToRemWithUnit(11),
        top: pxToRemWithUnit(11),
        transform: 'translate3d(0,0,0)',
      };
};

export const getLabelJssStyle: GetJssStyleFunction = (hideLabel: boolean): JssStyle => {
  return hideLabel
    ? {
        width: '1px',
        height: '1px',
        margin: '0 0 0 -1px',
        overflow: 'hidden',
        textIndent: '-1px',
      }
    : {
        width: '100%',
        height: 'auto',
        margin: 0,
        overflow: 'visible',
        textIndent: 0,
      };
};

export const getSlottedLinkJssStyle: GetJssStyleFunction = (hideLabel: boolean): JssStyle => {
  return hideLabel
    ? {
        position: 'absolute',
        ...getInsetJssStyle(),
        padding: 0,
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textIndent: '99999px',
      }
    : {
        position: 'static',
        ...getInsetJssStyle('auto'),
        padding: linkButtonPadding,
        overflow: 'visible',
        whiteSpace: 'normal',
        textIndent: 0,
      };
};

export const getLinkButtonStyles = (
  variant: LinkButtonVariant,
  hideLabel: BreakpointCustomizable<boolean>,
  isDisabledOrLoading: boolean,
  hasSlottedAnchor: boolean,
  theme: ThemeExtendedElectric
): Styles => {
  const isDarkTheme = isThemeDark(theme);
  const isTertiary = variant === 'tertiary';
  const { primaryColor, primaryColorHover, baseColor } = getVariantColors(variant, theme);
  const { disabledColor } = getThemedColors(theme);
  const iconLabelColor = isDisabledOrLoading ? (isTertiary ? disabledColor : 'rgba(255,255,255,0.55)') : baseColor;

  return {
    '@global': {
      ':host': {
        display: 'inline-flex',
        verticalAlign: 'top',
        outline: addImportantToRule(0),
      },
      ...(hasSlottedAnchor && {
        '::slotted': addImportantToEachRule({
          '&(a)': {
            display: 'block',
            textDecoration: 'none',
            color: 'inherit',
            lineHeight: 'inherit',
            outline: 'transparent solid 1px',
            outlineOffset: '3px',
            ...buildResponsiveStyles(hideLabel, getSlottedLinkJssStyle),
          },
          // TODO: combine link-social-styles with link-button-styles and tabs-bar-styles
          '&(a::-moz-focus-inner)': {
            border: 0,
          },
          '&(a:focus)': {
            outlineColor: primaryColor,
          },
          ...hoverMediaQuery({
            '&(a:hover:focus)': {
              outlineColor: primaryColorHover,
            },
          }),
          '&(a:focus:not(:focus-visible))': {
            outlineColor: 'transparent',
          },
        }),
      }),
      span: {
        display: 'block',
        width: '100%',
        color: iconLabelColor,
        ...textSmall,
        ...(!hasSlottedAnchor && buildResponsiveStyles(hideLabel, getLabelJssStyle)),
      },
    },
    // TODO: reduce to only necessary styles (e.g. why boxSizing?)
    // TODO: overhead in link styles when slotted anchor is used
    // TODO: overhead due that link does not need same "reset" styles as button
    root: {
      display: 'flex',
      width: '100%',
      minWidth: pxToRemWithUnit(48),
      minHeight: pxToRemWithUnit(48),
      position: 'relative',
      margin: 0,
      padding: 0,
      boxSizing: 'border-box',
      outline: 'transparent none',
      appearance: 'none',
      cursor: isDisabledOrLoading ? 'not-allowed' : 'pointer',
      textDecoration: 'none',
      textAlign: 'left',
      border: '1px solid currentColor',
      backgroundColor: isTertiary ? 'transparent' : 'currentColor',
      color: isDisabledOrLoading ? disabledColor : primaryColor,
      transition: ['background-color', 'border-color', 'color'].map(getTransition).join(),
      ...(!hasSlottedAnchor && {
        ...buildResponsiveStyles(hideLabel, getRootJssStyle),
        ...getFocusJssStyle(),
      }),
      ...(!isDisabledOrLoading &&
        hoverMediaQuery({
          '&:hover, &:active': {
            color: primaryColorHover,
            ...(isTertiary && {
              backgroundColor: 'currentColor',
              '& > span, & > $icon': {
                color: isDarkTheme ? lightThemeBaseColor : darkThemeBaseColor,
              },
            }),
          },
        })),
    },
    icon: {
      position: 'absolute',
      width: pxToRemWithUnit(24),
      height: pxToRemWithUnit(24),
      color: iconLabelColor,
      pointerEvents: 'none',
      ...buildResponsiveStyles(hideLabel, getIconJssStyle),
    },
  };
};
