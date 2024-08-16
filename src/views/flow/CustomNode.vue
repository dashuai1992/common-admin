<template>
  <div class="my-node">
    <Handle :class="{ 'opacity-0': !props.data.showHandle }" id="target-1" type="target" :position="Position.Top" />
    <Handle :class="{ 'opacity-0': !props.data.showHandle }" id="target-2" type="target" :position="Position.Left" />
    <Handle :class="{ 'opacity-0': !props.data.showHandle }" id="source-1" type="source" :position="Position.Bottom" />
    <Handle :class="{ 'opacity-0': !props.data.showHandle }" id="source-2" type="source" :position="Position.Right" />
    <div @input="updateContent" class="label-input" :class="{'nodrag hover-cusor-text': props.data.editable}" :contenteditable="props.data.editable" placeholder="文字">
      {{ props.data.label }}
    </div>
  </div>
</template>

<script setup lang="ts">
import type { NodeProps } from '@vue-flow/core';
import { Position,Handle, useVueFlow } from '@vue-flow/core';
const vueFlowInstance = useVueFlow();
const props = defineProps<NodeProps<any, any>>();

console.log(props)

const updateContent = (event: any) => vueFlowInstance.updateNodeData(props.id, { label: event.target.innerText }) ;
</script>

<style scoped lang="scss">
.label-input {
  background-color: white;
  border-radius: 4px;
  min-width: 50px;
  outline: none;
  border: none;
  line-height: normal;
  padding: 2px;
  color: black;
}
.label-input:empty:before {
  content: attr(placeholder);
}

.label-input:focus:before {
  content: none;
}

.hover-cusor-text {
  &:hover {
    cursor: text;
  }
}

</style>