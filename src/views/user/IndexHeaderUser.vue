<template>
  <el-dropdown trigger="click" @command="handleCommand">
    <div class="user-info">
      <el-badge :hidden="false" :value="12" :max="99">
        <el-avatar shape="circle" :size="35" src="https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png" />
      </el-badge>
      <div class="user-name ellipsis">{{ authStore.user.name }}</div>
    </div>
    <template #dropdown>
      <el-dropdown-menu size="large">
        <el-dropdown-item v-for="(item, key) in userInfoDropDownItems" 
          :key="key" 
          :command="item.path" 
          :icon="item.meta.icon">
            {{ item.meta.title }}
            <el-badge v-if="item.name === 'Message'" class="mark" :value="12" />
        </el-dropdown-item>
        <el-dropdown-item command="/login" icon="SwitchButton">注销</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth.ts';
import { ref } from 'vue';

const authStore = useAuthStore();
const router  = useRouter();

const userInfoDropDownItems = ref<any[]>([]);
authStore.user.permissions.forEach((item: any) => {
  if (item.name === 'User') {
    item.children.forEach((children :any) => {
      if (children.meta.hidden) {
        userInfoDropDownItems.value.push(children);
      }
    });
  }
})

const handleCommand = (command: string) => {
  router.push(command);
}
</script>

<style lang="scss" scoped>
.user-info {
  display: flex; 
  align-items: center;
  padding: 5px;

  .user-name {
    margin-left: 5px;
    color: #606266; 
    font-size: 12px; 
    max-width: 60px;
  }
}
</style>