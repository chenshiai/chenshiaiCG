<template>
  <div class="content">
    <div class="info-area">
      <SelfInfo />
      <div id="weather-v2-plugin-standard"></div>
    </div>
    <div class="container">
      <ArticleList />
    </div>
  </div>
</template>
<script>
import { defineComponent } from 'vue';
import SelfInfo from './SelfInfo.vue';
import ArticleList from './ArticleList.vue';

export default defineComponent({
  name: 'content',
  components: {
    SelfInfo,
    ArticleList,
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
  float: right;
}
</style>
