<template>
  <div class="info-area">
    <SelfInfo />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import SelfInfo from './SelfInfo.vue';

export default defineComponent({
  name: 'info-area',
  components: {
    SelfInfo,
  },
});
</script>
<style lang="scss" scoped>
.info-area {
  width: 240px;
  height: 100px;
  float: left;
}
</style>
