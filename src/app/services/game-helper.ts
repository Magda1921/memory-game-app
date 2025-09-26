import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GameHelper {
  flipCard(event: Event, flippedCards: Set<HTMLElement>): Set<HTMLElement> {
    if (flippedCards.size < 2) {
      const card = event.currentTarget as HTMLElement;
      flippedCards.add(card);
      card.classList.toggle('card--flipped');
      if (flippedCards.size === 2) {
        const [firstCard, secondCard] = Array.from(flippedCards);
        return this.checkPair(firstCard, secondCard, flippedCards);
      }
      return flippedCards;
    } else {
      return flippedCards;
    }
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

    return array;
  }
  checkPair(
    card1: HTMLElement,
    card2: HTMLElement,
    flippedCards: Set<HTMLElement>,
  ): Set<HTMLElement> {
    const img1 = card1.querySelector('img')?.src;
    const img2 = card2.querySelector('img')?.src;
    if (img1 === img2) {
      flippedCards.clear();
      return flippedCards;
    } else {
      setTimeout(() => {
        card1.classList.remove('card--flipped');
        card2.classList.remove('card--flipped');
        flippedCards.clear();
      }, 3000);
      return flippedCards;
    }
  }
}
