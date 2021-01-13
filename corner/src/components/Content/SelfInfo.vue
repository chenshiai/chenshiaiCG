<template>
  <div class="block-area self-info">
    <img class="qlogo" src="../../assets/logo.jpg" />
    <span class="nickname">Chen ShiAi</span>
    <div class="motto">
      In this world
      <br />
      <span style="margin-left: 30px">In a corner</span>
    </div>
  </div>
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
}
.qlogo {
  display: block;
  width: 40px;
  margin-right: 10px;
}
.nickname {
  line-height: 40px;
  margin-right: 20px;
}

.motto {
  @include theme-color(color, stroke, 4);
}
</style>
