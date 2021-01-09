<template>
  <teleport to="body">
    <div class="masks" id="masks">
      <div class="mask-svg">
        <div class="mask-text">Now Loading···</div>
        <svg
          class="lds-message"
          width="80px"
          height="80px"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid"
        >
          <g transform="translate(20 50)">
            <circle cx="0" cy="0" r="8" fill="#fff" transform="scale(0.99275 0.99275)">
              <animateTransform
                attributeName="transform"
                type="scale"
                begin="-0.375s"
                calcMode="spline"
                keySplines="0.3 0 0.7 1;0.3 0 0.7 1"
                values="0;1;0"
                keyTimes="0;0.5;1"
                dur="1s"
                repeatCount="indefinite"
              ></animateTransform>
            </circle>
          </g>
          <g transform="translate(40 50)">
            <circle cx="0" cy="0" r="8" fill="#fff" transform="scale(0.773605 0.773605)">
              <animateTransform
                attributeName="transform"
                type="scale"
                begin="-0.25s"
                calcMode="spline"
                keySplines="0.3 0 0.7 1;0.3 0 0.7 1"
                values="0;1;0"
                keyTimes="0;0.5;1"
                dur="1s"
                repeatCount="indefinite"
              ></animateTransform>
            </circle>
          </g>
          <g transform="translate(60 50)">
            <circle cx="0" cy="0" r="8" fill="#fff" transform="scale(0.42525 0.42525)">
              <animateTransform
                attributeName="transform"
                type="scale"
                begin="-0.125s"
                calcMode="spline"
                keySplines="0.3 0 0.7 1;0.3 0 0.7 1"
                values="0;1;0"
                keyTimes="0;0.5;1"
                dur="1s"
                repeatCount="indefinite"
              ></animateTransform>
            </circle>
          </g>
          <g transform="translate(80 50)">
            <circle cx="0" cy="0" r="8" fill="#fff" transform="scale(0.113418 0.113418)">
              <animateTransform
                attributeName="transform"
                type="scale"
                begin="0s"
                calcMode="spline"
                keySplines="0.3 0 0.7 1;0.3 0 0.7 1"
                values="0;1;0"
                keyTimes="0;0.5;1"
                dur="1s"
                repeatCount="indefinite"
              ></animateTransform>
            </circle>
          </g>
        </svg>
      </div>
    </div>
  </teleport>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'loading',
  setup() {
  },
});
</script>

<style lang="scss">
.masks {
  position: fixed;
  overflow: hidden;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
  z-index: 998;
  background-color: $theme-view;
  transition: all 500ms ease;
}

.mask-svg {
  position: relative;
  width: 100%;
  height: 100vh;

  .lds-message,
  .mask-text {
    position: absolute;
    top: calc(50% - 40px);
    left: calc(50% - 40px);
    z-index: 1000;
    transform: scale(1.4);
  }

  .mask-text {
    color: #fff;
    font-size: 3em;
    top: 40%;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>