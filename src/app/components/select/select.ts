import { Component, forwardRef, input, output } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  FormsModule,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { SelectOption } from '@app/types/selectOptions';

@Component({
  selector: 'app-select',
  imports: [FormsModule],
  templateUrl: './select.html',
  styleUrl: './select.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => Select),
      multi: true,
    },
  ],
})
export class Select implements ControlValueAccessor {
  label = input('');
  options = input<SelectOption[]>([]);
  selectedValue = input('');

  selectControl!: FormControl;

  writeValue(value: string): void {}

  registerOnChange(fn: (value: string) => void): void {}

  registerOnTouched(fn: () => void): void {}

  valueChange = output<string>();
  ngOnInit(): void {
    this.selectControl = new FormControl(this.selectedValue);
  }

  onChange(value: string) {
    this.valueChange.emit(value);
  }
}
