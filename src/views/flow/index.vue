<template>
  <div>
    <VueFlow fit-view-on-init :connection-mode="ConnectionMode.Loose" class="flow-container">
      <Panel position="top-left">
        <el-button type="primary" size="default" @click="addNode">添加节点</el-button>
        <el-button type="primary" size="default" @click="save">保存</el-button>
      </Panel>
      <Background></Background>
      <MiniMap></MiniMap>
      <Controls></Controls>

      <template #node-custom="customNodeProps">
        <CustomNode v-bind="customNodeProps" />
      </template>

      <template #node-irregular-shape="irregularShapeNodeProps">
        <IrregularShapeNode v-bind="irregularShapeNodeProps" />
      </template>
    </VueFlow>
  </div>
</template>

<script setup lang="ts">
// import { ref, watch } from 'vue';
import { useVueFlow, VueFlow, Panel, ConnectionMode } from '@vue-flow/core';
import type { Node } from '@vue-flow/core';
import { Background } from '@vue-flow/background';
import { MiniMap } from '@vue-flow/minimap';
import { Controls } from '@vue-flow/controls';

import '@vue-flow/core/dist/style.css';
import '@vue-flow/core/dist/theme-default.css';
import '@vue-flow/minimap/dist/style.css';
import '@vue-flow/controls/dist/style.css';

import CustomNode from './CustomNode.vue';
import IrregularShapeNode from './IrregularShapeNode.vue';
type CustomNode = Node<any, any, 'custom'>;

const latestPosition = {x: 150, y: 50};

// vue-flow 实例
const vueFlowInstance = useVueFlow();

const addNode = () => {
  const id = Date.now().toString();
  vueFlowInstance.addNodes({
    id,
    // type: 'custom',
    type: 'irregular-shape',
    position: { ...latestPosition },
    data: { label: '新建节点', editable: false, showHandle: false },
    width: 100,
    height: 100,
  });
  latestPosition.x += 10;
  latestPosition.y += 10;
  vueFlowInstance.addNodes({
    id: (Date.now()+1).toString(),
    type: 'custom',
    // type: 'irregular-shape',
    position: { ...latestPosition },
    data: { label: '新建节点', editable: false, showHandle: false },
  });
  latestPosition.x += 10;
  latestPosition.y += 10;
}

const save = () => {
  console.log(vueFlowInstance.getNodes.value);
}

// 开始连接时显示handle
vueFlowInstance.onNodeMouseEnter((event: any) => {
  vueFlowInstance.updateNodeData(event.node.id, { showHandle: true });
});

// 结束时不显示handle
vueFlowInstance.onNodeMouseLeave((event: any) => {
  vueFlowInstance.updateNodeData(event.node.id, { showHandle: false });
});

vueFlowInstance.onConnect(({ source, target, sourceHandle, targetHandle }) => {
  vueFlowInstance.addEdges({
    type: 'smoothstep',
    animated: true,
    source,
    target,
    sourceHandle,
    targetHandle,
  });
});

// 监听节点变化
vueFlowInstance.onNodesChange((event: any[]) => {
  // console.log(event);
  event.forEach(change => {
    if (change.type === 'select' && !change.selected) {
      onUnSelected(change.id); 
    }
  })
});

// 双击开启编辑
vueFlowInstance.onNodeDoubleClick((event: any) => {
  vueFlowInstance.updateNodeData(event.node.id, { editable: true })
  console.log(event);
});

// 不选中节点的时候禁用编辑
const onUnSelected = (nodeId: any) => {
  vueFlowInstance.updateNodeData(nodeId, { editable: false })
};
  

</script>

<style scoped lang="scss">
.flow-container {
  width: 100%;
  height: calc(100vh - 140px);
}

::v-deep .vue-flow__node-custom {
  color: white;
  border: 1px solid purple;
  border-radius: 4px;
}

::v-deep .vue-flow__node-custom.selected {
  background-color: red;
}

</style>