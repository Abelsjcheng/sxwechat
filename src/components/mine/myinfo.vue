<template>
    <div v-transfer-dom>
        <popup v-model="showpop" position="right" width="100%">
          <x-header :left-options="{preventGoBack: true}" @on-click-back="backpage">我的资料</x-header>
            <div class="position-horizontal-demo">
                <group style="display:block;margin-top=-20px;">
                    <!-- <cell style="border-bottom:3px solid #095;border-radius: 5%;">
                        <span class="vux-close" @click="show = false" ></span>
                    </cell> -->
                    <cell title="头像">
                        <img :src="src" style="height:39px;width:39px;">
                    </cell>
                    <x-input title = "姓名:" placeholder="请输入姓名" v-model="rename" text-align="right" is-type="china-name" @on-blur="onBlur"  @on-enter="onEnter" @on-change="change" :show-clear="true" @on-focus="onFocus"></x-input>
                    <x-input title = "身份证号:" placeholder="请输入身份证号" v-model = "IdCard" text-align= "right" @on-blur="onBlur"  @on-enter="onEnter" @on-change="change" :show-clear="true" @on-focus="onFocus"></x-input>
                    <x-input title = "手机号码:" placeholder="请输入手机号码" v-model="phone" text-align= "right" is-type="china-mobile" @on-blur="onBlur"  @on-enter="onEnter" @on-change="change" :show-clear="true" @on-focus="onFocus"></x-input>
                    <selector title = "是否为党员:" placeholder= "请选择是否为党员" v-model="party" direction="rtl" name="district" :options="list2" @on-change="onChange"></selector>
                    <selector title = "所属地区:" placeholder= "请选择所属地区" v-model="addressValue" direction="rtl" name="district" :options="area" @on-change="onChange"></selector>
                    <x-input title = "用户昵称:" placeholder="请输入昵称" v-model="name" text-align= "right" @on-blur="onBlur"  @on-enter="onEnter" @on-change="change" :show-clear="true" @on-focus="onFocus"></x-input>
                    <selector title = "性别:" placeholder= "请选择性别"  v-model="gender" direction="rtl" name="district" :options="list1" @on-change="onChange"></selector>
                    <datetime title = "出生日期:" placeholder="出生日期" v-model="time"></datetime>
                    <x-input title = "电子邮箱:" placeholder="请输入邮箱地址" v-model="email" text-align="right" is-type="email" @on-blur="onBlur"  @on-enter="onEnter" @on-change="change" :show-clear="true" @on-focus="onFocus"></x-input>
                    <x-textarea title = "个人说明:" placeholder = "请填写详细信息" v-model="value"  :max="200"></x-textarea>
                    <x-button class="vux-save" @click.native="closepop" plain type="primary">保存并退出</x-button>
                </group>
            </div>
        </popup>
    </div>
</template>
<script>
import { Popup, XHeader, XButton, Group, Cell, XInput, Selector, Datetime, XTextarea, ChinaAddressData, TransferDom } from 'vux'
export default {
  name: 'myinfo',
  directives: {
    TransferDom
  },
  components: { Popup, XHeader, XButton, Group, Cell, XInput, Selector, Datetime, XTextarea },
  data () {
    return {
      src: require('../../assets/img/my.png'), // 头像
      addressData: ChinaAddressData,
      addressValue: null, // 所属地区
      rename: null, // 姓名
      IdCard: null, // 身份证号
      party: null, // 是否是党员
      phone: null, // 手机号码
      gender: null, // 性别
      name: null, // 昵称
      email: null,
      time: null,
      value: '',
      list1: [{ key: 'nan', value: '男' }, { key: 'nv', value: '女' }],
      list2: [{ key: 'yes', value: '是党员' }, { key: 'no', value: '不是党员' }],
      area: [{ key: 'muyun', value: '暮云区' }, { key: 'furong', value: '芙蓉区' }, { key: 'kaifu', value: '开福区' }],
      showpop: this.show
    }
  },
  props: ['show'],
  methods: {
    backpage () { // 关闭弹窗
      this.showpop = false
    },
    onChange (val) { // selector的 change事件
      console.log(val)
    },
    change (val) {
      console.log('on change', val)
    },
    onFocus (val, $event) {
      console.log('on focus', val, $event)
    },
    onEnter (val) { // input输入完成后点击enter(确认)事件
      console.log('click enter!', val)
    },
    onBlur (val) {
      console.log('on blur', val)
    },
    closepop () {
      this.showpop = false
      this.$emit('closepop', this.showpop)
    }
  },
  computed: {
    listenshow () {
      return this.show
    }
  },
  watch: {
    listenshow (vag) {
      this.showpop = vag
    }
  }
}

</script>
<style lang="less" scoped>
@import '~vux/src/styles/close.less';

.position-horizontal-demo {
  position: relative;
  height: 100%;
  .vux-close {
    position: absolute;
    top: 5px;
    width:100%;
    transform: translateX(-5%) translateY(0%);
    color: #212121;
  };
  .vux-save {
      padding:0px;
      font-size: 15px;
      color: #fff;
      background:#090
  }
}
</style>
