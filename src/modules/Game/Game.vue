<template>
  <board>
    <button slot="actions">
      Reset
    </button>
    <button slot="actions" :disabled="hasDealt">
      Deal
    </button>
  </board>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Board from './components/Board.vue';

@Component({
  name: 'Game',
  components: {
    Board,
  },
})

export default class Game extends Vue {
  hasDealt = false;
}
</script>
