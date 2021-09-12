<template>
  <div class="board">
    <div class="board__control">
      <div class="board__deck">
        <slot name="deck" />
      </div>

      <div class="board__actions">
        <slot name="actions" />
      </div>
    </div>

    <div class="player player--1">
      <slot name="player-1" />
    </div>
    <div class="player player--2">
      <slot name="player-2" />
    </div>
    <div class="player player--3">
      <slot name="player-3" />
    </div>
    <div class="player player--4">
      <slot name="player-4" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'Board',
})

export default class Board extends Vue {
}
</script>

<style lang="scss" scoped>
  .board {
    width: 100vw;
    height: 100vh;
    padding: 2rem;
    background: #10CB70;
    background: linear-gradient(to top left, #156848, #10CB70);
    overflow: hidden;
    position: relative;
  }

  .board__control {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    padding: 2rem 3rem;
    border: 1px dashed #ddd;
    border-radius: 1rem;
  }

  .board__deck {
    display: flex;
    flex-flow: row wrap;
    position: relative;
    justify-content: center;
    align-items: center;
    width: 120px;
    height: 150px;

    .card {
      margin-left: 1rem;
      margin-bottom: 1rem;

      &.card--stacked {
        position: absolute;
        top: 50%;
        left: 0;
        margin: 0;
        transform: translate(0, -50%);
      }
    }
  }

  .board__actions {
    display: flex;
    flex-direction: column;

    > * {
      margin: 0.25rem 0;
    }
  }

  .player {
    padding: 0.5rem;
  }

  .player--1,
  .player--3 {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

  .player--1 {
    top: 0;

    .player-hand {
      flex-direction: column-reverse;
    }
  }

  .player--3 {
    bottom: 0;
  }

  .player--2,
  .player--4 {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  .player--2 {
    right: 0;
  }

  .player--4 {
    left: 0;
    padding-left: 1.25rem;

    .player-hand {
      flex-direction: row-reverse;
    }
  }
</style>
