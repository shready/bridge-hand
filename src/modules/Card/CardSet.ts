import { ScorerInterface } from '@/lib/ScorerInterface';
import { BridgeScorer } from '@/lib/BridgeScorer';
import { Card } from './Card';
import { Suit } from './Suit';

export class CardSet {
  private cards: Card[] = [];

  private scorer: ScorerInterface;

  constructor(cards: Card[] = [], scorer: ScorerInterface = new BridgeScorer()) {
    this.cards = cards;

    this.scorer = scorer;
  }

  getCards(suit: Suit | null = null): Card[] {
    return !suit
      ? this.cards
      : this.cards.filter((card: Card): boolean => card.getSuit() === suit);
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

  popCard(): Card | undefined {
    return this.cards.pop();
  }

  getSize(): number {
    return this.cards.length;
  }

  getPointValue(): number {
    return this.scorer.score(this.cards);
  }

  getPointValueForSuit(suit: Suit): number {
    return this.scorer.score(this.getCards(suit));
  }
}
