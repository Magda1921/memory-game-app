import { Component } from '@angular/core';
import { MemoryCardGrid } from '../memory-card-grid/memory-card-grid';
import { ActivatedRoute } from '@angular/router';
import { difficulties, DifficultyEnum } from 'constants/gameDifficulties';
import { GameStateService } from '@app/services/game-state';

@Component({
  selector: 'app-game',
  imports: [MemoryCardGrid],
  templateUrl: './app-game.html',
  styleUrl: './app-game.scss',
})
export class AppGame {
  playerName = '';
  difficulty: DifficultyEnum = DifficultyEnum.Easy;
  countOfImages = 0;

  constructor(
    private route: ActivatedRoute,
    private gameStateService: GameStateService,
  ) {}

  ngOnInit() {
    this.gameStateService.state$.subscribe((state) => {
      if (state) {
        this.playerName = state.name;
        this.difficulty = state.difficulty;
      }
    });

    this.countOfImages = difficulties[this.difficulty];
  }
}
