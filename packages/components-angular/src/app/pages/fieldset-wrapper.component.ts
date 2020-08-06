import { Component } from '@angular/core';

@Component({
  selector: 'page-fieldset-wrapper',
  template: `
    <div class="playground light" title="should render with label">
      <p-fieldset-wrapper [label]="'Some label'"></p-fieldset-wrapper>
    </div>

    <div class="playground light" title="should render with label and text-field-wrapper with defined spacing">
      <p-fieldset-wrapper [label]="'Some label'">
        <p-text-field-wrapper [label]="'Some label'">
          <input type="text" name="some-name"/>
        </p-text-field-wrapper>
      </p-fieldset-wrapper>
    </div>
  `
})
export class FieldsetWrapperComponent {
}
