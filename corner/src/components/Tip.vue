<template>
  <teleport to="body">
    <div :class="['mask', state.tipShow ? 'mask__open' : 'mask__close']" @click="closeTip">
      <div :class="['mask-tip', state.tipType]" id="masks">{{ state.tipText }}</div>
    </div>
  </teleport>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore, mapActions } from 'vuex';

export default defineComponent({
  name: 'masks-tip',
  methods: {
    ...mapActions(['closeTip']),
  },
  setup() {
    const store = useStore();

    return {
      state: store.state,
    };
  },
});
</script>

<style lang="scss" scoped>
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
    --mask-tip-height: 40px;

    animation: blink 101ms ease;
  }

  &__close {
    opacity: 0;
    --mask-tip-height: 0px;
    z-index: -9999;
  }
}

.mask-tip {
  @include theme-color(color, stroke, 11);

  position: fixed;
  overflow: hidden;
  top: 50%;
  left: 0;
  width: 100%;
  text-align: center;
  font-size: 26px;
  line-height: var(--mask-tip-height);
  transform-origin: center;
  transition: all 100ms ease-in-out;
  transform: translateY(-50%);
  z-index: 9999;

  &::before {
    content: '';
    height: 100%;
    width: 60px;
    transform: skewX(45deg) translateZ(0);
    background-image: linear-gradient(0deg, hsla(0, 0%, 100%, 0.4), hsla(0, 0%, 100%, 0.4) 50%, hsla(0, 0%, 100%, 0.4));
    position: absolute;
    right: -20px;
    top: 0;
  }

  &::after {
    content: '';
    height: 100%;
    width: 60px;
    transform: skewX(45deg) translateZ(0);
    background-image: linear-gradient(0deg, hsla(0, 0%, 100%, 0.4), hsla(0, 0%, 100%, 0.4) 50%, hsla(0, 0%, 100%, 0.4));
    position: absolute;
    left: -20px;
    top: 0;
  }
}

.primary {
  @include theme-color(background-color, primary, 6);
}

.success {
  @include theme-color(background-color, success, 4);
}

.warn {
  @include theme-color(background-color, warn, 4);
}

.error {
  @include theme-color(background-color, error, 4);
}

.info {
  @include theme-color(background-color, stroke, 2);
}

@keyframes blink {
  0% {
    opacity: 1;
  }
  20% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
  90% {
    opacity: 0;
  }
  99% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
