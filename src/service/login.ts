import MobileLogin from '@/views/login/MobileLogin.vue';
import service from './index.ts'

export interface MobileLogin {
  mobile: string,
  verifyCode: string,
}

export interface AccountLogin {
  account: string,
  password: string,
}

function inMobileLogin(loginType: any): loginType is MobileLogin {
  return typeof loginType.mobile === 'string' 
    && typeof loginType.verifyCode === 'string';
}

const login = (loginType: MobileLogin | AccountLogin) => {
  if(inMobileLogin(loginType)) {
    return service.get('/mobile-login', {params: {loginType}});
  } else {
    return service.get('/account-login', {params: {loginType}});
  }
}

export const logout = (user: {account: string}) => {
  return service.get('/logout', {params: {user}});

}

export default login;

