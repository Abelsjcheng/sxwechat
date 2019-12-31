<template>
  <div class="container">
    <header class="header">注册</header>
    <div class="content">
      <van-field
        v-model="username"
        placeholder="请输入手机号"
        clearable
        :error-message="usernamemsg"
      />
      <van-field
        v-model="password"
        type="password"
        clearable
        placeholder="请输入密码"
        error-message="密码格式错误"
      />
      <van-field
        v-model="code"
        center
        clearable
        placeholder="请输入短信验证码"
        error-message="验证码格式错误"
      >
        <van-button slot="button" size="small" type="primary">发送验证码</van-button>
      </van-field>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Field, Button } from 'vant'

Vue.use(Field)
Vue.use(Button)
export default {
    name: 'login',
    components: { Field, Button },
  data () {
    return {
      username: '13158725669',
      password: '123456',
      code: ''
    }
  },
  computed: {
    usernamemsg () {
      if (this.username === '') {
        return ''
      } else if  (!/^[1][3,4,5,7,8][0-9]{9}$/.test(this.username)) {
        return '手机号码格式错误'
      } else {
        return ''
      }
    }
  }
}
</script>

