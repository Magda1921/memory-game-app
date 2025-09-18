import { Component } from '@angular/core';
import { MemoryCardGrid } from '../memory-card-grid/memory-card-grid';
import { ActivatedRoute } from '@angular/router';
import { difficulties, DifficultyEnum } from 'constants/gameDifficulties';

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

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.playerName = params['name'];
      this.difficulty = params['difficulty'] || DifficultyEnum.Easy;

      this.countOfImages = difficulties[this.difficulty];
    });
  }
}
