import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [CommonModule],
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class Button {
  variantClass = input.required<string>();
  label = input<string>('');

  buttonClick = output<void>();

  onClick(): void {
    this.buttonClick.emit();
  }
}
