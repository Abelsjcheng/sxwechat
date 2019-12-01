<template>
    <div>
        <div>
            <swiper loop auto :list="village_list" :index="village_index" @on-index-change="village_onIndexChange">
            </swiper>
        </div>
        <div>
            <p>星辰在线5月27日讯（通讯员 徐拓）<span style="color: rgb(102, 102, 102);"></span></p>
        </div>
    </div>
</template>
<script>
import { Swiper } from 'vux' // 导入组件

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
    components: { Swiper }, // 注册组件
    data () {
        return {
            village_list: urlList,
            village_index: 0,
            swiperItemIndex: 1,
            title: '',
            content: ''
        }
    },
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
</style>