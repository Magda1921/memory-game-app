import { Component, forwardRef, input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'input-text',
  imports: [],
  templateUrl: './input-text.html',
  styleUrl: './input-text.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputText),
      multi: true,
    },
  ],
})
export class InputText implements ControlValueAccessor {
  id = input.required<string>();
  name = input.required<string>();
  placeholder = input<string>('');
  label = input<string>('');

  writeValue(value: string): void {}

  registerOnChange(fn: (value: string) => void): void {}

  registerOnTouched(fn: () => void): void {}
}
