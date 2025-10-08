import { Injectable } from '@angular/core';
import { GameState } from './game-state';

@Injectable({
  providedIn: 'root',
})
export class ScoreService {
  private storageKey = 'scores';

  saveScore(player: Player): void {
    const scores = this.getScores();
    scores.push(player);
    localStorage.setItem(this.storageKey, JSON.stringify(scores));
  }

  getScores(): Player[] {
    const data = localStorage.getItem(this.storageKey);
    return data ? (JSON.parse(data) as Player[]) : [];
  }
}

export interface Player {
  name: string;
  points: number;
}
