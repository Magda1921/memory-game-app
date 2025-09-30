import { Component } from '@angular/core';
import { InputText } from '../../components/input-text/input-text';
import { Select } from '../../components/select/select';
import { FormsModule } from '@angular/forms';
import { Button } from '../../components/button/button';
import { Router } from '@angular/router';
import { PATHS } from 'constants/paths';
import { GameStateService } from '@app/services/game-state';
import { DifficultyEnum } from 'constants/gameDifficulties';

@Component({
  selector: 'start-screen',
  imports: [InputText, Select, FormsModule, Button],
  templateUrl: './start-screen.html',
  styleUrl: './start-screen.scss',
})
export class StartScreen {
  selectedDifficulty = DifficultyEnum.Easy;
  playerName = '';

  constructor(
    private router: Router,
    private gameStateService: GameStateService,
  ) {}

  startGame(): void {
    if (!this.playerName || this.playerName.trim() === '') {
      alert('Please enter your player name!');
      return;
    }
    this.gameStateService.setState({
      name: this.playerName,
      difficulty: this.selectedDifficulty,
      startGame: new Date(),
      foundPairs: 0,
    });
    this.router.navigate([PATHS.app]);
  }
}
