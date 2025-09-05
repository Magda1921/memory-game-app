import { Component } from '@angular/core';
import { StartScreen } from '../start-screen/start-screen';
import { MemoryCardGrid } from '../memory-card-grid/memory-card-grid';

@Component({
  selector: 'app-game',
  imports: [StartScreen, MemoryCardGrid],
  templateUrl: './app-game.html',
  styleUrl: './app-game.scss',
})
export class AppGame {}
