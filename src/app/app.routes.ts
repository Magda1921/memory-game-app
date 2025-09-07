import { Routes } from '@angular/router';
import { StartScreen } from './views/start-screen/start-screen';
import { AppGame } from './views/app-game/app-game';

export const routes: Routes = [
  { path: '', redirectTo: '/start-screen', pathMatch: 'full' },
  {
    path: 'start-screen',
    component: StartScreen,
  },
  {
    path: 'app-game',
    component: AppGame,
  },
];
