<template>
  <NavTop />
  <Content />
  <Tip />
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import Tip from '../../components/Tip.vue';
import NavTop from '../../components/NavTop.vue';
import Content from '../../components/Content/index.vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'home',
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
