import { ScorerInterface } from '@/lib/ScorerInterface';
import { Card } from '../Card';
import { CardSet } from '../CardSet';
import { Face } from '../Face';
import { Suit } from '../Suit';

describe('CardSet class', () => {
  let cards: Card[] = [];
  let scorer: ScorerInterface;

  beforeEach(() => {
    cards = [
      new Card(Face.ace, Suit.spade),
      new Card(Face.eight, Suit.heart),
      new Card(Face.queen, Suit.club),
    ];

    const scoreMap = {
      [Suit.club]: 1,
      [Suit.diamond]: 2,
      [Suit.heart]: 3,
      [Suit.spade]: 4,
    };

    scorer = {
      score(cards: Card[]): number {
        return cards.reduce(
          (sum: number, card: Card): number => sum + scoreMap[card.getSuit()],
          0,
        );
      }
    }
  });

  it('can be instantiated with array of cards', () => {
    const set = new CardSet(cards);

    expect(set.getCards()).toStrictEqual(cards);
  });

  it('can have new cards added', () => {
    const set = new CardSet();
    const card = new Card(Face.jack, Suit.diamond);

    set.addCard(card);
    expect(set.getCards()).toStrictEqual([card]);

    set.addCards(cards);
    expect(set.getCards()).toStrictEqual([card, ...cards]);
  });

  it('allows cards to be replaced entirely', () => {
    const set = new CardSet(cards);
    const newCards = [new Card(Face.eight, Suit.heart), new Card(Face.two, Suit.club)];

    set.setCards(newCards);
    expect(set.getCards()).toStrictEqual(newCards);
  });

  it('retrieves the number of cards in the set', () => {
    const set = new CardSet(cards);
    expect(set.getSize()).toBe(3);

    set.addCard(new Card(Face.jack, Suit.diamond));
    expect(set.getSize()).toBe(4);
  });

  it('retreives the point value of the cards', () => {
    const set = new CardSet([
      new Card(Face.ace, Suit.spade),
      new Card(Face.eight, Suit.heart),
      new Card(Face.queen, Suit.club),
      new Card(Face.eight, Suit.heart),
      new Card(Face.two, Suit.club),
    ], scorer);

    expect(set.getPointValue()).toBe(12);
  });

  it('retreives the point value of the cards by suit', () => {
    const set = new CardSet([
      new Card(Face.ace, Suit.spade),
      new Card(Face.eight, Suit.heart),
      new Card(Face.queen, Suit.club),
      new Card(Face.eight, Suit.heart),
      new Card(Face.two, Suit.club),
    ], scorer);

    expect(set.getPointValueForSuit(Suit.club)).toBe(2);
    expect(set.getPointValueForSuit(Suit.heart)).toBe(6);
    expect(set.getPointValueForSuit(Suit.spade)).toBe(4);
    expect(set.getPointValueForSuit(Suit.diamond)).toBe(0);
  });
});
