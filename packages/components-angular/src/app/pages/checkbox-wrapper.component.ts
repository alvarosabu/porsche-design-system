/* Auto Generated File */
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'page-checkbox-wrapper',
  template: `
    <div class="playground light" title="should render with label">
      <p-checkbox-wrapper [label]="'Some label'">
        <input [type]="'checkbox'" [name]="'some-name'" />
      </p-checkbox-wrapper>
      <p-checkbox-wrapper [label]="'Some label'">
        <input [type]="'checkbox'" [name]="'some-name'" checked />
      </p-checkbox-wrapper>
    </div>

    <div class="playground light" title="should render without label">
      <p-checkbox-wrapper [label]="'Some label'" [hideLabel]="true">
        <input [type]="'checkbox'" [name]="'some-name'" />
      </p-checkbox-wrapper>
      <p-checkbox-wrapper [label]="'Some label'" [hideLabel]="true">
        <input [type]="'checkbox'" [name]="'some-name'" checked />
      </p-checkbox-wrapper>
    </div>

    <div class="playground light" title="should render with responsive label">
      <p-checkbox-wrapper [label]="'Some label'" [hideLabel]="{ base: true, xs: false, s: true, m: false, l: true, xl: false }">
        <input [type]="'checkbox'" [name]="'some-name'" />
      </p-checkbox-wrapper>
      <p-checkbox-wrapper [label]="'Some label'" [hideLabel]="{ base: true, xs: false, s: true, m: false, l: true, xl: false }">
        <input [type]="'checkbox'" [name]="'some-name'" checked />
      </p-checkbox-wrapper>
    </div>

    <div class="playground light" title="should render in indeterminate mode">
      <p-checkbox-wrapper [label]="'Some label'">
        <input [type]="'checkbox'" [name]="'some-name'" class="set-to-indeterminate" />
      </p-checkbox-wrapper>
      <p-checkbox-wrapper [label]="'Some label'">
        <input [type]="'checkbox'" [name]="'some-name'" checked class="set-to-indeterminate" />
      </p-checkbox-wrapper>
    </div>

    <div class="playground light" title="should render in required state">
      <p-checkbox-wrapper [label]="'Some label'">
        <input [type]="'checkbox'" [name]="'some-name'" required />
      </p-checkbox-wrapper>
      <p-checkbox-wrapper [label]="'This is a very insanely super long label across multiple lines'">
        <input [type]="'checkbox'" [name]="'some-name'" required />
      </p-checkbox-wrapper>
      <p-checkbox-wrapper [label]="'Some label'">
        <input [type]="'checkbox'" [name]="'some-name'" required disabled />
      </p-checkbox-wrapper>
      <p-checkbox-wrapper [label]="'Some label'">
        <input [type]="'checkbox'" [name]="'some-name'" required checked />
      </p-checkbox-wrapper>
      <p-checkbox-wrapper [label]="'Some label'">
        <input [type]="'checkbox'" [name]="'some-name'" required checked disabled />
      </p-checkbox-wrapper>
    </div>

    <div class="playground light" title="should render in disabled state">
      <p-checkbox-wrapper [label]="'Some label'">
        <input [type]="'checkbox'" [name]="'some-name'" disabled />
      </p-checkbox-wrapper>
      <p-checkbox-wrapper [label]="'Some label'">
        <input [type]="'checkbox'" [name]="'some-name'" checked disabled />
      </p-checkbox-wrapper>
    </div>

    <div class="playground light" title="should render with success state and success message">
      <p-checkbox-wrapper [label]="'Some label'" [state]="'success'" [message]="'Some success message.'">
        <input [type]="'checkbox'" [name]="'some-name'" />
      </p-checkbox-wrapper>
      <p-checkbox-wrapper [label]="'Some label'" [state]="'success'" [message]="'Some success message.'">
        <input [type]="'checkbox'" [name]="'some-name'" checked />
      </p-checkbox-wrapper>
    </div>

    <div class="playground light" title="should render with success state and no success message">
      <p-checkbox-wrapper [label]="'Some label'" [state]="'success'">
        <input [type]="'checkbox'" [name]="'some-name'" />
      </p-checkbox-wrapper>
      <p-checkbox-wrapper [label]="'Some label'" [state]="'success'">
        <input [type]="'checkbox'" [name]="'some-name'" checked />
      </p-checkbox-wrapper>
    </div>

    <div class="playground light" title="should render with error state and error message">
      <p-checkbox-wrapper [label]="'Some label'" [state]="'error'" [message]="'Some error validation message.'">
        <input [type]="'checkbox'" [name]="'some-name'" />
      </p-checkbox-wrapper>
      <p-checkbox-wrapper [label]="'Some label'" [state]="'error'" [message]="'Some error validation message.'">
        <input [type]="'checkbox'" [name]="'some-name'" checked />
      </p-checkbox-wrapper>
    </div>

    <div class="playground light" title="should render with error state but without error message">
      <p-checkbox-wrapper [label]="'Some label'" [state]="'error'">
        <input [type]="'checkbox'" [name]="'some-name'" />
      </p-checkbox-wrapper>
      <p-checkbox-wrapper [label]="'Some label'" [state]="'error'">
        <input [type]="'checkbox'" [name]="'some-name'" checked />
      </p-checkbox-wrapper>
    </div>

    <div class="playground light" title="should render with slotted content with error state and message">
      <p-checkbox-wrapper [state]="'error'">
        <span slot="label">Some label with a <a [href]="'https://designsystem.porsche.com'">link</a>.</span>
        <input [type]="'checkbox'" [name]="'some-name'" />
        <span slot="message">Some error message with a <a [href]="'https://designsystem.porsche.com'">link</a>.</span>
      </p-checkbox-wrapper>
    </div>

    <div class="playground light" title="should render with multiline label">
      <p-checkbox-wrapper [label]="'Lorem ipsum dolor sit amet, consetetur sadipscing'" style="width: 240px">
        <input [type]="'checkbox'" [name]="'some-name'" />
      </p-checkbox-wrapper>
      <p-checkbox-wrapper
        [state]="'error'"
        [label]="'Lorem ipsum dolor sit amet, consetetur sadipscing'"
        [message]="'Lorem ipsum dolor sit amet, consetetur sadipscing'"
        style="width: 240px"
      >
        <input [type]="'checkbox'" [name]="'some-name'" />
      </p-checkbox-wrapper>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxWrapperComponent implements OnInit {
  ngOnInit() {
    document.body.querySelectorAll('.set-to-indeterminate').forEach((checkbox) => {
      (checkbox as any).indeterminate = true;
    });
  }
}
