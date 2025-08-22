import { Component, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-select',
  imports: [FormsModule],
  templateUrl: './select.html',
  styleUrl: './select.scss',
})
export class Select {
  label = input<string>('');
  options = input<{ value: string; label: string }[]>([]);
  selectedValue = input<string>('');

  valueChange = output<string>();

  onChange(value: string) {
    this.valueChange.emit(value);
  }
}
