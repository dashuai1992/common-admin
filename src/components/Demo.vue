<template>
  <div class="side-menu-wrapper">
    <div id="side-menu" class="side-menu" :class="{collapsible: isCollapsible}">
      <ul>
        <li class="menu-item">
          <i class="ri-home-line">-</i>
          <span class="menu-text">首页</span>
        </li>
      </ul>
      <li class="menu-item toggle"  @click="isCollapsible = !isCollapsible">
        <i class="ri-arrow-left-line">-</i>
      </li>

    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue';
const isCollapsible = ref(false);
</script>

<style scoped lang="scss">
* {
  margin: 0
}

.side-menu-wrapper {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

ul,
li {
  padding: 0;
  list-style: none;
}

.side-menu {
  width: 100px;
  height: 520px;
  background-color: #057dfc;
  border-radius: 8px;
  padding: 10px;
  position: relative;
  box-shadow: 3px 4px 16px rgba(4, 106, 214, 0.4);
  transition: width 0.2s linear;
}

.menu-item {
  height: 42px;
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 12px;
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;
  white-space: nowrap;
  position: relative;
  transition: background-color 0.2s linear;
}

.menu-text {
  margin-left: 8px;
  transition: opacity 0.2s linear;;
}

.menu-item:hover {
  background-color: #046fe0;
}

.toggle {
  position: absolute;
  width: calc(100% - 20px);
  padding: 0;
  bottom: 10px;
  justify-content: center;

}

.toggle i {
  transition: transform 0.2s linear;
}

.side-menu.collapsible {
  width: 42px;
}

.side-menu.collapsible .toggle i {
  transform: rotate(180deg);
}

.side-menu.collapsible .menu-text {
  opacity: 0;
}



</style>