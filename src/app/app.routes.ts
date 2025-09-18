import { Routes } from '@angular/router';
import { StartScreen } from './views/start-screen/start-screen';
import { AppGame } from './views/app-game/app-game';
import { PATHS } from 'constants/paths';

export const routes: Routes = [
  { path: '', redirectTo: PATHS.start, pathMatch: 'full' },
  {
    path: PATHS.start,
    component: StartScreen,
  },
  {
    path: PATHS.app,
    component: AppGame,
  },
];
