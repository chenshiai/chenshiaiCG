<template>
  <div class="content">
    <div class="info-area">
      <SelfInfo />
      <div id="weather-v2-plugin-standard"></div>
    </div>
    <div class="container block-area">A container. 2021-01-12</div>
  </div>
</template>
<script>
import { defineComponent } from 'vue';
import SelfInfo from './SelfInfo.vue';

export default defineComponent({
  name: 'content',
  components: {
    SelfInfo,
  },
});
</script>
<style lang="scss" scoped>
.content {
  width: 960px;
  margin: 0 auto;
}

.info-area {
  width: 240px;
  height: 100px;
  float: left;
}
.container {
  width: 700px;
  height: 900px;
  float: right;
}

</style>
