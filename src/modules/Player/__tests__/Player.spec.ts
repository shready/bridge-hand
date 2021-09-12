import { Card } from '@/modules/Card/Card';
import { Face } from '@/modules/Card/Face';
import { Suit } from '@/modules/Card/Suit';
import { Player } from '../Player';

describe('Player class', () => {
  let unit: Player;

  beforeEach(() => {
    unit = new Player('Test');
  });

  it('has empty hand when created', () => {
    expect(unit.getHand().getSize()).toBe(0);
  });

  it('can be given cards', () => {
    const cards = [new Card(Face.eight, Suit.diamond), new Card(Face.two, Suit.heart)];

    unit.giveCard(cards[0]);
    expect(unit.getHand().getCards()).toStrictEqual([cards[0]]);

    unit.giveCard(cards[1]);
    expect(unit.getHand().getCards()).toStrictEqual(cards);
  });

  it('can retrieve all cards', () => {
    const cards = [new Card(Face.eight, Suit.diamond), new Card(Face.two, Suit.heart)];
    cards.forEach((card: Card) => {
      unit.giveCard(card);
    });

    expect(unit.getHand().getSize()).toBe(2);

    expect(unit.takeCards()).toStrictEqual(cards.reverse());
    expect(unit.getHand().getSize()).toBe(0);
  });

  it('can retrieve a given number of cards', () => {
    const cards = [new Card(Face.eight, Suit.club), new Card(Face.two, Suit.heart), new Card(Face.two, Suit.club)];
    cards.forEach((card: Card) => {
      unit.giveCard(card);
    });

    expect(unit.getHand().getSize()).toBe(3);

    expect(unit.takeCards(2)).toStrictEqual([cards[2], cards[1]]);
    expect(unit.getHand().getSize()).toBe(1);
  });

  it('cannot retrieve more cards than exists', () => {
    const cards = [new Card(Face.eight, Suit.club), new Card(Face.two, Suit.heart), new Card(Face.two, Suit.club)]
    cards.forEach((card: Card) => {
      unit.giveCard(card);
    });

    expect(unit.getHand().getSize()).toBe(3);

    expect(unit.takeCards(4)).toStrictEqual(cards.reverse());
    expect(unit.getHand().getSize()).toBe(0);
  });
});
