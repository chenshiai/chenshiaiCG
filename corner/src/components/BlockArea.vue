<template>
  <div class="block-area">
    <div v-show="title" class="block-area__title">{{ title }}</div>
    <slot />
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'block-area',

  props: {
    title: String,
  },
});
</script>

<style lang="scss" scoped>
.block-area {
  @include theme-color(background-color, stroke, 9);
  @include theme-shadow('layer');

  margin-bottom: 16px;
  padding: 12px;

  &__title {
    @include theme-color(color, stroke, 3);

    font-size: 14px;
  }
}
</style>