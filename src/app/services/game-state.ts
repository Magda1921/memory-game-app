import { Injectable } from '@angular/core';
import { DifficultyEnum } from 'constants/gameDifficulties';
import { BehaviorSubject } from 'rxjs';

interface GameState {
  name: string;
  difficulty: DifficultyEnum;
}

@Injectable({
  providedIn: 'root',
})
export class GameStateService {
  private readonly stateSubject = new BehaviorSubject<GameState | null>(null);
  state$ = this.stateSubject.asObservable();

  setState(state: GameState) {
    this.stateSubject.next(state);
  }
}
