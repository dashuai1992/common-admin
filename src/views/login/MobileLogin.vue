<template>
  <div>
    <div>
      <h1 style="margin-bottom: 0;">手机号登录</h1>
      <p style="margin-top: 0; color: #848486;">MORECUP的小伙伴，请输入您的手机号登录</p>
    </div>
    <div style="margin-top: 3rem;">
      <el-form :model="form" :rules="rules" ref="ruleFormRef">
        <el-form-item prop="phoneNumber">
          <el-input size="large" v-model="form.mobile" placeholder="请输入您的手机号">
            <template #prefix>
              <el-icon class="el-input__icon"><Iphone /></el-icon>
            </template>
          </el-input>
        </el-form-item>

        <el-form-item prop="verifyCode">
          <el-input size="large" v-model="form.verifyCode" placeholder="请输入短信验证码">
            <template #prefix>
              <el-icon class="el-input__icon"><Message /></el-icon>
            </template>
            <template #suffix>
              |
              <el-button type="primary" @click="sendVerifyCode" link>发送验证码</el-button>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button style="width: 100%;" type="primary" size="large" round @click="onSubmit(ruleFormRef)">登录</el-button>
        </el-form-item>
        <el-form-item>
          <el-button 
            @click="onSwitchLogin"
            style="width: 100%;" 
            type="primary" 
            size="large" 
            link >
              账号密码登录<el-icon><Right /></el-icon>
          </el-button>
        </el-form-item>
      </el-form>
      <el-alert v-if="errorMsg.show" title="登录失败" :description="errorMsg.msg" type="error" show-icon @close="onCloseAlert"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import router from '@/router/index.ts';
import { useAuthStore } from '@/stores/auth.ts';
import { reactive, ref } from 'vue'
import login, {MobileLogin} from '@/service/login.ts'

const authStore = useAuthStore();
const form = reactive<MobileLogin>({
  mobile: '',
  verifyCode: '',
});
const ruleFormRef = ref();
const rules = reactive({
  phoneNumber: [
    { required: true, message: '请输入手机号', trigger: 'blur' },
    { pattern: /^1[345678]\d{9}$/, message: '请输入正确的手机', trigger: 'blur'},
  ],
  verifyCode: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { len: 4, message: '请输入正确的验证码', trigger: 'blur' },
  ],
});

const errorMsg = reactive({
  show: false,
  msg: ''
});

const onCloseAlert = () => {
  errorMsg.show = false;
  errorMsg.msg = '';
}

const onSwitchLogin = () => {
  router.push({name: "AccountLogin"});
}

const sendVerifyCode = () => {
  console.log('sendVerifyCode');
}

const onSubmit =  async (formEl: any) => {
  if (!formEl) return;

  await formEl.validate((valid: any) => {
    if (valid) onLogin();
  });
  
}

const onLogin = () => {
  login(form).then((resp: any) => {
    if(resp.code !== '0'){
      errorMsg.show = true;
      errorMsg.msg = resp.msg;
      return;
    }
    authStore.setUserPermissions(resp.data);
    let to = router.currentRoute.value.query.to;
    if (!to) {
      to = '/';
    }
    router.replace({path: to as string});
  })
}
</script>