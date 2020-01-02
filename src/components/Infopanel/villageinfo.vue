<template>
<!-- 美丽乡村详情页面 -->
    <div style="margin:3px 5px;">
        <div>
            <div style="text-align:center;font-weight:bold;font-size:18px;margin:10px 0;">
                 <h3>{{villageinfo.title}}</h3>
            </div>
            <span>{{villageinfo.meta.other}} | {{villageinfo.meta.date}}</span>
            <hr>
            <img :src="villageinfo.src" style="height:200px;width:100%; margin-top:5px;">
        </div>
        <div style="matgin-top:50px;text-indent:2em;">
            <p v-html="villageinfo.content"></p>
        </div>
        <hr>
        <div style="float:right;">
            <span>此文阅读量：{{villageinfo.readtotal}}</span>
        </div>
    </div>
</template>
<script>

import { Swiper, XHeader } from 'vux' // 导入组件

const baseList = [{
  url: 'javascript:',
  img: require('../../assets/img/village/one.jpg'),
  title: '茶坑'
}, {
  url: 'javascript:',
  img: require('../../assets/img/village/two.jpg'),
  title: '梁启超故居'
}, {
  url: 'javascript:',
  img: require('../../assets/img/village/three.jpg'),
  title: '梁启超纪念馆',
  fallbackImg: '../../assets/img/village/one.jpg'
}]
const urlList = baseList.map((item, index) => ({
  url: '/home_tourism',
  // 转向农家乐旅游信息
  img: item.img,
  fallbackImg: item.fallbackImg,
  title: `${item.title}`
}))

export default {
    name: 'villageinfo', //美丽乡村详情
    components: { Swiper, XHeader }, // 注册组件
    data () {
        return {
            village_list: urlList,
            village_index: 0,
            swiperItemIndex: 1,
            title: ''
        }
    },
    props: ['villageinfo'],
    ready () {

    },
    methods: {
        onSwiperItemIndexChange (index) {
        console.log('demo item change', index)
        },
        village_onIndexChange (index) {
        this.village_index = index
        }
    },
    mounted () {
    }
}
</script>
<style scoped>
.link-top {
   width: 50%;
   height: 5px;
    /* border-top: solid #cccccc 1px; */
        }
.swiper-demo-img img {
  width: 100%;
}
.weui-loadmore{
    margin: auto auto;
}
.com_content{
    margin:3px;
    text-indent:2em;
    font-size:14px;
}
span{
    color:#919191;
}
</style>