<template>
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
  <CyberPunkButton />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import CyberPunkButton from './demo/CyberPunkButton.vue';

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld,
    CyberPunkButton,
  },
  setup() {
    const msg = ref<string>('随便的文字');

    return { msg };
  },
});
</script>
