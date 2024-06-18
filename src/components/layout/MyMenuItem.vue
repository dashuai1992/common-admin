<template>
    
  <el-menu-item v-if="item?.component && !item.meta?.hidden" :index="item.path">
    <el-icon v-if="item.meta?.icon"><component :is="item.meta.icon"></component></el-icon>
    <template #title>{{ item.meta?.title }}</template>
  </el-menu-item>
    
  <el-sub-menu v-if="!item?.component && item?.children" :index="item.path">
    <template #title>
        <el-icon v-if="item.meta?.icon"><component :is="item.meta?.icon"></component></el-icon>
        <span>{{ item.meta?.title }}</span>
    </template>
    <MyMenuItem v-for="(route) in item.children" :item="route"/>
  </el-sub-menu>
</template>

<script setup name="MyMenuItem" lang="ts">
defineProps<{
  item: any
}>();


</script>