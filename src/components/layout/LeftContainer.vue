<template>
  <div class="overlay" :class="{'opacity-0': (!isCollapsible && screenWidth < SCREEN_WIDTH_THRESHOLD), 'display-none': isDisplayNone}" @click="onOff">
    <div class="left" :class="{'width-0': !isCollapsible, 'display-none': isDisplayNone}">
      <div class="left-content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
const SCREEN_WIDTH_THRESHOLD = 1080;

const isCollapsible = defineModel({ type: Boolean });

const screenWidth = ref(window.innerWidth); 
const isScreenWidthLessThreshold = window.innerWidth < SCREEN_WIDTH_THRESHOLD;
isCollapsible.value = !isScreenWidthLessThreshold;
const isDisplayNone = ref(isScreenWidthLessThreshold);

const handleResize = () => {
  screenWidth.value = window.innerWidth; 
  if(screenWidth.value < SCREEN_WIDTH_THRESHOLD) {
    isDisplayNone.value = true;
    isCollapsible.value = false;
  }
}
onMounted(() => {
  window.addEventListener('resize', handleResize);
});
onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});

const onOff = () => {
  if(isDisplayNone.value) {
    isDisplayNone.value = !isDisplayNone.value;  
    setTimeout(() => {
      isCollapsible.value = !isCollapsible.value;
    }, 50);
  } else {
    isCollapsible.value = !isCollapsible.value; 
    setTimeout(() => {
      isDisplayNone.value = !isDisplayNone.value; 
    }, 200);
  }
}

defineExpose({
  onOff,
})
</script>

<style scoped lang="scss">
.left {
  height: 100%;
  padding: 16px;
  background-color: #fff;
  transition: width .2s linear; 
  width: 256px;
  overflow: hidden;
  z-index: 1001;

  .left-content {
    transition: opacity .2s linear;
  }
}

.left.width-0 .left-content {
  opacity: 0;
}

.right {
  padding: 16px;
  height: 100%;
  flex: 1;
  background-color: #fff;
}

.display-none {
  display: none;
}

.opacity-0 {
  opacity: 0;
}

.width-0 {
  width: 0;
}

@media screen and (max-width: 1080px) {
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1000;
    background-color: rgba(0, 0, 0, 0.5);
    transition: opacity .2s linear; 
  }
}
</style>