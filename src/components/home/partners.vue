<template>
    <div>
        <grid :cols="3" :rows="4">
            <grid-item v-for="menu in menus" :key="menu.id" :label="menu.label" :link="{ url: menu.url}">
                <img slot="icon" :src="menu.img">
            </grid-item>
        </grid>
        
    </div>
</template>
<script>

import { Grid, GridItem } from 'vux'

export default {
    
    name: 'partners',//合作伙伴

    components: { Grid, GridItem },
    data() { // 局内数据
        return{
            menus: [
                { label: '长沙党建', img: require('../../assets/img/partners/csdj.png'), url: 'https://mp.weixin.qq.com/mp/profile_ext?' }, // 异步加载图片
                { label: '湖南农业大学', img: require('../../assets/img/partners/hnnd.jpg'), url: 'https://mp.weixin.qq.com/mp/profile_ext?' },
                { label: '开福党建', img: require('../../assets/img/partners/kfdj.jpg'), url: 'https://mp.weixin.qq.com/mp/profile_ext?' },
                { label: '思信网络', img: require('../../assets/img/partners/sxwl.jpg'), url: 'https://mp.weixin.qq.com/mp/profile_ext?' },
                { label: '邵阳党建', img: require('../../assets/img/partners/sydj.jpg'), url: 'https://mp.weixin.qq.com/mp/profile_ext?' },
                { label: '湖南广电党建', img: require('../../assets/img/partners/hngddj.jpg'), url: 'https://mp.weixin.qq.com/mp/profile_ext?' },
                { label: '浏阳党建', img: require('../../assets/img/partners/lydj.jpg'), url: 'https://mp.weixin.qq.com/mp/profile_ext?' },
                { label: '益阳党建', img: require('../../assets/img/partners/yydj.jpg'), url: 'https://mp.weixin.qq.com/mp/profile_ext?' },
                { label: '长沙县党建', img: require('../../assets/img/partners/csxdj.jpg'), url: 'https://mp.weixin.qq.com/mp/profile_ext?' },
                { label: '湘西党建', img: require('../../assets/img/partners/xxdj.jpg'), url: 'https://mp.weixin.qq.com/mp/profile_ext?' }
            ],
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

