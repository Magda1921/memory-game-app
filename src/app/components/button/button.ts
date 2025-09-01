import { CommonModule } from '@angular/common';
import { Component, input, output, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, RouterModule, MatIconModule],
  templateUrl: './button.html',
  styleUrls: ['./button.scss'],
})
export class Button {
  variantClass = input.required<string>();
  label = input('');
  disabled = input(false);
  href = input(null);
  icon = input(null);

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
