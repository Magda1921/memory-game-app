import { Component } from '@angular/core';
import { MemoryCardGrid } from '../memory-card-grid/memory-card-grid';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game',
  imports: [MemoryCardGrid],
  templateUrl: './app-game.html',
  styleUrl: './app-game.scss',
})
export class AppGame {
  playerName = '';
  difficulty: 'easy' | 'medium' | 'hard' = 'easy';
  countOfImages = 0;

  constructor(private route: ActivatedRoute) {}

  difficulties: Record<string, number> = {
    easy: 8,
    medium: 12,
    hard: 16,
  };

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.playerName = params['name'] || 'Anonim';
      this.difficulty = params['difficulty'] || 'easy';

      this.countOfImages = this.difficulties[this.difficulty];
    });
  }
}
