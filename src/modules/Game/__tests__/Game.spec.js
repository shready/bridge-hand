import { shallowMount } from '@vue/test-utils';
import Game from '@/modules/Game/Game.vue';

describe('Game.vue', () => {
  it('creates deck of cards on mount', () => {
    const wrapper = shallowMount(Game);
    const deck = wrapper.vm.deck;

    expect(deck.getSize()).toBe(52);

    // Count occurrences of each card
    const counts = deck.getCards().reduce((acc, card) => {
      acc[`${card}`] = acc[`${card}`] || 0;
      acc[`${card}`] += 1;

      return acc;
    }, {});

    expect(Object.values(counts).every(c => c ===1)).toBe(true);
  });
});
