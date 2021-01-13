<template>
  <NavTop />
  <Content />
  <Tip />
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import Tip from './components/Tip.vue';
import NavTop from './components/NavTop.vue';
import Content from './components/Content/index.vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'App',
  components: {
    Tip,
    NavTop,
    Content,
  },
  setup() {
    const store = useStore();
    onMounted(() => {
      store.commit('openTip');
    });
  },
});
</script>

<style lang="scss">
@font-face {
  font-family: 'sao_font';
  src: url('./assets/font/sao.woff2');
}

body {
  @include theme-color(background, stroke, 6);

  font-family: 'sao_font';
  margin: 0;
}

#app {
  @include theme-color(color, stroke, 1);

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 26px;
}

* {
  box-sizing: border-box;
}

::selection {
  background: $theme-view;
}

.block-area {
  @include theme-color(background-color, stroke, 9);
  @include theme-shadow('layer');

  padding: 16px;
}
</style>
