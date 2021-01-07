<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
  {{ msg }}
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import HelloWorld from './components/HelloWorld.vue';

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld,
  },
  setup() {
    const msg = ref<string>('随便的文字');

    return { msg };
  },
});
</script>
