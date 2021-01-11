<template>
  <teleport to="body">
    <div :class="['mask', data.show ? 'mask__open' : 'mask__close']" @click="handelHeight">
      <div class="mask-tip" id="masks">Now Loading</div>
    </div>
  </teleport>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';

interface IData {
  show: boolean;
}

export default defineComponent({
  name: 'masks-tip',
  setup() {
    const data = reactive<IData>({
      show: true,
    });
    const handelHeight = () => {
      data.show = !data.show;
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
  --mask-tip-height: 0px;

  &__open {
    z-index: 9999;
    --mask-tip-height: 54px;
  }

  &__close {
    --mask-tip-height: 0px;
    z-index: -9999;
  }
}

.mask-tip {
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
}
</style>
