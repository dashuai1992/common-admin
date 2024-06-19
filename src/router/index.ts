import { createRouter, createWebHistory } from 'vue-router';
import { isAuthenticated, getUserPermission, resetAuthInfo } from '@/stores/auth.ts';
import staticRoutes, { layoutRoute } from './static.ts';

// 按url路径来加载组件
const modules = import.meta.glob('@/views/**/*.vue');
const loadComponent = (url: string) => {
    if(url){
        return modules[`/src/views/${url}.vue`];
    } else {
        return undefined;
    }
};

const router = createRouter({
    history: createWebHistory(import.meta.env.VITE_APP_BASE_CONTEXT),
    routes: staticRoutes,
    
});

// 定义一个标识来标记是否需要重新加载路由
let needLoadRoute = true;

const removeRoute = () => {
  needLoadRoute = true;
  resetAuthInfo();
  if(router.getRoutes().length > 1) {
      router.removeRoute("Home");
  }
}

const convertToRoute = (permissions: any[]) => {
  const permissionRoutes: any = [];
  if(!permissions || permissions.length === 0){
      return permissionRoutes;
  }
  permissions?.forEach((permission: any) => {
    if(!permission.path){
        return;
    }
    if((!permission.component || !loadComponent(permission.component))){
        const route = {
          ...permission, 
          children: (!permission.children || permission.children.length < 1) ? [] : convertToRoute(permission.children)
        };
        permissionRoutes.push(route);
    } else {
        const route = {
          ...permission, 
          component: loadComponent(permission.component), 
          children: (!permission.children || permission.children.length < 1) ? [] : convertToRoute(permission.children)
        };
        permissionRoutes.push(route)
    }
  });
  return permissionRoutes;
};

const loadRoute = (permissions: any[]) => {
  needLoadRoute = false;
  return {
    ...layoutRoute, 
    children: layoutRoute.children.concat(convertToRoute(permissions))
  };
};

export const addRoute = (permissions: any[]) => {
  router.addRoute(loadRoute(permissions));
};

router.beforeEach((to, from) => {
  if(needLoadRoute && isAuthenticated()){
    addRoute(getUserPermission())
    return to.fullPath;
  }
  if(to.name === "Login") {
    removeRoute();
  }
  if (!isAuthenticated() && to.name !== 'Login') {
    removeRoute();
    return { 
      name: 'Login', 
      query: {
        to: from.path === 'login' ? '/' : from.path
      }
    }
  }
});

export default router;