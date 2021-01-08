<template>
  <ScrollNav />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ScrollNav from './components/ScrollNav.vue';

export default defineComponent({
  name: 'App',
  components: {
    ScrollNav,
  },
  setup() {},
});
</script>
