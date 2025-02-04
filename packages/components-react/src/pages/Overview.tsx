/* Auto Generated File */
import { PAccordion, PBanner, PButton, PButtonGroup, PButtonPure, PCarousel, PCheckboxWrapper, PContentWrapper, PDivider, PFieldsetWrapper, PFlex, PFlexItem, PGrid, PGridItem, PHeadline, PIcon, PInlineNotification, PLink, PLinkPure, PLinkSocial, PLinkTile, PMarque, PorscheDesignSystemProvider, PPagination, PPopover, PRadioButtonWrapper, PScroller, PSegmentedControl, PSegmentedControlItem, PSelectWrapper, PSpinner, PStepperHorizontal, PStepperHorizontalItem, PSwitch, PTable, PTableBody, PTableCell, PTableHead, PTableHeadCell, PTableHeadRow, PTableRow, PTabs, PTabsBar, PTabsItem, PTag, PTagDismissible, PText, PTextareaWrapper, PTextFieldWrapper, PTextList, PTextListItem } from '@porsche-design-system/components-react';

export const OverviewPage = (): JSX.Element => {
  const style = `
    p-flex-item > p,
    my-prefix-p-flex-item > p,
    p-grid-item > p,
    my-prefix-p-grid-item > p,
    p-content-wrapper > p,
    my-prefix-p-content-wrapper > p {
      margin: 0;
      padding: 4px 2vw;
      text-align: center;
      color: white;
      background: lightskyblue;
    }

    p-flex-item:nth-child(1n) > p,
    my-prefix-p-flex-item:nth-child(1n) > p,
    p-grid-item:nth-child(1n) > p,
    my-prefix-p-grid-item:nth-child(1n) > p {
      background: skyblue;
    }

    p-flex-item:nth-child(2n) > p,
    my-prefix-p-flex-item:nth-child(2n) > p,
    p-grid-item:nth-child(2n) > p,
    my-prefix-p-grid-item:nth-child(2n) > p {
      background: deepskyblue;
    }

    p-link-tile,
    my-prefix-p-link-tile {
      max-width: 400px;
    }

    p-banner,
    my-prefix-p-banner {
      --p-banner-position-type: static;
    }
  `;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: style }} />

      <div className="root" style={{ display: 'flex' }}>
        <div style={{ flex: 1 }}>
          <div className="playground light" title="should render default headline">
            <PHeadline>Default Components</PHeadline>
          </div>

          <div className="playground light" title="should render default banner">
            <PBanner>
              <span slot="title">Default banner component</span>
              <span slot="description">Some slotted banner description</span>
            </PBanner>
          </div>

          <div className="playground light" title="should render default inline-notification">
            <PInlineNotification heading="Some heading" description="Some description" />
          </div>

          <div className="playground light" title="should render default popover">
            <PPopover direction="right">Some popover content</PPopover>
          </div>

          <div className="playground light" title="should render default divider">
            <PDivider />
          </div>

          <div className="playground light" title="should render default button">
            <PButton>Some label</PButton>
          </div>

          <div className="playground light" title="should render default button-group">
            <PButtonGroup>
              <PButton>Some label</PButton>
              <PButton>Some label</PButton>
            </PButtonGroup>
          </div>

          <div className="playground light" title="should render default button-pure">
            <PButtonPure>Some label</PButtonPure>
          </div>

          <div className="playground light" title="should render default checkbox-wrapper">
            <PCheckboxWrapper label="Some label">
              <input type="checkbox" />
            </PCheckboxWrapper>
          </div>

          <div className="playground light" title="should render default radio-button-wrapper">
            <PRadioButtonWrapper label="Some label">
              <input type="radio" />
            </PRadioButtonWrapper>
          </div>

          <div className="playground light" title="should render default select-wrapper">
            <PSelectWrapper label="Some label">
              <select>
                <option value="a">Option A</option>
                <option value="b">Option B</option>
                <option value="c">Option C</option>
              </select>
            </PSelectWrapper>
          </div>

          <div className="playground light" title="should render default text-field-wrapper">
            <PTextFieldWrapper label="Some label">
              <input type="text" />
            </PTextFieldWrapper>
          </div>

          <div className="playground light" title="should render default textarea-wrapper">
            <PTextareaWrapper label="Some label">
              <textarea />
            </PTextareaWrapper>
          </div>

          <div className="playground light" title="should render default fieldset-wrapper">
            <PFieldsetWrapper label="Some label" />
          </div>

          <div className="playground light" title="should render default content-wrapper">
            <PContentWrapper>
              <p>Some content</p>
            </PContentWrapper>
          </div>

          <div className="playground light" title="should render default text">
            <PText>The quick brown fox jumps over the lazy dog</PText>
          </div>

          <div className="playground light" title="should render default text-list">
            <PTextList>
              <PTextListItem>The quick brown fox jumps over the lazy dog</PTextListItem>
            </PTextList>
          </div>

          <div className="playground light" title="should render default icon">
            <PIcon />
          </div>

          <div className="playground light" title="should render default link">
            <PLink href="https://www.porsche.com">Some label</PLink>
          </div>

          <div className="playground light" title="should render default link-pure">
            <PLinkPure href="https://www.porsche.com">Some label</PLinkPure>
          </div>

          <div className="playground light" title="should render default link-social">
            <PLinkSocial href="https://www.porsche.com" icon="logo-facebook">Some label</PLinkSocial>
          </div>

          <div className="playground light" title="should render default marque">
            <PMarque />
          </div>

          <div className="playground light" title="should render default pagination">
            <PPagination totalItemsCount={500} itemsPerPage={25} activePage={1} />
          </div>

          <div className="playground light" title="should render default table">
            <PTable>
              <PTableHead>
                <PTableHeadRow>
                  <PTableHeadCell>Column 1</PTableHeadCell>
                  <PTableHeadCell>Column 2</PTableHeadCell>
                </PTableHeadRow>
              </PTableHead>
              <PTableBody>
                <PTableRow>
                  <PTableCell>Cell 1</PTableCell>
                  <PTableCell>Cell 2</PTableCell>
                </PTableRow>
              </PTableBody>
            </PTable>
          </div>

          <div className="playground light" title="should render default tabs">
            <PTabs activeTabIndex={0}>
              <PTabsItem label="Tab1">Content 1</PTabsItem>
              <PTabsItem label="Tab2">Content 2</PTabsItem>
              <PTabsItem label="Tab3">Content 3</PTabsItem>
            </PTabs>
          </div>

          <div className="playground light" title="should render default tabs-bar">
            <PTabsBar activeTabIndex={0}>
              <button>Tab1</button>
              <button>Tab2</button>
              <button>Tab3</button>
            </PTabsBar>
          </div>

          <div className="playground light" title="should render default accordion">
            <PAccordion heading="Some accordion heading">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
              dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
            </PAccordion>
          </div>

          <div className="playground light" title="should render default spinner">
            <PSpinner />
          </div>

          <div className="playground light" title="should render default flex">
            <PFlex>
              <PFlexItem><p>1</p></PFlexItem>
              <PFlexItem><p>2</p></PFlexItem>
            </PFlex>
          </div>

          <div className="playground light" title="should render default grid">
            <PGrid>
              <PGridItem size={6}><p>1</p></PGridItem>
              <PGridItem size={6}><p>2</p></PGridItem>
            </PGrid>
          </div>

          <div className="playground light" title="should render default tag">
            <PTag>Some Tag</PTag>
          </div>

          <div className="playground light" title="should render default tag-dismissible">
            <PTagDismissible>Some Tag</PTagDismissible>
          </div>

          <div className="playground light" title="should render default segmented-control">
            <PSegmentedControl value="s">
              <PSegmentedControlItem value="s">S</PSegmentedControlItem>
              <PSegmentedControlItem value="m">M</PSegmentedControlItem>
              <PSegmentedControlItem value="l">L</PSegmentedControlItem>
              <PSegmentedControlItem value="xl">XL</PSegmentedControlItem>
            </PSegmentedControl>
          </div>

          <div className="playground light" title="should render default switch">
            <PSwitch>Some label</PSwitch>
          </div>

          <div className="playground light" title="should render default stepper-horizontal">
            <PStepperHorizontal>
              <PStepperHorizontalItem state="current">Step 1</PStepperHorizontalItem>
              <PStepperHorizontalItem>Step 2</PStepperHorizontalItem>
              <PStepperHorizontalItem>Step 3</PStepperHorizontalItem>
              <PStepperHorizontalItem>Step 4</PStepperHorizontalItem>
              <PStepperHorizontalItem>Step 5</PStepperHorizontalItem>
              <PStepperHorizontalItem>Step 6</PStepperHorizontalItem>
              <PStepperHorizontalItem>Step 7</PStepperHorizontalItem>
              <PStepperHorizontalItem>Step 8</PStepperHorizontalItem>
              <PStepperHorizontalItem>Step 9</PStepperHorizontalItem>
            </PStepperHorizontal>
          </div>

          <div className="playground light" title="should render default scroller">
            <PScroller>
              <button>Default</button>
              <button>Default</button>
              <button>Default</button>
              <button>Default</button>
              <button>Default</button>
              <button>Default</button>
              <button>Default</button>
              <button>Default</button>
              <button>Default</button>
              <button>Default</button>
              <button>Default</button>
              <button>Default</button>
              <button>Default</button>
              <button>Default</button>
            </PScroller>
          </div>

          <div className="playground light" title="should render default link-tile">
            <PLinkTile href="#" label="Some Label" description="Default">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyAQMAAAAk8RryAAAABlBMVEUAAAD2vP9xXLiUAAAAAXRSTlMAQObYZgAAABxJREFUGNNjYOBgYGBhYKAZ/R8MDsD4Q5amkz8ASp4PtTYYQZIAAAAASUVORK5CYII="
                width={50}
                height={50}
                alt="Beach"
              />
            </PLinkTile>
          </div>

          <div className="playground light" title="should render default carousel">
            <PCarousel heading="Heading">
              <div>Slide 1</div>
              <div>Slide 2</div>
              <div>Slide 3</div>
            </PCarousel>
          </div>
        </div>

        <PorscheDesignSystemProvider prefix="my-prefix">
          <div style={{ flex: 1 }}>
            <div className="playground light" title="should render default headline with custom prefix">
              <PHeadline>Prefixed Components</PHeadline>
            </div>

            <div className="playground light" title="should render default banner with custom prefix">
              <PBanner>
                <span slot="title">Prefixed banner component</span>
                <span slot="description">Some slotted banner description</span>
              </PBanner>
            </div>

            <div className="playground light" title="should render default inline-notification with custom prefix">
              <PInlineNotification
                heading="Some heading"
                description="Some description"
               />
            </div>

            <div className="playground light" title="should render default popover with custom prefix">
              <PPopover direction="right">Some popover content</PPopover>
            </div>

            <div className="playground light" title="should render default divider with custom prefix">
              <PDivider />
            </div>

            <div className="playground light" title="should render default button with custom prefix">
              <PButton>Some label</PButton>
            </div>

            <div className="playground light" title="should render default button-group with custom prefix">
              <PButtonGroup>
                <PButton>Some label</PButton>
                <PButton>Some label</PButton>
              </PButtonGroup>
            </div>

            <div className="playground light" title="should render default button-pure with custom prefix">
              <PButtonPure>Some label</PButtonPure>
            </div>

            <div className="playground light" title="should render default checkbox-wrapper with custom prefix">
              <PCheckboxWrapper label="Some label">
                <input type="checkbox" />
              </PCheckboxWrapper>
            </div>

            <div className="playground light" title="should render default radio-button-wrapper with custom prefix">
              <PRadioButtonWrapper label="Some label">
                <input type="radio" />
              </PRadioButtonWrapper>
            </div>

            <div className="playground light" title="should render default select-wrapper with custom prefix">
              <PSelectWrapper label="Some label">
                <select>
                  <option value="a">Option A</option>
                  <option value="b">Option B</option>
                  <option value="c">Option C</option>
                </select>
              </PSelectWrapper>
            </div>

            <div className="playground light" title="should render default text-field-wrapper with custom prefix">
              <PTextFieldWrapper label="Some label">
                <input type="text" />
              </PTextFieldWrapper>
            </div>

            <div className="playground light" title="should render default textarea-wrapper with custom prefix">
              <PTextareaWrapper label="Some label">
                <textarea />
              </PTextareaWrapper>
            </div>

            <div className="playground light" title="should render default fieldset-wrapper with custom prefix">
              <PFieldsetWrapper label="Some label" />
            </div>

            <div className="playground light" title="should render default content-wrapper with custom prefix">
              <PContentWrapper>
                <p>Some content</p>
              </PContentWrapper>
            </div>

            <div className="playground light" title="should render default text with custom prefix">
              <PText>The quick brown fox jumps over the lazy dog</PText>
            </div>

            <div className="playground light" title="should render default text-list with custom prefix">
              <PTextList>
                <PTextListItem>The quick brown fox jumps over the lazy dog</PTextListItem>
              </PTextList>
            </div>

            <div className="playground light" title="should render default icon with custom prefix">
              <PIcon />
            </div>

            <div className="playground light" title="should render default link with custom prefix">
              <PLink href="https://www.porsche.com">Some label</PLink>
            </div>

            <div className="playground light" title="should render default link-pure with custom prefix">
              <PLinkPure href="https://www.porsche.com">Some label</PLinkPure>
            </div>

            <div className="playground light" title="should render default link-social with custom prefix">
              <PLinkSocial href="https://www.porsche.com" icon="logo-facebook">Some label</PLinkSocial>
            </div>

            <div className="playground light" title="should render default marque with custom prefix">
              <PMarque />
            </div>

            <div className="playground light" title="should render default pagination with custom prefix">
              <PPagination totalItemsCount={500} itemsPerPage={25} activePage={1} />
            </div>

            <div className="playground light" title="should render default table with custom prefix">
              <PTable>
                <PTableHead>
                  <PTableHeadRow>
                    <PTableHeadCell>Column 1</PTableHeadCell>
                    <PTableHeadCell>Column 2</PTableHeadCell>
                  </PTableHeadRow>
                </PTableHead>
                <PTableBody>
                  <PTableRow>
                    <PTableCell>Cell 1</PTableCell>
                    <PTableCell>Cell 2</PTableCell>
                  </PTableRow>
                </PTableBody>
              </PTable>
            </div>

            <div className="playground light" title="should render default tabs with custom prefix">
              <PTabs>
                <PTabsItem label="Tab1">Content 1</PTabsItem>
                <PTabsItem label="Tab2">Content 2</PTabsItem>
                <PTabsItem label="Tab3">Content 3</PTabsItem>
              </PTabs>
            </div>

            <div className="playground light" title="should render default tabs-bar with custom prefix">
              <PTabsBar activeTabIndex={0}>
                <button>Tab1</button>
                <button>Tab2</button>
                <button>Tab3</button>
              </PTabsBar>
            </div>

            <div className="playground light" title="should render default accordion with custom prefix">
              <PAccordion heading="Some accordion heading">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              </PAccordion>
            </div>

            <div className="playground light" title="should render default spinner with custom prefix">
              <PSpinner />
            </div>

            <div className="playground light" title="should render default flex with custom prefix">
              <PFlex>
                <PFlexItem><p>1</p></PFlexItem>
                <PFlexItem><p>2</p></PFlexItem>
              </PFlex>
            </div>

            <div className="playground light" title="should render default grid with custom prefix">
              <PGrid>
                <PGridItem size={6}><p>1</p></PGridItem>
                <PGridItem size={6}><p>2</p></PGridItem>
              </PGrid>
            </div>

            <div className="playground light" title="should render default tag with custom prefix">
              <PTag>Some Tag</PTag>
            </div>

            <div className="playground light" title="should render default tag-dismissible with custom prefix">
              <PTagDismissible>Some Tag</PTagDismissible>
            </div>

            <div className="playground light" title="should render default segmented-control with custom prefix">
              <PSegmentedControl value="s">
                <PSegmentedControlItem value="s">S</PSegmentedControlItem>
                <PSegmentedControlItem value="m">M</PSegmentedControlItem>
                <PSegmentedControlItem value="l">L</PSegmentedControlItem>
                <PSegmentedControlItem value="xl">XL</PSegmentedControlItem>
              </PSegmentedControl>
            </div>

            <div className="playground light" title="should render default switch with custom prefix">
              <PSwitch>Some label</PSwitch>
            </div>

            <div className="playground light" title="should render default stepper-horizontal with custom prefix">
              <PStepperHorizontal>
                <PStepperHorizontalItem state="current">Step 1</PStepperHorizontalItem>
                <PStepperHorizontalItem>Step 2</PStepperHorizontalItem>
                <PStepperHorizontalItem>Step 3</PStepperHorizontalItem>
                <PStepperHorizontalItem>Step 4</PStepperHorizontalItem>
                <PStepperHorizontalItem>Step 5</PStepperHorizontalItem>
                <PStepperHorizontalItem>Step 6</PStepperHorizontalItem>
                <PStepperHorizontalItem>Step 7</PStepperHorizontalItem>
                <PStepperHorizontalItem>Step 8</PStepperHorizontalItem>
                <PStepperHorizontalItem>Step 9</PStepperHorizontalItem>
              </PStepperHorizontal>
            </div>

            <div className="playground light" title="should render default scroller with custom prefix">
              <PScroller>
                <button>Default</button>
                <button>Default</button>
                <button>Default</button>
                <button>Default</button>
                <button>Default</button>
                <button>Default</button>
                <button>Default</button>
                <button>Default</button>
                <button>Default</button>
                <button>Default</button>
                <button>Default</button>
                <button>Default</button>
                <button>Default</button>
                <button>Default</button>
              </PScroller>
            </div>

            <div className="playground light" title="should render default link-tile with custom prefix">
              <PLinkTile href="#" label="Some Label" description="Default">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyAQMAAAAk8RryAAAABlBMVEUAAAD2vP9xXLiUAAAAAXRSTlMAQObYZgAAABxJREFUGNNjYOBgYGBhYKAZ/R8MDsD4Q5amkz8ASp4PtTYYQZIAAAAASUVORK5CYII="
                  width={50}
                  height={50}
                  alt="Beach"
                />
              </PLinkTile>
            </div>

            <div className="playground light" title="should render default carousel with custom prefix">
              <PCarousel heading="Heading">
                <div>Slide 1</div>
                <div>Slide 2</div>
                <div>Slide 3</div>
              </PCarousel>
            </div>
          </div>
        </PorscheDesignSystemProvider>
      </div>
    </>
  );
};
