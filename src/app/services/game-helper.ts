import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GameHelper {
  flipCard(event: Event, flippedCards: Set<HTMLElement>): Set<HTMLElement> {
    if (flippedCards.size >= GAME_CONFIG.MAX_FLIPPED_CARDS) {
      return flippedCards;
    }
    const card = this.getCardElement(event);
    flippedCards.add(card);
    card.classList.toggle(GAME_CONFIG.FLIPPED_CARD_CLASS);
    if (flippedCards.size === 2) {
      return this.handlePairCheck(flippedCards);
    }
    return flippedCards;
  }

  private getCardElement(event: Event): HTMLElement {
    const target = event.currentTarget;
    if (!target) {
      throw new Error('Target element is not available in the event!');
    }
    return target as HTMLElement;
  }

  private handlePairCheck(flippedCards: Set<HTMLElement>): Set<HTMLElement> {
    const [firstCard, secondCard] = Array.from(flippedCards);
    return this.checkPair(firstCard, secondCard, flippedCards);
  }

  shuffle(array: string[]): string[] {
    let currentIndex: number = array.length;

    while (currentIndex !== 0) {
      const randomIndex: number = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return [...array];
  }

  checkPair(
    card1: HTMLElement,
    card2: HTMLElement,
    flippedCards: Set<HTMLElement>,
  ): Set<HTMLElement> {
    const img1: string = card1.querySelector('img')!.src;
    const img2: string = card2.querySelector('img')!.src;
    if (this.areCardsMatching(img1, img2)) {
      return this.handleMatchingPair(flippedCards);
    } else {
      return this.handleNonMatchingPair(flippedCards, card1, card2);
    }
  }

  private areCardsMatching(img1: string, img2: string): boolean {
    return img1 === img2;
  }

  private handleMatchingPair(flippedCards: Set<HTMLElement>): Set<HTMLElement> {
    flippedCards.clear();
    return flippedCards;
  }

  private handleNonMatchingPair(
    flippedCards: Set<HTMLElement>,
    card1: HTMLElement,
    card2: HTMLElement,
  ): Set<HTMLElement> {
    setTimeout(() => {
      card1.classList.remove(GAME_CONFIG.FLIPPED_CARD_CLASS);
      card2.classList.remove(GAME_CONFIG.FLIPPED_CARD_CLASS);
      flippedCards.clear();
    }, GAME_CONFIG.FLIP_BACK_DELAY_MS);
    return flippedCards;
  }
}

export const GAME_CONFIG = {
  MAX_FLIPPED_CARDS: 2,
  FLIPPED_CARD_CLASS: 'card--flipped',
  FLIP_BACK_DELAY_MS: 1000,
};
