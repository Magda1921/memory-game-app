import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppGame } from './app-game/app-game';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AppGame],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('MemoryApp');
}
