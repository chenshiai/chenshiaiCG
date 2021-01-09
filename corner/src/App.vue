<template>
  <Loading />
  <ScrollNav />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Loading from './components/Loading.vue';
import ScrollNav from './components/ScrollNav.vue';

export default defineComponent({
  name: 'App',
  components: {
    Loading,
    ScrollNav,
  },
  setup() {},
});
</script>
