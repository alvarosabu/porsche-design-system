/* Auto Generated File */
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'page-overview',
  styles: [
    `
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
    `,
  ],
  template: `
    <div class="root" style="display: flex">
      <div style="flex: 1">
        <div class="playground light" title="should render default headline">
          <p-headline>Default Components</p-headline>
        </div>

        <div class="playground light" title="should render default banner">
          <p-banner>
            <span slot="title">Default banner component</span>
            <span slot="description">Some slotted banner description</span>
          </p-banner>
        </div>

        <div class="playground light" title="should render default inline-notification">
          <p-inline-notification [heading]="'Some heading'" [description]="'Some description'"></p-inline-notification>
        </div>

        <div class="playground light" title="should render default popover">
          <p-popover [direction]="'right'">Some popover content</p-popover>
        </div>

        <div class="playground light" title="should render default divider">
          <p-divider></p-divider>
        </div>

        <div class="playground light" title="should render default button">
          <p-button>Some label</p-button>
        </div>

        <div class="playground light" title="should render default button-group">
          <p-button-group>
            <p-button>Some label</p-button>
            <p-button>Some label</p-button>
          </p-button-group>
        </div>

        <div class="playground light" title="should render default button-pure">
          <p-button-pure>Some label</p-button-pure>
        </div>

        <div class="playground light" title="should render default checkbox-wrapper">
          <p-checkbox-wrapper [label]="'Some label'">
            <input [type]="'checkbox'" />
          </p-checkbox-wrapper>
        </div>

        <div class="playground light" title="should render default radio-button-wrapper">
          <p-radio-button-wrapper [label]="'Some label'">
            <input [type]="'radio'" />
          </p-radio-button-wrapper>
        </div>

        <div class="playground light" title="should render default select-wrapper">
          <p-select-wrapper [label]="'Some label'">
            <select>
              <option [value]="'a'">Option A</option>
              <option [value]="'b'">Option B</option>
              <option [value]="'c'">Option C</option>
            </select>
          </p-select-wrapper>
        </div>

        <div class="playground light" title="should render default text-field-wrapper">
          <p-text-field-wrapper [label]="'Some label'">
            <input [type]="'text'" />
          </p-text-field-wrapper>
        </div>

        <div class="playground light" title="should render default textarea-wrapper">
          <p-textarea-wrapper [label]="'Some label'">
            <textarea></textarea>
          </p-textarea-wrapper>
        </div>

        <div class="playground light" title="should render default fieldset-wrapper">
          <p-fieldset-wrapper [label]="'Some label'"></p-fieldset-wrapper>
        </div>

        <div class="playground light" title="should render default content-wrapper">
          <p-content-wrapper>
            <p>Some content</p>
          </p-content-wrapper>
        </div>

        <div class="playground light" title="should render default text">
          <p-text>The quick brown fox jumps over the lazy dog</p-text>
        </div>

        <div class="playground light" title="should render default text-list">
          <p-text-list>
            <p-text-list-item>The quick brown fox jumps over the lazy dog</p-text-list-item>
          </p-text-list>
        </div>

        <div class="playground light" title="should render default icon">
          <p-icon></p-icon>
        </div>

        <div class="playground light" title="should render default link">
          <p-link [href]="'https://www.porsche.com'">Some label</p-link>
        </div>

        <div class="playground light" title="should render default link-pure">
          <p-link-pure [href]="'https://www.porsche.com'">Some label</p-link-pure>
        </div>

        <div class="playground light" title="should render default link-social">
          <p-link-social [href]="'https://www.porsche.com'" [icon]="'logo-facebook'">Some label</p-link-social>
        </div>

        <div class="playground light" title="should render default marque">
          <p-marque></p-marque>
        </div>

        <div class="playground light" title="should render default pagination">
          <p-pagination [totalItemsCount]="500" [itemsPerPage]="25" [activePage]="1"></p-pagination>
        </div>

        <div class="playground light" title="should render default table">
          <p-table>
            <p-table-head>
              <p-table-head-row>
                <p-table-head-cell>Column 1</p-table-head-cell>
                <p-table-head-cell>Column 2</p-table-head-cell>
              </p-table-head-row>
            </p-table-head>
            <p-table-body>
              <p-table-row>
                <p-table-cell>Cell 1</p-table-cell>
                <p-table-cell>Cell 2</p-table-cell>
              </p-table-row>
            </p-table-body>
          </p-table>
        </div>

        <div class="playground light" title="should render default tabs">
          <p-tabs [activeTabIndex]="0">
            <p-tabs-item [label]="'Tab1'">Content 1</p-tabs-item>
            <p-tabs-item [label]="'Tab2'">Content 2</p-tabs-item>
            <p-tabs-item [label]="'Tab3'">Content 3</p-tabs-item>
          </p-tabs>
        </div>

        <div class="playground light" title="should render default tabs-bar">
          <p-tabs-bar [activeTabIndex]="0">
            <button>Tab1</button>
            <button>Tab2</button>
            <button>Tab3</button>
          </p-tabs-bar>
        </div>

        <div class="playground light" title="should render default accordion">
          <p-accordion [heading]="'Some accordion heading'">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
            dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
          </p-accordion>
        </div>

        <div class="playground light" title="should render default spinner">
          <p-spinner></p-spinner>
        </div>

        <div class="playground light" title="should render default flex">
          <p-flex>
            <p-flex-item><p>1</p></p-flex-item>
            <p-flex-item><p>2</p></p-flex-item>
          </p-flex>
        </div>

        <div class="playground light" title="should render default grid">
          <p-grid>
            <p-grid-item [size]="6"><p>1</p></p-grid-item>
            <p-grid-item [size]="6"><p>2</p></p-grid-item>
          </p-grid>
        </div>

        <div class="playground light" title="should render default tag">
          <p-tag>Some Tag</p-tag>
        </div>

        <div class="playground light" title="should render default tag-dismissible">
          <p-tag-dismissible>Some Tag</p-tag-dismissible>
        </div>

        <div class="playground light" title="should render default segmented-control">
          <p-segmented-control [value]="'s'">
            <p-segmented-control-item [value]="'s'">S</p-segmented-control-item>
            <p-segmented-control-item [value]="'m'">M</p-segmented-control-item>
            <p-segmented-control-item [value]="'l'">L</p-segmented-control-item>
            <p-segmented-control-item [value]="'xl'">XL</p-segmented-control-item>
          </p-segmented-control>
        </div>

        <div class="playground light" title="should render default switch">
          <p-switch>Some label</p-switch>
        </div>

        <div class="playground light" title="should render default stepper-horizontal">
          <p-stepper-horizontal>
            <p-stepper-horizontal-item [state]="'current'">Step 1</p-stepper-horizontal-item>
            <p-stepper-horizontal-item>Step 2</p-stepper-horizontal-item>
            <p-stepper-horizontal-item>Step 3</p-stepper-horizontal-item>
            <p-stepper-horizontal-item>Step 4</p-stepper-horizontal-item>
            <p-stepper-horizontal-item>Step 5</p-stepper-horizontal-item>
            <p-stepper-horizontal-item>Step 6</p-stepper-horizontal-item>
            <p-stepper-horizontal-item>Step 7</p-stepper-horizontal-item>
            <p-stepper-horizontal-item>Step 8</p-stepper-horizontal-item>
            <p-stepper-horizontal-item>Step 9</p-stepper-horizontal-item>
          </p-stepper-horizontal>
        </div>

        <div class="playground light" title="should render default scroller">
          <p-scroller>
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
          </p-scroller>
        </div>

        <div class="playground light" title="should render default link-tile">
          <p-link-tile [href]="'#'" [label]="'Some Label'" [description]="'Default'">
            <img
              [src]="'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyAQMAAAAk8RryAAAABlBMVEUAAAD2vP9xXLiUAAAAAXRSTlMAQObYZgAAABxJREFUGNNjYOBgYGBhYKAZ/R8MDsD4Q5amkz8ASp4PtTYYQZIAAAAASUVORK5CYII='"
              [width]="50"
              [height]="50"
              [alt]="'Beach'"
            />
          </p-link-tile>
        </div>

        <div class="playground light" title="should render default carousel">
          <p-carousel [heading]="'Heading'">
            <div>Slide 1</div>
            <div>Slide 2</div>
            <div>Slide 3</div>
          </p-carousel>
        </div>
      </div>

      <div style="flex: 1">
        <div class="playground light" title="should render default headline with custom prefix">
          <my-prefix-p-headline p-headline>Prefixed Components</my-prefix-p-headline>
        </div>

        <div class="playground light" title="should render default banner with custom prefix">
          <my-prefix-p-banner p-banner>
            <span slot="title">Prefixed banner component</span>
            <span slot="description">Some slotted banner description</span>
          </my-prefix-p-banner>
        </div>

        <div class="playground light" title="should render default inline-notification with custom prefix">
          <my-prefix-p-inline-notification p-inline-notification
            [heading]="'Some heading'"
            [description]="'Some description'"
          ></my-prefix-p-inline-notification>
        </div>

        <div class="playground light" title="should render default popover with custom prefix">
          <my-prefix-p-popover p-popover [direction]="'right'">Some popover content</my-prefix-p-popover>
        </div>

        <div class="playground light" title="should render default divider with custom prefix">
          <my-prefix-p-divider p-divider></my-prefix-p-divider>
        </div>

        <div class="playground light" title="should render default button with custom prefix">
          <my-prefix-p-button p-button>Some label</my-prefix-p-button>
        </div>

        <div class="playground light" title="should render default button-group with custom prefix">
          <my-prefix-p-button-group p-button-group>
            <my-prefix-p-button p-button>Some label</my-prefix-p-button>
            <my-prefix-p-button p-button>Some label</my-prefix-p-button>
          </my-prefix-p-button-group>
        </div>

        <div class="playground light" title="should render default button-pure with custom prefix">
          <my-prefix-p-button-pure p-button-pure>Some label</my-prefix-p-button-pure>
        </div>

        <div class="playground light" title="should render default checkbox-wrapper with custom prefix">
          <my-prefix-p-checkbox-wrapper p-checkbox-wrapper [label]="'Some label'">
            <input [type]="'checkbox'" />
          </my-prefix-p-checkbox-wrapper>
        </div>

        <div class="playground light" title="should render default radio-button-wrapper with custom prefix">
          <my-prefix-p-radio-button-wrapper p-radio-button-wrapper [label]="'Some label'">
            <input [type]="'radio'" />
          </my-prefix-p-radio-button-wrapper>
        </div>

        <div class="playground light" title="should render default select-wrapper with custom prefix">
          <my-prefix-p-select-wrapper p-select-wrapper [label]="'Some label'">
            <select>
              <option [value]="'a'">Option A</option>
              <option [value]="'b'">Option B</option>
              <option [value]="'c'">Option C</option>
            </select>
          </my-prefix-p-select-wrapper>
        </div>

        <div class="playground light" title="should render default text-field-wrapper with custom prefix">
          <my-prefix-p-text-field-wrapper p-text-field-wrapper [label]="'Some label'">
            <input [type]="'text'" />
          </my-prefix-p-text-field-wrapper>
        </div>

        <div class="playground light" title="should render default textarea-wrapper with custom prefix">
          <my-prefix-p-textarea-wrapper p-textarea-wrapper [label]="'Some label'">
            <textarea></textarea>
          </my-prefix-p-textarea-wrapper>
        </div>

        <div class="playground light" title="should render default fieldset-wrapper with custom prefix">
          <my-prefix-p-fieldset-wrapper p-fieldset-wrapper [label]="'Some label'"></my-prefix-p-fieldset-wrapper>
        </div>

        <div class="playground light" title="should render default content-wrapper with custom prefix">
          <my-prefix-p-content-wrapper p-content-wrapper>
            <p>Some content</p>
          </my-prefix-p-content-wrapper>
        </div>

        <div class="playground light" title="should render default text with custom prefix">
          <my-prefix-p-text p-text>The quick brown fox jumps over the lazy dog</my-prefix-p-text>
        </div>

        <div class="playground light" title="should render default text-list with custom prefix">
          <my-prefix-p-text-list p-text-list>
            <my-prefix-p-text-list-item p-text-list-item>The quick brown fox jumps over the lazy dog</my-prefix-p-text-list-item>
          </my-prefix-p-text-list>
        </div>

        <div class="playground light" title="should render default icon with custom prefix">
          <my-prefix-p-icon p-icon></my-prefix-p-icon>
        </div>

        <div class="playground light" title="should render default link with custom prefix">
          <my-prefix-p-link p-link [href]="'https://www.porsche.com'">Some label</my-prefix-p-link>
        </div>

        <div class="playground light" title="should render default link-pure with custom prefix">
          <my-prefix-p-link-pure p-link-pure [href]="'https://www.porsche.com'">Some label</my-prefix-p-link-pure>
        </div>

        <div class="playground light" title="should render default link-social with custom prefix">
          <my-prefix-p-link-social p-link-social [href]="'https://www.porsche.com'" [icon]="'logo-facebook'">Some label</my-prefix-p-link-social>
        </div>

        <div class="playground light" title="should render default marque with custom prefix">
          <my-prefix-p-marque p-marque></my-prefix-p-marque>
        </div>

        <div class="playground light" title="should render default pagination with custom prefix">
          <my-prefix-p-pagination p-pagination [totalItemsCount]="500" [itemsPerPage]="25" [activePage]="1"></my-prefix-p-pagination>
        </div>

        <div class="playground light" title="should render default table with custom prefix">
          <my-prefix-p-table p-table>
            <my-prefix-p-table-head p-table-head>
              <my-prefix-p-table-head-row p-table-head-row>
                <my-prefix-p-table-head-cell p-table-head-cell>Column 1</my-prefix-p-table-head-cell>
                <my-prefix-p-table-head-cell p-table-head-cell>Column 2</my-prefix-p-table-head-cell>
              </my-prefix-p-table-head-row>
            </my-prefix-p-table-head>
            <my-prefix-p-table-body p-table-body>
              <my-prefix-p-table-row p-table-row>
                <my-prefix-p-table-cell p-table-cell>Cell 1</my-prefix-p-table-cell>
                <my-prefix-p-table-cell p-table-cell>Cell 2</my-prefix-p-table-cell>
              </my-prefix-p-table-row>
            </my-prefix-p-table-body>
          </my-prefix-p-table>
        </div>

        <div class="playground light" title="should render default tabs with custom prefix">
          <my-prefix-p-tabs p-tabs>
            <my-prefix-p-tabs-item p-tabs-item [label]="'Tab1'">Content 1</my-prefix-p-tabs-item>
            <my-prefix-p-tabs-item p-tabs-item [label]="'Tab2'">Content 2</my-prefix-p-tabs-item>
            <my-prefix-p-tabs-item p-tabs-item [label]="'Tab3'">Content 3</my-prefix-p-tabs-item>
          </my-prefix-p-tabs>
        </div>

        <div class="playground light" title="should render default tabs-bar with custom prefix">
          <my-prefix-p-tabs-bar p-tabs-bar [activeTabIndex]="0">
            <button>Tab1</button>
            <button>Tab2</button>
            <button>Tab3</button>
          </my-prefix-p-tabs-bar>
        </div>

        <div class="playground light" title="should render default accordion with custom prefix">
          <my-prefix-p-accordion p-accordion [heading]="'Some accordion heading'">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
            dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
          </my-prefix-p-accordion>
        </div>

        <div class="playground light" title="should render default spinner with custom prefix">
          <my-prefix-p-spinner p-spinner></my-prefix-p-spinner>
        </div>

        <div class="playground light" title="should render default flex with custom prefix">
          <my-prefix-p-flex p-flex>
            <my-prefix-p-flex-item p-flex-item><p>1</p></my-prefix-p-flex-item>
            <my-prefix-p-flex-item p-flex-item><p>2</p></my-prefix-p-flex-item>
          </my-prefix-p-flex>
        </div>

        <div class="playground light" title="should render default grid with custom prefix">
          <my-prefix-p-grid p-grid>
            <my-prefix-p-grid-item p-grid-item [size]="6"><p>1</p></my-prefix-p-grid-item>
            <my-prefix-p-grid-item p-grid-item [size]="6"><p>2</p></my-prefix-p-grid-item>
          </my-prefix-p-grid>
        </div>

        <div class="playground light" title="should render default tag with custom prefix">
          <my-prefix-p-tag p-tag>Some Tag</my-prefix-p-tag>
        </div>

        <div class="playground light" title="should render default tag-dismissible with custom prefix">
          <my-prefix-p-tag-dismissible p-tag-dismissible>Some Tag</my-prefix-p-tag-dismissible>
        </div>

        <div class="playground light" title="should render default segmented-control with custom prefix">
          <my-prefix-p-segmented-control p-segmented-control [value]="'s'">
            <my-prefix-p-segmented-control-item p-segmented-control-item [value]="'s'">S</my-prefix-p-segmented-control-item>
            <my-prefix-p-segmented-control-item p-segmented-control-item [value]="'m'">M</my-prefix-p-segmented-control-item>
            <my-prefix-p-segmented-control-item p-segmented-control-item [value]="'l'">L</my-prefix-p-segmented-control-item>
            <my-prefix-p-segmented-control-item p-segmented-control-item [value]="'xl'">XL</my-prefix-p-segmented-control-item>
          </my-prefix-p-segmented-control>
        </div>

        <div class="playground light" title="should render default switch with custom prefix">
          <my-prefix-p-switch p-switch>Some label</my-prefix-p-switch>
        </div>

        <div class="playground light" title="should render default stepper-horizontal with custom prefix">
          <my-prefix-p-stepper-horizontal p-stepper-horizontal>
            <my-prefix-p-stepper-horizontal-item p-stepper-horizontal-item [state]="'current'">Step 1</my-prefix-p-stepper-horizontal-item>
            <my-prefix-p-stepper-horizontal-item p-stepper-horizontal-item>Step 2</my-prefix-p-stepper-horizontal-item>
            <my-prefix-p-stepper-horizontal-item p-stepper-horizontal-item>Step 3</my-prefix-p-stepper-horizontal-item>
            <my-prefix-p-stepper-horizontal-item p-stepper-horizontal-item>Step 4</my-prefix-p-stepper-horizontal-item>
            <my-prefix-p-stepper-horizontal-item p-stepper-horizontal-item>Step 5</my-prefix-p-stepper-horizontal-item>
            <my-prefix-p-stepper-horizontal-item p-stepper-horizontal-item>Step 6</my-prefix-p-stepper-horizontal-item>
            <my-prefix-p-stepper-horizontal-item p-stepper-horizontal-item>Step 7</my-prefix-p-stepper-horizontal-item>
            <my-prefix-p-stepper-horizontal-item p-stepper-horizontal-item>Step 8</my-prefix-p-stepper-horizontal-item>
            <my-prefix-p-stepper-horizontal-item p-stepper-horizontal-item>Step 9</my-prefix-p-stepper-horizontal-item>
          </my-prefix-p-stepper-horizontal>
        </div>

        <div class="playground light" title="should render default scroller with custom prefix">
          <my-prefix-p-scroller p-scroller>
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
          </my-prefix-p-scroller>
        </div>

        <div class="playground light" title="should render default link-tile with custom prefix">
          <my-prefix-p-link-tile p-link-tile [href]="'#'" [label]="'Some Label'" [description]="'Default'">
            <img
              [src]="'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyAQMAAAAk8RryAAAABlBMVEUAAAD2vP9xXLiUAAAAAXRSTlMAQObYZgAAABxJREFUGNNjYOBgYGBhYKAZ/R8MDsD4Q5amkz8ASp4PtTYYQZIAAAAASUVORK5CYII='"
              [width]="50"
              [height]="50"
              [alt]="'Beach'"
            />
          </my-prefix-p-link-tile>
        </div>

        <div class="playground light" title="should render default carousel with custom prefix">
          <my-prefix-p-carousel p-carousel [heading]="'Heading'">
            <div>Slide 1</div>
            <div>Slide 2</div>
            <div>Slide 3</div>
          </my-prefix-p-carousel>
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OverviewComponent {}
