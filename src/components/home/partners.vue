<template>
    <div>
        <x-header>合作伙伴</x-header>
        <grid :cols="3" :rows="4">
            <grid-item v-for="menu in menus" :key="menu.id" :label="menu.label" :link="{ path: menu.path}">
                <img slot="icon" :src="menu.img">
            </grid-item>
        </grid>
    </div>
</template>
<script>

import { Grid, GridItem, XHeader } from 'vux'

export default {

  name: 'partners', // 合作伙伴

  components: { Grid, GridItem, XHeader },
  data () { // 局内数据
    return {
      menus: [
        { label: '长沙党建', img: require('../../assets/img/partners/csdj.png'), path: 'https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzAxNzM3NTg3OQ==&scene=123#wechat_redirect' }, // 异步加载图片
        { label: '湖南农业大学', img: require('../../assets/img/partners/hnnd.jpg'), path: 'https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MjM5NDg4NDY2OA==&scene=123#wechat_redirect' },
        { label: '开福党建', img: require('../../assets/img/partners/kfdj.jpg'), path: 'https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzA5NzQ1ODU5OQ==&scene=123#wechat_redirect' },
        { label: '思信网络', img: require('../../assets/img/partners/sxwl.jpg'), path: 'https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzIyNTE4OTk4Ng==&scene=123#wechat_redirect' },
        { label: '邵阳党建', img: require('../../assets/img/partners/sydj.jpg'), path: 'https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzU1OTEwMzc3NA==&scene=123#wechat_redirect' },
        { label: '湖南广电党建', img: require('../../assets/img/partners/hngddj.jpg'), path: 'https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzA5NjcwOTM3Mw==&scene=123#wechat_redirect' },
        { label: '浏阳党建', img: require('../../assets/img/partners/lydj.jpg'), path: 'https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzI1MjE2NTQ2Mg==&scene=123#wechat_redirect' },
        { label: '益阳党建', img: require('../../assets/img/partners/yydj.jpg'), path: 'https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzA5MTYzMTIxOQ==&scene=123#wechat_redirect' },
        { label: '长沙县党建', img: require('../../assets/img/partners/csxdj.jpg'), path: 'https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzAxNDA4NTc3NQ==&scene=123#wechat_redirect' },
        { label: '湘西党建', img: require('../../assets/img/partners/xxdj.jpg'), path: 'https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzA4NTQ5MTI3Nw==&scene=123#wechat_redirect' }
      ]
    }
  },
  computed: { // 计算属性

  },
  watch: { // 侦听器

  },
  mounted () { // 初始化函数

  }
}
</script>
<style lang="less" scoped>
@import '~vux/src/styles/1px.less';
.weui-grids {
  margin-top: 10px;
  background-color: #fff;
}
.grid-center {
  display: block;
  text-align: center;
  color: #666;
}
</style>
