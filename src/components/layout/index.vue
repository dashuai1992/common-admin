<template>
  <LayoutContainer>
    <!-- 左边布局 -->
    <LeftContainer ref="left" v-model="expanded">
      <div @click="(e) => {e.stopPropagation()}">
        <div>
          <Header>
            <!-- <HeaderLeft>左</HeaderLeft>
            <HeaderMidium>中间</HeaderMidium>
            <HeaderRight>右</HeaderRight> -->
            <HeaderMidium class="center">
              <img class="header-logo" src="@/assets/menu_top_logo.png">
            </HeaderMidium>
          </Header>
        </div>
        <div class="my-menu bs-el br8">
          <el-menu class="menu-height"
            :router="true"
            :default-active="selectedTag"
          >
            <MyMenuItem v-for="(route) in authStore.user.permissions" :item="route"/>
          </el-menu>
        </div>
      </div>
    </LeftContainer>

    <!-- 右边布局 -->
    <RightContainer>
      <Header>
        <HeaderLeft>
          <div class="toggle align-items-center">
            <el-button type="primary" plain @click="left.onOff()">
              <el-icon size="large">
                <Fold v-if="expanded" />
                <Expand v-else/>
              </el-icon>
            </el-button>
          </div>
        </HeaderLeft>
        <HeaderMidium>
          <div class="my-header-tags">
            <el-tag
              class="m5"
              v-for="(item) in tags"
              :key="item.name"
              size="large"
              :class="item.checked ? '' : 'cursor-pointer'"
              :type="item.checked ? 'primary' : 'info'" 
              :effect="item.checked ? 'dark' : 'light'" 
              :closable="item.closable"
              :round="true"
              @close="handleTagClose(item)"
              @click="handleTagClick(item)"
            >
              {{ item.name }}
            </el-tag>
          </div>
        </HeaderMidium>
        <HeaderRight class="user-info-wrapper">
          <el-dropdown trigger="click">
            <div class="user-info">
              <el-badge :hidden="false" :value="12" :max="99">
                <el-avatar shape="circle" :size="35" src="https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png" />
              </el-badge>
              <div class="user-name ellipsis">{{ authStore.user.name }}</div>
            </div>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item icon="UserFilled">用户信息</el-dropdown-item>
                <el-dropdown-item icon="ChatLineSquare">消息<el-badge :hidden="false" :value="12" :max="99"/></el-dropdown-item>
                <el-dropdown-item icon="EditPen">修改密码</el-dropdown-item>
                <el-dropdown-item icon="SwitchButton">注销</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </HeaderRight>
      </Header>
      <ContainerBody>
        <el-scrollbar>
          <div class="body-view">
            <router-view/>
          </div>
        </el-scrollbar>
      </ContainerBody>
      <div class="copy-right-info">Copyright © 2020-2024 YDS</div>
    </RightContainer>
  </LayoutContainer>
</template>

<script setup lang="ts">
import LayoutContainer from './LayoutContainer.vue';
import LeftContainer from './LeftContainer.vue';
import RightContainer from './RightContainer.vue';
import ContainerBody from './ContainerBody.vue';
import Header from './Header.vue';
import HeaderLeft from './HeaderLeft.vue';
import HeaderMidium from './HeaderMidium.vue';
import HeaderRight from './HeaderRight.vue';
import MyMenuItem from './MyMenuItem.vue';

import { watch } from 'vue';
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth.ts';

const authStore = useAuthStore();
const router  = useRouter();

interface HeaderTag {
  name: string;
  path: string;
  checked?: boolean;
  closable?: boolean;
}

const left = ref();
const expanded = ref(true);
const selectedTag = ref("");

// 记录已经打开的页面，header显示的标签tag
const tags = reactive<HeaderTag[]>([]);

const handleTagClose = (tag: HeaderTag) => {
  let index = tags.findIndex(x => compare(x, tag));
  tags.splice(index, 1);

  // 判断该tag是否是被选中的状态
  // 如果是选中的状态，需要处理页面的切换
  if (tag.checked && tags.length >= 1) {
    selectTag(tags.length - 1);
  } else {
    router.push("/");
  }
}

const handleTagClick = (tag: HeaderTag) => {
  let index = tags.findIndex(x => compare(x, tag));
  selectTag(index);
}

const newOpenTag = (tag: HeaderTag) => {
  let index = tags.findIndex(x => compare(x, tag));
  if(index < 0) {
    tags.push(tag);
    selectTag(tags.length - 1);
  } else {
    selectTag(index);
  }
}

const compare = (item: HeaderTag, target: HeaderTag) => item.path === target.path

const selectTag = (index: number) => {
  selectedTag.value = tags[index].path;
  if (tags[index].checked) {
    return;
  }
  tags.forEach(x => x.checked = false);
  tags[index].checked = true;
  router.push(tags[index].path as string);
}

watch(() => router.currentRoute.value,
  (newValue: any) => {

    if(newValue.meta?.title) {
      newOpenTag({
        name: newValue.meta.title,
        path: newValue.path,
        checked: false,
        closable: newValue.path === '/' ? false : true,
      });
    }
  },
  {immediate: true}
);
</script>

<style scoped lang="scss">
.my-menu {
  margin-top: 24px;
  padding: 8px;
  .el-menu {
    border: none;
  }
}

.header-logo {
  height: 64px;
}

.user-info-wrapper {
  :hover {
    cursor: pointer;
    background-color: #dedfe0;
  }

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
}

.copy-right-info {
  font-size: 12px;
  color: #606266;
  text-align: center;
}
</style>