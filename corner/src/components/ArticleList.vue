<template>
  <BlockArea class="article-list">
    Beautiful spring is here.
    <br />
    The winter is gone.
    <br />
    But the birds are back.
    <br />
    The snow is gone.
    <br />
    But the flowers are back.
    <br />
    Old coats are gone.
    <br />
    But new ones are here.
    <br />
    Spring is a beautiful time.
    <br />
    美丽的春天来了。
    <br />
    冬天过去了。
    <br />
    但是鸟儿回来了。
    <br />
    雪不见了。
    <br />
    但是花又回来了。
    <br />
    旧外套不见了。
    <br />
    但新的在这里。
    <br />
    春天是个美丽的时节。
    <div class="topic-content" v-html="MDContent"></div>
  </BlockArea>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue';
import marked from 'marked';

export default defineComponent({
  name: 'article-list',

  setup() {
    const MDContent = computed(() => {
      return marked('# 标题 \n *字体* \n **字体**' || '', {
        sanitize: true,
      });
    });

    return { MDContent };
  },
});
</script>
<style lang="scss"></style>
