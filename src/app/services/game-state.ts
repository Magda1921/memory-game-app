import { Injectable } from '@angular/core';
import { DifficultyEnum } from 'constants/gameDifficulties';
import { BehaviorSubject, Timestamp } from 'rxjs';

export interface GameState {
  name: string;
  difficulty: DifficultyEnum;
  startGame: number;
  endGame?: number;
  foundPairs?: number;
  score?: number;
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
  incrementFoundPairs() {
    const currentState = this.stateSubject.getValue();
    if (currentState) {
      this.stateSubject.next({
        ...currentState,
        foundPairs: currentState.foundPairs ? currentState.foundPairs + 1 : 1,
      });
    }
  }
  resetGame() {
    this.stateSubject.next(null);
  }
}
