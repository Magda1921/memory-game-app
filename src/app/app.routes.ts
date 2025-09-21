import { Routes } from '@angular/router';
import { StartScreen } from './views/start-screen/start-screen';
import { AppGame } from './views/app-game/app-game';
import { PATHS } from 'constants/paths';

export const routes: Routes = [
  {
    path: '',
    component: StartScreen,
    pathMatch: 'full',
  },
  {
    path: PATHS.app,
    component: AppGame,
  },
];
