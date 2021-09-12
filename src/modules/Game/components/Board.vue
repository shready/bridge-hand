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
</style>
