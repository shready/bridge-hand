import { Face } from './Face';
import { Suit } from './Suit';

export class Card {
  private face: Face;

  private suit: Suit;

  constructor(face: Face, suit: Suit) {
    this.face = face;
    this.suit = suit;
  }

  getFace(): Face {
    return this.face;
  }

  getSuit(): Suit {
    return this.suit;
  }

  toString(): string {
    return `${this.getFace()}${this.getSuit()}`;
  }
}
