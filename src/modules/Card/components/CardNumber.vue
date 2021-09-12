<template>
  <div :style="style" class="card-number">
    <span class="card-number__face">{{ face }}</span>
    <span v-if="!hideSuit" class="card-number__suit">{{ suit }}</span>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Properties as CSSProperties } from 'csstype';
import { Face } from '../Face';
import { Suit } from '../Suit';

@Component({
  name: 'CardNumber',
})

export default class CardNumber extends Vue {
  @Prop({ required: true }) face!: Face;

  @Prop({ required: true }) suit!: Suit;

  @Prop({ default: 1.25 }) size!: number;

  @Prop({ default: false }) hideSuit!: boolean;

  get style(): CSSProperties {
    return {
      fontSize: `${this.size}em`,
      color: [Suit.diamond, Suit.heart].indexOf(this.suit) >= 0
        ? 'red'
        : 'black',
    };
  }
}
</script>

<style lang="scss" scoped>
  .card-number {
    display: flex;
    flex-direction: column;
    line-height: 0.75;
    font-weight: bold;
  }

  .card-number__suit {
    font-size: 1.25em;
  }
</style>
