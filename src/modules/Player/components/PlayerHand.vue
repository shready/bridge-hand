<template>
  <div :class="[
    'player-hand',
    { 'player-hand--vertical': vertical, 'player-hand--stacked': stackedHand }]"
  >
    <div class="player-hand__header">
      <h2 class="player-hand__name">
        {{ player.getName() }}
      </h2>

      <span class="player-hand__score">
        {{ score }}
      </span>
    </div>

    <div class="player-hand__cards">
      <playing-card
        v-for="card in cards"
        :key="`${card}`"
        :card="card"
        :stacked="stackedHand"
        class="player-hand__card"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Card } from '@/modules/Card/Card';
import PlayingCard from '@/modules/Card/components/PlayingCard.vue';
import { Player } from '../Player';

@Component({
  name: 'PlayerHand',
  components: {
    PlayingCard,
  },
})

export default class PlayerHand extends Vue {
  @Prop({ required: true }) player!: Player;

  @Prop({ default: false }) stackedHand!: boolean;

  @Prop({ default: false }) vertical!: boolean;

  get cards(): Card[] {
    return this.player.getHand().getSortedCards();
  }

  get score(): number {
    return this.player.getHand().getPointValue();
  }
}
</script>

<style lang="scss" scoped>
  .player-hand {
    width: 675px;
    height: 242px;
    display: flex;
    flex-direction: column;
    align-items: center;

    &.player-hand--vertical {
      width: 292px;
      height: 576px;
      display: flex;
      flex-direction: row;
      align-items: center;
    }
  }

  .player-hand__header {
    display: flex;
    align-items: center;

    .player-hand--vertical & {
      margin: 0 2rem;
    }
  }

  .player-hand__name {
    font-size: 2rem;
    text-align: center;
  }

  .player-hand__score {
    font-size: 1.5rem;
    margin-left: 1rem;
    background: white;
    padding: 0.25rem;
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #888;
  }

  .player-hand__cards {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

    .player-hand--vertical & {
      flex-direction: column;
    }
  }

  .player-hand__card {
    flex-shrink: 0;
    margin: 0 -48px 0 0;
    transform: translateX(-25%);

    .player-hand--stacked & {
    margin: 0 -96px 0 0;
    transform: translateX(-50%);
    }

    .player-hand--vertical & {
      margin: -108px 0 0;
      transform: translateY(38%);
    }

    .player-hand--vertical.player-hand--stacked & {
      margin: -144px 0 0;
      transform: translateY(50%);
    }
  }
</style>
