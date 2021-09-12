import { Card } from '@/modules/Card/Card';
import { CardSet } from '@/modules/Card/CardSet';

export class Player {
  private name: string;

  private hand: CardSet;

  constructor(name: string) {
    this.name = name;
    this.hand = new CardSet();
  }

  giveCard(card: Card): Player {
    this.hand.addCard(card);

    return this;
  }

  takeCards(num: number | null = null): Card[] {
    const taken: Card[] = [];
    const numToTake = !num || num > this.hand.getCards().length
      ? this.hand.getCards().length
      : num;

    for (let i = 0; i < numToTake; i += 1) {
      const card = this.getHand().popCard();

      if (card) {
        taken.push(card);
      }
    }

    return taken;
  }

  getName(): string {
    return this.name;
  }

  getHand(): CardSet {
    return this.hand;
  }
}
