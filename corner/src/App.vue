<template>
  <Nav @click="data.show = true" />
  <Content />
  <Tip v-model="data.show" text="Nothing" />
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import Tip from './components/Tip.vue';
import Nav from './components/Nav.vue';
import Content from './components/Content/index.vue';

export default defineComponent({
  name: 'App',
  components: {
    Tip,
    Nav,
    Content,
  },
  setup() {
    const data = reactive({
      show: true,
    });
    return { data };
  }
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
  margin-top: 80px;
}

* {
  box-sizing: border-box;
}

::selection {
  @include theme-color(color, primary, 8);

  background: $theme-view;
}

.block-area {
  @include theme-color(background-color, stroke, 9);
  @include theme-shadow('layer');

  padding: 16px;
}
</style>
