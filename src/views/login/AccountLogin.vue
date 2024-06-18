<template>
<div>
    <div>
      <h1 style="margin-bottom: 0;">账号密码登录</h1>
      <p style="margin-top: 0; color: #848486;">MORECUP的小伙伴，请输入您的账号登录</p>
    </div>
    <div style="margin-top: 3rem;">
      <el-form :model="form" :rules="rules" ref="ruleFormRef">
        <el-form-item prop="account">
          <el-input size="large" v-model="form.account" placeholder="请输入账号">
            <template #prefix>
              <el-icon class="el-input__icon"><User /></el-icon>
            </template>
          </el-input>
        </el-form-item>

        <el-form-item prop="password">
          <el-input type="password" size="large" v-model="form.password" placeholder="请输入密码">
            <template #prefix>
              <el-icon class="el-input__icon"><Lock /></el-icon>
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
              手机号登录<el-icon><Right /></el-icon>
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
import login, { AccountLogin } from '@/service/login.ts'

const authStore = useAuthStore();
const form = reactive<AccountLogin>({
  account: '',
  password: '',
});
const ruleFormRef = ref();
const rules = reactive({
  account: [
    { required: true, message: '请输入账号', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
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
  router.push({name: "MobileLogin"});
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