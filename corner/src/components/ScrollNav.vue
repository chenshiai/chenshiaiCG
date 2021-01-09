<template>
  <div class="scroll-nav"></div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'scroll-nav',
});
</script>
<style lang="scss">
.scroll-nav {
  @include theme-border(4px, solid, stroke, 3);

  position: fixed;
  top: 0;
  left: 0;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  transform: translate3d(-50%, -50%, 0);
}
</style>
