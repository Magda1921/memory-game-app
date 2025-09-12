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

  constructor(private unsplashService: Unsplash) {}

  ngOnInit(): void {
    this.unsplashService
      .fetchImages('nature', this.countOfImages())
      .subscribe((photos: UnsplashPhoto[]) => {
        this.images.set(photos.map((photo) => photo.urls.small));
      });
  }
}
