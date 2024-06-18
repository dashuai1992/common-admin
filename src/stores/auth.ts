import { defineStore, acceptHMRUpdate } from 'pinia';
import { addRoute } from '@/router';

const role: any = {};

const noAuthUser = () => {
  return {
    id: '',
    name: '',
    account: '',
    role,
    token: '',
    permissions: [{}],
  }
} 

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    user: noAuthUser(),
  }),
  persist: {
    storage: sessionStorage,
  },
  actions: {
    isAuthenticated() {
      return this.user.token ? true : false
    },
    resetAuthInfo() {
      this.user = noAuthUser();
    },
    setUserPermissions(user: any) {
      addRoute(user.permissions);
      this.user = {...user};
    }
  }
});

export const isAuthenticated = () => {
  return useAuthStore().isAuthenticated();
}

export const getUserPermission = () => {
  return useAuthStore().user.permissions;
}

export const resetAuthInfo = () => {
  return useAuthStore().resetAuthInfo();
}

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot))
}