import { Component, input, OnInit, signal } from '@angular/core';
import { GameHelper } from '@app/services/game-helper';
import { GameStateService } from '@app/services/game-state';
import { Unsplash } from '@app/services/unsplash';
import { UnsplashPhoto } from '@app/types/unsplash';
import { EndGameDialog } from '../end-game-dialog/end-game-dialog';
import { Subscription } from 'rxjs';
import { difficulties } from 'constants/gameDifficulties';
import { Button } from '@app/components/button/button';

@Component({
  selector: 'memory-card-grid',
  imports: [EndGameDialog, Button],
  templateUrl: './memory-card-grid.html',
  styleUrl: './memory-card-grid.scss',
})
export class MemoryCardGrid implements OnInit {
  images = signal<string[]>([]);
  countOfImages = input.required<number>();
  flippedCards = signal<Set<HTMLElement>>(new Set());
  points = signal<number>(0);
  time = signal<string>('0s');
  playerName = signal<string>('');
  showDialog = signal<boolean>(false);

  constructor(
    private unsplashService: Unsplash,
    private gameHelper: GameHelper,
    private gameStateService: GameStateService,
  ) {}

  ngOnInit(): void {
    this.unsplashService
      .fetchImages('nature', this.countOfImages())
      .subscribe((photos: UnsplashPhoto[]) => {
        const doubledImages = photos
          .map((photo) => photo.urls.small)
          .flatMap((url) => [url, url]);
        const shuffledPhotos = this.gameHelper.shuffle(doubledImages);
        this.images.set(shuffledPhotos);
      });

    this.gameStateService.state$.subscribe((state) => {
      if (state && state.foundPairs === difficulties[state.difficulty]) {
        this.gameHelper.updateEndGameTime(state);

        this.showDialog.set(true);
        this.points.set(state.score ?? 0);
        this.time.set(
          state.endGame && state.startGame
            ? `${Math.floor((state.endGame - state.startGame) / 1000)}s`
            : '0s',
        );
        this.playerName.set(state.name ?? '');
      }
    });
  }
  flipCard(event: Event): void {
    this.flippedCards.set(this.gameHelper.flipCard(event, this.flippedCards()));
  }
  resetGame(): void {
    this.gameStateService.resetGame();
  }
}
