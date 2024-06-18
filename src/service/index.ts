import axios from 'axios';
import { useAuthStore } from '@/stores/auth.ts';
import router from '@/router/index.ts';
const authStore = useAuthStore();

const service = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 5000
})

const reqError = (error: any) => {
    console.log(error) // for debug
}

const reqConfig = (config: any) => {
  config.headers['X-Token'] = authStore.user.token;
  return config
}

const respConfig = (response: any) => {
  if (response.data?.code === '01') {
    authStore.user = {id: "", name: '', account: '', role: '', token: '',permissions: [{}]};
    router.push({path: "/login"});
  } else if (response.data?.code !== '0') {
    ElMessage({
      type: 'error',
      message: response.data.msg,
    })
  } 

  return response.data;
}

const respError = (error: any) => {
  console.log('err' + error) // for debug
}

service.interceptors.request.use( reqConfig, reqError)
service.interceptors.response.use( respConfig, respError )

export default service