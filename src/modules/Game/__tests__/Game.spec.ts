import { shallowMount } from '@vue/test-utils';
import { Player } from '@/modules/Player/Player';
import Game from '../Game.vue';
import { Card } from '@/modules/Card/Card';

describe('Game.vue', () => {
  it('creates deck of cards on mount', () => {
    const wrapper: any = shallowMount(Game);
    const deck = wrapper.vm.deck;

    expect(deck.getSize()).toBe(52);

    // Count occurrences of each card
    const counts = deck.getCards().reduce((acc: any, card: Card) => {
      acc[`${card}`] = acc[`${card}`] || 0;
      acc[`${card}`] += 1;

      return acc;
    }, {});

    expect(Object.values(counts).every(c => c ===1)).toBe(true);
  });

  it('creates players on mount', () => {
    const wrapper: any = shallowMount(Game);
    const names = wrapper.vm.players.map((p: Player) => p.getName());
    const handSizes = wrapper.vm.players.map((p: Player) => p.getHand().getSize());

    expect(names).toStrictEqual(['North', 'East', 'South', 'West']);
    expect(handSizes.every((s: number) => s === 0)).toBe(true);
  });

  it('deals cards to players', () => {
    const wrapper: any = shallowMount(Game);

    wrapper.vm.deal();
    expect(wrapper.vm.deck.getSize()).toBe(0);

    const handSizes = wrapper.vm.players.map((p: Player) => p.getHand().getSize());
    expect(handSizes.every((s: number) => s === 13)).toBe(true);
  });

  it('resets game after dealing', () => {
    const wrapper: any = shallowMount(Game);

    wrapper.vm.deal();

    wrapper.vm.resetGame();
    expect(wrapper.vm.deck.getSize()).toBe(52);

    const handSizes = wrapper.vm.players.map((p: Player) => p.getHand().getSize());
    expect(handSizes.every((s: number) => s === 0)).toBe(true);
  });
});
