<template>
  <div class="nav"></div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'nav',
});
</script>
<style lang="scss" scoped>
.nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;

  @include theme-color(background-color, stroke, 9);
  @include theme-shadow('layer');
}
</style>
