import { Card } from '@/modules/Card/Card';

export interface ScorerInterface {
  score(cards: Card[]): number;
}
