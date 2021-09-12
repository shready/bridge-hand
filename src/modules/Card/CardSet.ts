import { ScorerInterface } from '@/lib/ScorerInterface';
import { BridgeScorer } from '@/lib/BridgeScorer';
import { Card } from './Card';
import { Suit, suits } from './Suit';
import { faces } from './Face';

export class CardSet {
  private cards: Card[] = [];

  private scorer: ScorerInterface;

  constructor(cards: Card[] = [], scorer: ScorerInterface = new BridgeScorer()) {
    this.cards = cards;

    this.scorer = scorer;
  }

  getCards(suit?: Suit | undefined): Card[] {
    return !suit
      ? this.cards
      : this.cards.filter((card: Card): boolean => card.getSuit() === suit);
  }

  getSortedCards(): Card[] {
    return [...this.cards].sort((a: Card, b: Card) => {
      // Compare suits
      const suitCmp: number = suits.indexOf(b.getSuit()) - suits.indexOf(a.getSuit());

      // If suits are equal, then compare the face/number
      return suitCmp || faces.indexOf(b.getFace()) - faces.indexOf(a.getFace());
    });
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
