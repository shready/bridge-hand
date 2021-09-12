<template>
  <div id="app">
    <game />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Game from '@/modules/Game/Game.vue';

@Component({
  components: {
    Game,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

body {
  margin: 0;
}
</style>
