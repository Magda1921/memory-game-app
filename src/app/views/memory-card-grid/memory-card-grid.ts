import { Component, input, OnInit, signal } from '@angular/core';
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

  constructor(private unsplashService: Unsplash) {}

  ngOnInit(): void {
    this.unsplashService
      .fetchImages('nature', this.countOfImages())
      .subscribe((photos: UnsplashPhoto[]) => {
        const doubledImages = photos
          .map((photo) => photo.urls.small)
          .flatMap((url) => [url, url]);
        const shuffledPhotos = this.shuffle(doubledImages);
        this.images.set(shuffledPhotos);
      });
  }

  flipCard(event: Event): void {
    if (this.flippedCards().size < 2) {
      const card = event.currentTarget as HTMLElement;
      this.flippedCards.set(this.flippedCards().add(card));
      card.classList.toggle('card--flipped');
      if (this.flippedCards().size === 2) {
        const [firstCard, secondCard] = Array.from(this.flippedCards());
        this.checkPair(firstCard, secondCard);
      }
    } else {
      return;
    }
  }
  private shuffle(array: string[]): string[] {
    let currentIndex: number = array.length;

    while (currentIndex !== 0) {
      const randomIndex: number = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }
  private checkPair(card1: HTMLElement, card2: HTMLElement): void {
    const img1 = card1.querySelector('img')?.src;
    const img2 = card2.querySelector('img')?.src;
    if (img1 === img2) {
      this.flippedCards.set(new Set());
      return;
    } else {
      setTimeout(() => {
        card1.classList.remove('card--flipped');
        card2.classList.remove('card--flipped');
        this.flippedCards.set(new Set());
      }, 3000);
    }
  }
}
