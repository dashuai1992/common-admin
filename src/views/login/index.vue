<template>
  <div class="login-page center">
    <div class="login-panel">
      <div class="divide-50 center panel-left ">
        <div class=" center login-welcome-pic">
          插图
        </div>
      </div>
      <div class="divide-50 center panel-right ">
        <div class="w80 login-form ">
          <div class="center w100 form-title ">
            <h1>SIGN IN</h1>
          </div>
          <div class="form-body">
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
            </el-form>
            <el-alert v-if="errorMsg.show" title="登录失败" :description="errorMsg.msg" type="error" show-icon @close="onCloseAlert"/>
          </div>

          <div class="to-sign-up">
            去注册吧
          </div>
        </div>
      </div>
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

<style scoped lang="scss">
.login-page {
  width: 100%;
  height: 100vh;
  // background: linear-gradient(to left top, #515BC6, #AC59BD);
  padding: 32px;
}
.login-panel {
  border-radius: .5rem;
  box-shadow: 0 0 32px #3c3b3b;
  width: 960px;
  height: 640px;
  background-color: #FFF;
  display: flex;
  background-color: rgba(21, 21, 21, 0.2);
}

.login-welcome-pic {
  min-width: 320px;
  min-height: 320px;
  border-radius: 50%;
  background-color: beige;
}

@media screen and (max-width: 1080px) {
  .login-page {
    width: auto;
  }
  .login-panel {
    max-width: 480px;
  }
  .panel-left {
    display: none;
  } 
  .panel-right {
    width: 100%;
    padding: 32px;
    .login-form {
      width: 100%;
    }
  }
}


</style>