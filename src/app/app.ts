import { Component, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { GameStateService } from './services/game-state';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('MemoryApp');
  constructor(
    private gameStateService: GameStateService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.gameStateService.state$.subscribe((state) => {
      if (!state) {
        this.router.navigate(['/']);
      }
    });
  }
}
