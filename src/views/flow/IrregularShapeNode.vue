<template>
  <div class="my-node">
    <Handle :class="{ 'opacity-0': !props.data.showHandle }" id="target-1" type="target" :position="Position.Top" />
    <div class="content">
      {{ props.data.label }}
    </div>
  </div>
</template>

<script setup lang="ts">
import type { NodeProps } from '@vue-flow/core';
import { Position,Handle } from '@vue-flow/core';

const props = defineProps<NodeProps<any, any>>();

</script>

<style scoped lang="scss">
.vue-flow__handle-top {
  top: 50%;
}

.content {
  background-color: transparent;
}

.my-node {
  background-image: url('@/assets/devops.png');
  background-size:100% 100%;
  background-repeat:no-repeat;

  height: 100%;
  width: 100%;
  align-content: center;

}
</style>