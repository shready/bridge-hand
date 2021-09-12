import { BridgeScorer } from '../BridgeScorer';
import { Card } from '@/modules/Card/Card';
import { Face } from '@/modules/Card/Face';
import { Suit } from '@/modules/Card/Suit';

describe('BridgeScorer class', () => {
  let unit: BridgeScorer;

  beforeEach(() => {
    unit = new BridgeScorer();
  });

  it('computes bridge scores for an array of cards', () => {
    const cases: Array<[Card[], number]> = [
      [[
        new Card(Face.ace, Suit.heart),
        new Card(Face.king, Suit.spade),
        new Card(Face.queen, Suit.club),
        new Card(Face.jack, Suit.club),
      ], 10],
      [[
        new Card(Face.ace, Suit.heart),
        new Card(Face.king, Suit.spade),
        new Card(Face.queen, Suit.club),
        new Card(Face.jack, Suit.club),
        new Card(Face.queen, Suit.diamond),
        new Card(Face.jack, Suit.diamond),
      ], 13],
      [[
        new Card(Face.ace, Suit.heart),
        new Card(Face.king, Suit.spade),
        new Card(Face.queen, Suit.club),
        new Card(Face.jack, Suit.club),
        new Card(Face.three, Suit.diamond),
        new Card(Face.ten, Suit.club),
      ], 10],
      [[new Card(Face.queen, Suit.club)], 2],
      [[], 0],
    ];

    cases.forEach(([cards, score]) => {
      expect(unit.score(cards)).toBe(score);
    });
  });
});
