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
    return service.post('/api/mobile-login', loginType);
  } else {
    return service.post('/api/account-login', loginType);
  }
}

export const logout = (user: {account: string}) => {
  return service.post('/api/logout', user);

}

export default login;

