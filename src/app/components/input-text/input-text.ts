import { Component, input } from '@angular/core';

@Component({
  selector: 'input-text',
  imports: [],
  templateUrl: './input-text.html',
  styleUrl: './input-text.scss',
})
export class InputText {
  id = input.required<string>();
  name = input.required<string>();
  placeholder = input<string>('');
  label = input<string>('');
}
