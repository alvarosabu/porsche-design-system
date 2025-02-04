/* Auto Generated File */
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'page-tag',
  styles: [
    `
      .playground {
        margin-bottom: -0.5rem;
      }
    
      p-tag {
        margin-bottom: 0.5rem;
      }
    
      p-tag:not(:last-child) {
        margin-right: 0.5rem;
      }
    `,
  ],
  template: `
    <div class="playground light" title="should show different background colors on light background">
      <p-tag>Default</p-tag>
      <p-tag [color]="'background-default'">Color background-default</p-tag>
      <p-tag [color]="'background-surface'">Color background-surface</p-tag>
      <p-tag [color]="'neutral-contrast-high'">Color neutral-contrast-high</p-tag>
      <p-tag [color]="'notification-neutral'">Color notification-neutral</p-tag>
      <p-tag [color]="'notification-success'">Color notification-success</p-tag>
      <p-tag [color]="'notification-error'">Color notification-error</p-tag>
      <p-tag [color]="'notification-warning'">Color notification-warning</p-tag>
    </div>

    <div class="playground light surface" title="should show different background colors on light surface background">
      <p-tag>Default</p-tag>
      <p-tag [color]="'background-default'">Color background-default</p-tag>
      <p-tag [color]="'background-surface'">Color background-surface</p-tag>
      <p-tag [color]="'neutral-contrast-high'">Color neutral-contrast-high</p-tag>
      <p-tag [color]="'notification-neutral'">Color notification-neutral</p-tag>
      <p-tag [color]="'notification-success'">Color notification-success</p-tag>
      <p-tag [color]="'notification-error'">Color notification-error</p-tag>
      <p-tag [color]="'notification-warning'">Color notification-warning</p-tag>
    </div>

    <div class="playground dark" title="should show different background colors on dark background">
      <p-tag [theme]="'dark'">Default</p-tag>
      <p-tag [theme]="'dark'" [color]="'background-default'">Color background-default</p-tag>
      <p-tag [theme]="'dark'" [color]="'background-surface'">Color background-surface</p-tag>
      <p-tag [theme]="'dark'" [color]="'neutral-contrast-high'">Color neutral-contrast-high</p-tag>
      <p-tag [theme]="'dark'" [color]="'notification-neutral'">Color notification-neutral</p-tag>
      <p-tag [theme]="'dark'" [color]="'notification-success'">Color notification-success</p-tag>
      <p-tag [theme]="'dark'" [color]="'notification-error'">Color notification-error</p-tag>
      <p-tag [theme]="'dark'" [color]="'notification-warning'">Color notification-warning</p-tag>
    </div>

    <div class="playground dark surface" title="should show different background colors on dark surface background">
      <p-tag [theme]="'dark'">Default</p-tag>
      <p-tag [theme]="'dark'" [color]="'background-default'">Color background-default</p-tag>
      <p-tag [theme]="'dark'" [color]="'background-surface'">Color background-surface</p-tag>
      <p-tag [theme]="'dark'" [color]="'neutral-contrast-high'">Color neutral-contrast-high</p-tag>
      <p-tag [theme]="'dark'" [color]="'notification-neutral'">Color notification-neutral</p-tag>
      <p-tag [theme]="'dark'" [color]="'notification-success'">Color notification-success</p-tag>
      <p-tag [theme]="'dark'" [color]="'notification-error'">Color notification-error</p-tag>
      <p-tag [theme]="'dark'" [color]="'notification-warning'">Color notification-warning</p-tag>
    </div>

    <div class="playground light" title="should show different background colors and icons on light background">
      <p-tag [icon]="'car'" [color]="'background-default'">Color background-default</p-tag>
      <p-tag [icon]="'highway'" [color]="'background-surface'">Color background-surface</p-tag>
      <p-tag [iconSource]="'./assets/icon-custom-kaixin.svg'" [color]="'background-surface'"> Color background-surface </p-tag>
    </div>

    <div class="playground dark" title="should show different background colors and icons on dark background">
      <p-tag [theme]="'dark'" [icon]="'car'" [color]="'background-default'">Color background-default</p-tag>
      <p-tag [theme]="'dark'" [icon]="'highway'" [color]="'background-surface'">Color background-surface</p-tag>
      <p-tag [theme]="'dark'" [iconSource]="'./assets/icon-custom-kaixin.svg'" [color]="'background-surface'">
        Color background-surface
      </p-tag>
    </div>

    <div class="playground light" title="should show different background colors with link on light background">
      <p-tag [color]="'background-default'"><a [href]="'#'">Color background-default link</a></p-tag>
      <p-tag [color]="'background-surface'"><a [href]="'#'">Color background-surface link</a></p-tag>
      <p-tag [icon]="'car'" [color]="'background-default'"><a [href]="'#'">Color background-default link</a></p-tag>
      <p-tag [icon]="'highway'" [color]="'background-surface'"><a [href]="'#'">Color background-surface link</a></p-tag>
      <p-tag [iconSource]="'./assets/icon-custom-kaixin.svg'" [color]="'background-default'">
        <a [href]="'#'">Color background-default link</a>
      </p-tag>
    </div>

    <div class="playground dark" title="should show different background colors with link on dark background">
      <p-tag [theme]="'dark'" [color]="'background-default'"><a [href]="'#'">Color background-default link</a></p-tag>
      <p-tag [theme]="'dark'" [color]="'background-surface'"><a [href]="'#'">Color background-surface link</a></p-tag>
      <p-tag [theme]="'dark'" [icon]="'car'" [color]="'background-default'"><a [href]="'#'">Color background-default link</a></p-tag>
      <p-tag [theme]="'dark'" [icon]="'highway'" [color]="'background-surface'">
        <a [href]="'#'">Color background-surface link</a>
      </p-tag>
      <p-tag [theme]="'dark'" [iconSource]="'./assets/icon-custom-kaixin.svg'" [color]="'background-default'">
        <a [href]="'#'">Color background-default link</a>
      </p-tag>
    </div>

    <div class="playground light" title="should show different background colors with button on light background">
      <p-tag [color]="'background-default'"><button>Color background-default button</button></p-tag>
      <p-tag [color]="'background-surface'"><button>Color background-surface button</button></p-tag>
      <p-tag [icon]="'car'" [color]="'background-default'"><button>Color background-default button</button></p-tag>
      <p-tag [icon]="'highway'" [color]="'background-surface'">
        <button>Color background-surface button</button>
      </p-tag>
      <p-tag [iconSource]="'./assets/icon-custom-kaixin.svg'" [color]="'background-default'">
        <button>Color background-default button</button>
      </p-tag>
    </div>

    <div class="playground dark" title="should show different background colors with button on dark background">
      <p-tag [theme]="'dark'" [color]="'background-default'"><button>Color background-default button</button></p-tag>
      <p-tag [theme]="'dark'" [color]="'background-surface'"><button>Color background-surface button</button></p-tag>
      <p-tag [theme]="'dark'" [icon]="'car'" [color]="'background-default'"><button>Color background-default button</button></p-tag>
      <p-tag [theme]="'dark'" [icon]="'highway'" [color]="'background-surface'">
        <button>Color background-surface button</button>
      </p-tag>
      <p-tag [theme]="'dark'" [iconSource]="'./assets/icon-custom-kaixin.svg'" [color]="'background-default'">
        <button>Color background-default button</button>
      </p-tag>
    </div>

    <div class="playground light" title="should apply custom styles for dedicated slotted content on light background">
      <p-tag> Some <b>bold</b>, <strong>strong</strong>, <em>emphasized</em> and <i>italic</i> text </p-tag>
      <p-tag>
        Default <br />
        with line break
      </p-tag>
    </div>

    <div class="playground light" title="should show different multiline tags on light background">
      <div style="width: 100px; overflow: auto; border: 1px solid deeppink">
        <p-tag [color]="'neutral-contrast-high'">Text that is very long</p-tag>
        <p-tag [color]="'neutral-contrast-high'" [icon]="'car'">Text with icon that is very long</p-tag>
        <p-tag [color]="'notification-success'" [icon]="'car'">
          <a [href]="'#'">Link with icon that is very long</a>
        </p-tag>
        <p-tag [color]="'notification-success'" [icon]="'car'">
          <button>Button with icon that is very long</button>
        </p-tag>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TagComponent {}
