import { Card } from '../Card';
import { Face } from '../Face';
import { Suit } from '../Suit';

describe('Card class', () => {
  it('creates string from card', () => {
    expect(`${new Card(Face.ace, Suit.spade)}`).toBe('A♠');
    expect(`${new Card(Face.queen, Suit.heart)}`).toBe('Q♥');
  });
});
