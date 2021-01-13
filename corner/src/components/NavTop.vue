<template>
  <div class="nav" @click="handleClick"></div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'nav-top',
  setup() {
    const store = useStore();
    const handleClick = () => {
      store.commit('openTip', {
        type: 'success',
        text: 'Click Nav',
      });
    };
    return {
      handleClick,
    };
  },
});
</script>
<style lang="scss" scoped>
.nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 10px;
  z-index: 999;

  @include theme-color(background-color, stroke, 9);
  @include theme-shadow('layer');
}
</style>
