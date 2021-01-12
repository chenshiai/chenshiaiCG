<template>
  <div class="content">
    <Info />
    <Container />
  </div>
</template>
<script>
import { defineComponent } from 'vue';
import Info from './Info.vue';
import Container from './Container.vue';

export default defineComponent({
  name: 'content',
  components: {
    Info,
    Container,
  },
});
</script>
<style lang="scss" scoped>
.content {
  width: 960px;
  margin: 0 auto;
}
</style>
