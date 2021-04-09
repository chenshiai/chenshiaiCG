<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
});
</script>

<style lang="scss">
@font-face {
  font-family: 'eng';
  src: url('../_-webfont.woff');
}

@font-face {
  font-family: 'zhn';
  src: url('../HYWenHei-85W.ttf');
}

body {
  @include theme-color(background, stroke, 6);

  font-family: 'eng', 'zhn', Avenir, Helvetica, Arial, sans-serif;
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
  @include theme-color(color, stroke, 9);

  background: $theme-view;
}
</style>
