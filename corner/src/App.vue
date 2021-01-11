<template>
  <Nav @click="data.show = true" />
  <Tip v-model="data.show" text="Nothing" />
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import Tip from './components/Tip.vue';
import Nav from './components/Nav.vue';

export default defineComponent({
  name: 'App',
  components: {
    Tip,
    Nav,
  },
  setup() {
    const data = reactive({
      show: true,
    });
    return { data };
  }
});
</script>
