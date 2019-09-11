import * as React from "react"
import cx from "classnames"

import {prefix, getElementType, ClassNameProp, ComponentProp} from "../../utils"

export interface PSpacingProps extends ClassNameProp, ComponentProp {
  /**
   * Set this to true if you always want to create a wrapper, even for single childs.
   * This is useful if the child element does not support className, or for dynamic children.
   */
  wrap?: boolean

  margin?: "auto" | 4 | 8 | 16 | 24 | 32 | 40 | 48 | 56 | 64 | 72 | 80 | "a" | "b" | "c" | "d" | "e" | "f" | "g"
  marginBottom?: "auto" | 4 | 8 | 16 | 24 | 32 | 40 | 48 | 56 | 64 | 72 | 80 | "a" | "b" | "c" | "d" | "e" | "f" | "g"
  marginLeft?: "auto" | 4 | 8 | 16 | 24 | 32 | 40 | 48 | 56 | 64 | 72 | 80 | "a" | "b" | "c" | "d" | "e" | "f" | "g"
  marginRight?: "auto" | 4 | 8 | 16 | 24 | 32 | 40 | 48 | 56 | 64 | 72 | 80 | "a" | "b" | "c" | "d" | "e" | "f" | "g"
  marginTop?: "auto" | 4 | 8 | 16 | 24 | 32 | 40 | 48 | 56 | 64 | 72 | 80 | "a" | "b" | "c" | "d" | "e" | "f" | "g"

  marginNegative?: "auto" | 4 | 8 | 16 | 24 | 32 | 40 | 48 | 56 | 64 | 72 | 80 | "a" | "b" | "c" | "d" | "e" | "f" | "g"
  marginNegativeBottom?: "auto" | 4 | 8 | 16 | 24 | 32 | 40 | 48 | 56 | 64 | 72 | 80 | "a" | "b" | "c" | "d" | "e" | "f" | "g"
  marginNegativeLeft?: "auto" | 4 | 8 | 16 | 24 | 32 | 40 | 48 | 56 | 64 | 72 | 80 | "a" | "b" | "c" | "d" | "e" | "f" | "g"
  marginNegativeRight?: "auto" | 4 | 8 | 16 | 24 | 32 | 40 | 48 | 56 | 64 | 72 | 80 | "a" | "b" | "c" | "d" | "e" | "f" | "g"
  marginNegativeTop?: "auto" | 4 | 8 | 16 | 24 | 32 | 40 | 48 | 56 | 64 | 72 | 80 | "a" | "b" | "c" | "d" | "e" | "f" | "g"

  padding?: 4 | 8 | 16 | 24 | 32 | 40 | 48 | 56 | 64 | 72 | 80 | "a" | "b" | "c" | "d" | "e" | "f" | "g"
  paddingBottom?: 4 | 8 | 16 | 24 | 32 | 40 | 48 | 56 | 64 | 72 | 80 | "a" | "b" | "c" | "d" | "e" | "f" | "g"
  paddingLeft?: 4 | 8 | 16 | 24 | 32 | 40 | 48 | 56 | 64 | 72 | 80 | "a" | "b" | "c" | "d" | "e" | "f" | "g"
  paddingRight?: 4 | 8 | 16 | 24 | 32 | 40 | 48 | 56 | 64 | 72 | 80 | "a" | "b" | "c" | "d" | "e" | "f" | "g"
  paddingTop?: 4 | 8 | 16 | 24 | 32 | 40 | 48 | 56 | 64 | 72 | 80 | "a" | "b" | "c" | "d" | "e" | "f" | "g"
}

export const PSpacing: React.FunctionComponent<PSpacingProps> = (props) => {
  const {
    as,
    className,
    children,
    wrap,
    margin,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    marginNegative,
    marginNegativeTop,
    marginNegativeRight,
    marginNegativeBottom,
    marginNegativeLeft,
    padding,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingTop,
    ...rest
  } = props;

  const ElementType = getElementType(as, "div");

  const classes = cx(
    {[prefix(`spacing-m-${margin}`)]: margin},
    {[prefix(`spacing-mt-${marginTop}`)]: marginTop},
    {[prefix(`spacing-mr-${marginRight}`)]: marginRight},
    {[prefix(`spacing-mb-${marginBottom}`)]: marginBottom},
    {[prefix(`spacing-ml-${marginLeft}`)]: marginLeft},
    {[prefix(`spacing-m-n-${marginNegative}`)]: marginNegative},
    {[prefix(`spacing-m-nt-${marginNegativeTop}`)]: marginNegativeTop},
    {[prefix(`spacing-m-nr-${marginNegativeRight}`)]: marginNegativeRight},
    {[prefix(`spacing-m-nb-${marginNegativeBottom}`)]: marginNegativeBottom},
    {[prefix(`spacing-m-nl-${marginNegativeLeft}`)]: marginNegativeLeft},
    {[prefix(`spacing-p-${padding}`)]: padding},
    {[prefix(`spacing-pt-${paddingTop}`)]: paddingTop},
    {[prefix(`spacing-pr-${paddingRight}`)]: paddingRight},
    {[prefix(`spacing-pb-${paddingBottom}`)]: paddingBottom},
    {[prefix(`spacing-pl-${paddingLeft}`)]: paddingLeft},
    className
  );

  if (React.Children.count(children) === 1 && !wrap) {
    // One child => append spacing classes and unhandled props to child
    return React.Children.map(children, (child: any) => {
      if (!child) {
        return child
      }

      if (!child.type) {
        return (
          <ElementType className={classes} {...rest}>
            {children}
          </ElementType>
        )
      }

      const {className: childrenClassName, ...childRest} = child.props;

      return React.cloneElement(child, {
        className: cx(childrenClassName, classes),
        ...childRest
      })
    })[0]
  } else {
    // Multiple childs => render wrapper element with spacing classes and unhandled props
    return (
      <ElementType className={classes} {...rest}>
        {children}
      </ElementType>
    )
  }
};
