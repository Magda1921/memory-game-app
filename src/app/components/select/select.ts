import { Component, input, output } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { SelectOption } from '@app/types/selectOptions';

@Component({
  selector: 'app-select',
  imports: [FormsModule],
  templateUrl: './select.html',
  styleUrl: './select.scss',
})
export class Select {
  label = input('');
  options = input<SelectOption[]>([]);
  selectedValue = input('');

  selectControl!: FormControl;

  valueChange = output<string>();
  ngOnInit(): void {
    this.selectControl = new FormControl(this.selectedValue);
  }

  onChange(value: string) {
    this.valueChange.emit(value);
  }
}
