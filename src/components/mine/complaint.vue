<template>
<div>
    <div v-transfer-dom>
        <popup v-model="showpop2" position="right" width="100%">
         <!-- <x-header :left-options="{preventGoBack: true}" @on-click-back="backpage" v-if="title">{{title}}</x-header> -->
           <div>
            <Group>
               <flexbox>
                 <flexbox-item>
                  <x-button style="margin-left:5px;" @click.native="backpage"  type="warn">取消</x-button>
                </flexbox-item>
                <flexbox-item style="margin-right:5px;">
                  <x-button @click.native="pushcomp" type="primary">发送</x-button>
                </flexbox-item>
              </flexbox>
              <x-input v-model="compTitle" placeholder="标题"></x-input>
              <x-textarea :max="300" name="description" :height="160" :rows="8" :cols="30" v-model="compText" placeholder="请输入您的投诉建议"></x-textarea>
              <div>
                <!-- 图片上传 -->
                <addimg /> 
              </div>
            </Group>
            <toast v-model="showtoast" type="text" :time="800" width="100%" is-show-mask :text="showComtoasttext" position="top"></toast>
        </div>
        </popup>
    </div>
</div>
</template>
<script>

import addimg from '../../components/Infopanel/addimg.vue'
import { Popup, XButton, Flexbox, XInput, FlexboxItem, XHeader, TransferDom, XTextarea, Group, Toast } from 'vux'
export default {
  name: 'complaint',
  directives: {
    TransferDom
  },
  components: { Popup, XButton, Flexbox, XInput, FlexboxItem, XHeader, XTextarea, Group, Toast, addimg },
  data () {
    return {
      show: false,
      showpop2: this.show2,
      compText: '',
      uname: '王李沙',
      compshow: false, // pop弹窗
      emotionshow: false, // 表情框显示
      showtoast: false, // 评论输入提示
      fontclass: "",
      showComtoasttext: '请输入内容',
    }
  },
  props: ['show2'],
  methods: {
    backpage () { // 关闭我的消息弹窗
      this.showpop2 = false
    },
    closepop1 () {
      this.showpop2 = false
      this.$emit('closepop2', this.showpop2)
    },
    backpage () { // 关闭详情弹窗
      this.show2 = false
    },
    pushcomp () {
      let that = this
      if (this.comptText === '') {
        this.showComtoasttext = '请输入您的投诉建议'
        this.showtoast = true
      }
      else{
       // let comp = { 
        //  pcid: this.infocontent.poinid, 
       //   uid: 105, 
        //  uname: '施景程',
        //  ccontent: this.compText,
       //   headimg: require('../../assets/img/my_head.png'),
        //  cdate: '刚刚',
       //   good: 0
        }
        // post需加入qs将json格式直接转化为data所需的格式（?pcid=11&ccontent=测试）
        //this.axios.post('http://110.53.162.165:5050/api/',this.qs.stringify(comp) ).then((res) => {
        //  this.showComtoasttext = '发布成功'
         // this.showtoast = true
         // this.compText = ''
         // this.compshow = false
         // this.emotionshow = false
          //this.compslist.push(comp)
       // })
         // .catch(function (error) {
            console.log(error)
        //  })
      } 
  },
  computed: {
    listenshow () {
      return this.show2
    }
  },
  watch: {
    listenshow (vag) {
      this.showpop2 = vag
    }
  }
}
</script>
<style lang="less" scoped>
@cell-value-color:#000;
@cell-body-label-color:#999;
</style>
