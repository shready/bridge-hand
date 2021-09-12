<template>
  <div :style="style" :class="['card', { 'card--stacked': stacked }]">
    <card-number :face="card.face" :suit="card.suit" class="card__section" />

    <card-number
      :face="card.face"
      :suit="card.suit"
      :size="3"
      :hideSuit="true"
      class="card__section"
    />

    <card-number :face="card.face" :suit="card.suit" class="card__section" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Properties as CSSProperties } from 'csstype';
import { Card } from '../Card';
import CardNumber from './CardNumber.vue';

@Component({
  name: 'PlayingCard',
  components: {
    CardNumber,
  },
})

export default class PlayingCard extends Vue {
  @Prop({ required: true }) readonly card!: Card;

  @Prop({ default: 0.75 }) readonly size!: number;

  @Prop({ default: false }) readonly stacked!: boolean;

  get style(): CSSProperties {
    return {
      fontSize: `${this.size}em`,
    };
  }
}
</script>

<style lang="scss" scoped>
  .card {
    width: 8em;
    height: 12em;
    padding: 0.5em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    user-select: none;

    background: white;
    border-radius: 0.5em;
    box-shadow: 0.1em 0.1em 0.25em #555;
  }

  .card__section {
    &:not(:first-child):not(:last-child) {
      text-align: center;
    }

    &:last-child {
      transform: rotate(180deg);
    }
  }
</style>
