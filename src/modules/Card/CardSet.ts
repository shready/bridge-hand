import { Card } from './Card';

export class CardSet {
  private cards: Card[] = [];

  constructor(cards: Card[] = []) {
    this.cards = cards;
  }

  getCards(): Card[] {
    return this.cards;
  }

  setCards(cards: Card[]): CardSet {
    this.cards = cards;

    return this;
  }

  addCard(card: Card): CardSet {
    this.cards.push(card);

    return this;
  }

  addCards(cards: Card[]): CardSet {
    this.cards.push(...cards);

    return this;
  }

  getSize(): number {
    return this.cards.length;
  }
}
