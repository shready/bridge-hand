import { Card } from '../Card';
import { CardSet } from '../CardSet';
import { Face } from '../Face';
import { Suit } from '../Suit';

describe('CardSet class', () => {
  let cards: Card[] = [];

  beforeEach(() => {
    cards = [
      new Card(Face.ace, Suit.spade),
      new Card(Face.eight, Suit.heart),
      new Card(Face.queen, Suit.club),
    ];
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
});
