import { Card } from '@/modules/Card/Card';
import { Face } from '@/modules/Card/Face';
import { ScorerInterface } from './ScorerInterface';

const scores = {
  [Face.two]: 0,
  [Face.three]: 0,
  [Face.four]: 0,
  [Face.five]: 0,
  [Face.six]: 0,
  [Face.seven]: 0,
  [Face.eight]: 0,
  [Face.nine]: 0,
  [Face.ten]: 0,
  [Face.jack]: 1,
  [Face.queen]: 2,
  [Face.king]: 3,
  [Face.ace]: 4,
};

export class BridgeScorer implements ScorerInterface {
  score(cards: Card[]): number {
    return cards.reduce(
      (sum: number, card: Card): number => sum + scores[card.getFace()],
      0,
    );
  }
}
