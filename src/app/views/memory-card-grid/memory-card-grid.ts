import { Component, input, OnInit, signal } from '@angular/core';
import { GameHelper } from '@app/services/game-helper';
import { Unsplash } from '@app/services/unsplash';
import { UnsplashPhoto } from '@app/types/unsplash';

@Component({
  selector: 'memory-card-grid',
  imports: [],
  templateUrl: './memory-card-grid.html',
  styleUrl: './memory-card-grid.scss',
})
export class MemoryCardGrid implements OnInit {
  images = signal<string[]>([]);
  countOfImages = input.required<number>();
  flippedCards = signal<Set<HTMLElement>>(new Set());

  constructor(
    private unsplashService: Unsplash,
    private gameHelper: GameHelper,
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
  }
  flipCard(event: Event): void {
    this.flippedCards.set(this.gameHelper.flipCard(event, this.flippedCards()));
    this.gameHelper.checkIfGameWon();
  }
}
