<template>
  <Layout />
</template>

<script setup lang="ts">
import Layout from '@/components/layout/index.vue';

</script>

<style scoped lang="scss">
.toggle {
  width: 16px;
  padding: 16px;
  transition: transform .2s linear;
}

.toggle.fold {
  transform: rotate(90deg);
}
</style>
