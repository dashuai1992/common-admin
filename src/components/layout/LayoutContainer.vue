<template>
  <div class="layout-wrapper">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.layout-wrapper {
  height: 100vh;
  display: flex;
  flex-direction: row;
}
</style>