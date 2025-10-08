import { Component, input, Input, output } from '@angular/core';
import { Button } from '@app/components/button/button';
import { Player, ScoreService } from '@app/services/score-service';

@Component({
  selector: 'end-game-dialog',
  imports: [Button],
  templateUrl: './end-game-dialog.html',
  styleUrl: './end-game-dialog.scss',
})
export class EndGameDialog {
  playerName = input.required<string>();
  points = input.required<number>();
  time = input.required<string>();
  showDialog = input<boolean>(false);
  scores: Player[] = [];

  closeDialog = output<void>();

  constructor(private scoreService: ScoreService) {}

  ngOnInit() {
    this.scores = this.scoreService
      .getScores()
      .sort((a, b) => b.points - a.points)
      .slice(0, 10);
  }

  close() {
    this.closeDialog.emit();
  }
}
