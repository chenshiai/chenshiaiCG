<template>
  <teleport to="body">
    <div
      class="mask"
      :style="{
        'z-index': data.zIndex,
        opacity: data.opacity,
      }"
      @click="handelHeight"
    >
      <div
        :style="{
          '--mask-tip-height': data.tipHeight,
        }"
        class="mask-tip"
        id="masks"
      >
        Now Loading
      </div>
    </div>
  </teleport>
</template>

<script lang="ts">
import { defineComponent, reactive, nextTick, computed } from 'vue';

export default defineComponent({
  name: 'masks-tip',
  setup() {
    const data = reactive({
      show: true,
      tipHeight: '54px',
      zIndex: computed(() => (data.show ? '9999' : '-9999')),
      opacity: computed(() => (data.show ? 1 : 0)),
    });
    const handelHeight = () => {
      if (data.show) {
        data.show = false;
        data.tipHeight = '2px';
      } else {
        data.show = true;
        data.tipHeight = '54px';
      }
    };
    return { data, handelHeight };
  },
});
</script>

<style lang="scss">
.mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  user-select: none;
}

.mask-tip {
  --mask-tip-height: 2px;

  @include theme-color(color, stroke, 11);
  @include theme-color(background-color, primary, 1);

  position: fixed;
  overflow: hidden;
  top: 50%;
  left: 0;
  width: 100%;
  text-align: center;
  font-size: 32px;
  line-height: var(--mask-tip-height);
  transform-origin: center;
  transition: all 0.1s ease-in-out;
  transform: translateY(-50%);
  opacity: 2;
}
</style>