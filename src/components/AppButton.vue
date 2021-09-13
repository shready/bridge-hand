<template>
  <button class="app-button" @click="$emit('click', $event)">
    <div class="app-button__content">
      <slot />
    </div>
  </button>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'AppButton',
})

export default class Button extends Vue {}
</script>

<style lang="scss" scoped>
  .app-button {
    display: inline-block;
    outline: none;
    cursor: pointer;
    font-weight: bold;
    border-radius: 0.5rem;
    padding: 0.75rem 1.5rem;
    border: 1px solid #156848;
    background: #fff;
    color: #156848;
    position: relative;

    .app-button__content {
      position: relative;
      z-index: 1;
    }

    &::before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: inherit;
      border-radius: inherit;
      transition: all 0.2s ease 0s;
      z-index: 1;
    }

    &:not(:disabled):hover::before {
      background: rgba(16, 203, 112, 0.15);
    }

    &:disabled {
      cursor: default;
      color: #888;
    }
  }
</style>
