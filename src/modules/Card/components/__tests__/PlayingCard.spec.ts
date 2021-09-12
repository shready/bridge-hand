import { shallowMount } from '@vue/test-utils';
import { Card } from '../../Card';
import { Face } from '../../Face';
import { Suit } from '../../Suit';
import PlayingCard from '../PlayingCard.vue';

describe('PlayingCard.vue', () => {
  let propsData: any;

  beforeEach(() => {
    propsData = { card: new Card(Face.ace, Suit.spade), size: 1 };
  });

  it('computes fontSize in em', async () => {
    propsData.size = 1;
    const wrapper: any = shallowMount(PlayingCard, { propsData });
    expect(wrapper.vm.style.fontSize).toBe('1em');

    wrapper.setProps({ size: 2 });
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.style.fontSize).toBe('2em');
  });
});
