<template>
  <NavTop />
  <div class="content">
    <div class="info-area">
      <SelfInfo />
      <div class="block-area">
        <iframe
          allowtransparency="true"
          frameborder="0"
          width="216"
          height="80"
          scrolling="no"
          src="//tianqi.2345.com/plugin/widget/index.htm?s=2&z=3&t=0&v=0&d=1&bd=0&k=000000&f=808080&ltf=009944&htf=cc0000&q=1&e=1&a=1&c=54511&w=195&h=96&align=left"
        />
      </div>
    </div>
    <div class="container">
      <ArticleList />
    </div>
  </div>
  <Tip />
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import Tip from '../../components/Tip.vue';
import NavTop from '../../components/NavTop.vue';
import SelfInfo from '../../components/SelfInfo.vue';
import ArticleList from '../../components/ArticleList.vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'home',
  components: {
    Tip,
    NavTop,
    SelfInfo,
    ArticleList,
  },
  setup() {
    const store = useStore();
    onMounted(() => {
      store.commit('openTip');
    });
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
  float: left;
}
.container {
  width: 700px;
  float: right;
}
</style>
