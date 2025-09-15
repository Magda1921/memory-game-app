import { Component } from '@angular/core';
import { InputText } from '../../components/input-text/input-text';
import { Select } from '../../components/select/select';
import { FormsModule } from '@angular/forms';
import { Button } from '../../components/button/button';
import { Router } from '@angular/router';
import { PATHS } from 'constants/paths';

@Component({
  selector: 'start-screen',
  imports: [InputText, Select, FormsModule, Button],
  templateUrl: './start-screen.html',
  styleUrl: './start-screen.scss',
})
export class StartScreen {
  selectedDifficulty = '';
  playerName = '';

  constructor(private router: Router) {}

  startGame(): void {
    if (!this.playerName || this.playerName.trim() === '') {
      alert('Please enter your player name!');
      return;
    }
    this.router.navigate([PATHS.app], {
      queryParams: {
        name: this.playerName,
        difficulty: this.selectedDifficulty,
      },
    });
  }
}
