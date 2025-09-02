import { Component, OnInit, signal } from '@angular/core';
import { Unsplash, UnsplashPhoto } from '@app/services/unsplash';

@Component({
  selector: 'memory-card-grid',
  imports: [],
  templateUrl: './memory-card-grid.html',
  styleUrl: './memory-card-grid.scss',
})
export class MemoryCardGrid implements OnInit {
  images = signal<string[]>([]);

  constructor(private unsplashService: Unsplash) {}

  ngOnInit(): void {
    this.unsplashService
      .fetchImages('nature', 12)
      .subscribe((photos: UnsplashPhoto[]) => {
        this.images.set(photos.map((photo) => photo.urls.small));
      });
  }
}
