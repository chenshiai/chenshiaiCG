<template>
  <BlockArea class="self-info">
    <img class="qlogo" src="https://saomdpb.com/logo.jpg" />
    <span class="nickname">ChenShiAi</span>
    <div class="motto">
      In this world
      <br />
      <span style="margin-left: 30px">In a corner</span>
    </div>
  </BlockArea>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'self-info',
});
</script>

<style lang="scss" scoped>
.self-info {
  display: flex;
  font-size: 12px;
  justify-content: space-between;

  .qlogo {
    display: block;
    width: 40px;
    flex-shrink: 0;
  }

  .nickname {
    line-height: 40px;
  }

  .motto {
    @include theme-color(color, stroke, 4);
  }
}
</style>
