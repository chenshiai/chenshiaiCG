<template>
  <Tip />
  <ScrollNav />
  <!-- <img src="./assets/setu.jpg" /> -->
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Tip from './components/Tip.vue';
import ScrollNav from './components/ScrollNav.vue';

export default defineComponent({
  name: 'App',
  components: {
    Tip,
    ScrollNav,
  },
  setup() {},
});
</script>
