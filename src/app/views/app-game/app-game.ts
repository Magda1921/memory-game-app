import { Component } from '@angular/core';
import { StartScreen } from '../start-screen/start-screen';

@Component({
  selector: 'app-game',
  imports: [StartScreen],
  templateUrl: './app-game.html',
  styleUrl: './app-game.scss',
})
export class AppGame {}
