<template>
  <div>
    <x-header>美丽乡村</x-header>
    <div style="margin:5px 0">
      <div @on-click-item ="showit">
        <cell @click.native="showvil = true" is-link>
          <span slot="title" style="color:green;">
            <span style="vertical-align:middle">资讯信息</span>
          </span>
            <badge text="new"></badge>
        </cell>
      </div>
      <div @on-click-item ="showit" class="vil">
        <cell @click.native="showvil = true" is-link>
          <span slot="title" style="color:green;">
            <span style="vertical-align:middle">美丽乡村规划</span>
          </span>
          <div class="badge-value">
            <badge @click="showbadge" v-if="showbadge" text="new"></badge>
          </div>
        </cell>
      </div>
      <div  @on-click-item ="showit">
        <cell  @click.native="showvil = true" is-link>
          <span slot="title" style="color:green;">
            <span style="vertical-align:middle">我爱我村</span>
          </span>
          <badge text="new"></badge>
        </cell>
      </div>
      <div @on-click-item ="showit">
        <cell @click.native="showvil = true" is-link>
          <span slot="title" style="color:green;">
            <span style="vertical-align:middle">文化活动</span>
          </span>
            <badge text="new"></badge>
        </cell>
      </div>
      <div @on-click-item ="showit">
        <cell @click.native="showvil = true" is-link>
          <span slot="title" style="color:green;">
            <span style="vertical-align:middle">民宿管理</span>
          </span>
            <badge text="new"></badge>
        </cell>
      </div>
      <div @on-click-item ="showit">
        <cell @click.native="showvil = true" is-link>
          <span slot="title" style="color:green;">
            <span style="vertical-align:middle">宣传文案</span>
          </span>
            <badge text="new"></badge>
        </cell>
      </div>
    </div>
      <villagepanel :showvil="showvil"/>
  </div>
</template>
<script>
import villagepanel from '../../components/Infopanel/villagepanel.vue'
import { XHeader, Cell, Badge } from 'vux'
import { truncateSync } from 'fs'
export default {
  name:'village',
  components: { XHeader, Cell, Badge, villagepanel },
  data () {
    return {
      showvil: false,
      show: true,
      showbadge: true
    }
  },
  methods: {
    showit () {
      this.showvil = true
      console.log(this.showvil)
    },
    // showtwo (val) {
    //   if (val === 'myvil') {
    //     this.tab = 'myvil'
    //     this.getinfolist('http://110.53.162.165:5050/api/policy/PolAll', '')
    //   } else if (val === 'beauvil') {
    //     this.tab = 'beauvil'
    //     this.getinfolist('http://110.53.162.165:5050/api/policy/infoAll', '')
    //   } else if (val === '') {
        
    //   }
    // },
    showtwo () {
      this.showvil = true
      console.log(this.showvil)
    },
    showthree () {
      this.showvil = true
      console.log(this.showvil)
    },
    showbadge () {
      this.showbadge = false
    }
  }
}
</script>
<style scoped>
.badge-value {
  display: inline-block!important;
}
.vertical-middle {
  vertical-align: middle;
}
.span.visited{
  color:#212121
}
.vil{
  touch-action: none;
  margin: 5px 0;
}
</style>