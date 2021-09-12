import { shallowMount } from '@vue/test-utils';
import { Face } from '../../Face';
import { Suit } from '../../Suit';
import CardNumber from '../CardNumber.vue';

describe('CardNumber.vue', () => {
  let propsData: any;

  beforeEach(() => {
    propsData = { face: Face.ace, suit: Suit.spade, size: 1 };
  });

  it('computes color based on suit', async () => {
    const wrapper: any = shallowMount(CardNumber, { propsData });
    expect(wrapper.vm.style.color).toBe('black');

    wrapper.setProps({ face: Face.five });
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.style.color).toBe('black');

    wrapper.setProps({ suit: Suit.diamond });
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.style.color).toBe('red');

    wrapper.setProps({ suit: Suit.spade });
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.style.color).toBe('black');

    wrapper.setProps({ suit: Suit.heart });
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.style.color).toBe('red');
  });

  it('computes fontSize in em', async () => {
    propsData.size = 1;
    const wrapper: any = shallowMount(CardNumber, { propsData });
    expect(wrapper.vm.style.fontSize).toBe('1em');

    wrapper.setProps({ size: 2 });
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.style.fontSize).toBe('2em');
  });
});
