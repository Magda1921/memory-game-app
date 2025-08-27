import { CommonModule } from '@angular/common';
import { Component, input, output, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './button.html',
  styleUrls: ['./button.scss'],
})
export class Button {
  variantClass = input.required<string>();
  label = input<string>('');
  disabled = input<boolean>(false);
  href = input<string | null>(null);

  buttonClick = output<void>();

  private router = inject(Router);

  onClick(): void {
    if (this.href()) {
      this.router.navigateByUrl(this.href()!);
    } else {
      this.buttonClick.emit();
    }
  }
}
