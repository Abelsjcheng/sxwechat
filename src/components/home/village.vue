<template>
  <div>
    <x-header>美丽乡村</x-header>
    <div style="margin:5px 0">
      <div @on-click-item ="showinfo">
        <cell @click.native="showvilInfo = true" is-link>
          <span slot="title" style="color:green;">
            <span style="vertical-align:middle">资讯信息</span>
          </span>
            <badge text="new"></badge>
        </cell>
      </div>
      <div @on-click-item ="showPlan" class="vil">
        <cell @click.native="showvil = true" is-link>
          <span slot="title" style="color:green;">
            <span style="vertical-align:middle">美丽乡村规划</span>
          </span>
          <div class="badge-value">
            <badge @click="showbadge" v-if="showbadge" text="new"></badge>
          </div>
        </cell>
      </div>
      <div  @on-click-item ="showMy">
        <cell  @click.native="showMyvil = true" is-link>
          <span slot="title" style="color:green;">
            <span style="vertical-align:middle">我爱我村</span>
          </span>
          <badge text="new"></badge>
        </cell>
      </div>
      <div @on-click-item ="showCul">
        <cell @click.native="showCulActiv = true" is-link>
          <span slot="title" style="color:green;">
            <span style="vertical-align:middle">文化活动</span>
          </span>
            <badge text="new"></badge>
        </cell>
      </div>
      <div @on-click-item ="showDor">
        <cell @click.native="showDorMana = true" is-link>
          <span slot="title" style="color:green;">
            <span style="vertical-align:middle">民宿管理</span>
          </span>
            <badge text="new"></badge>
        </cell>
      </div>
      <div @on-click-item ="showProp">
        <cell @click.native="showPro = true" is-link>
          <span slot="title" style="color:green;">
            <span style="vertical-align:middle">宣传文案</span>
          </span>
            <badge text="new"></badge>
        </cell>
      </div>
    </div>
      <vilPlan :showvil="showvil"/>
      <culActiv :showCulActiv="showCulActiv" />
      <DormitoryMana :showDorMana="showDorMana" />
      <vilInfo :showvilInfo="showvilInfo" />
      <myvil :showMyvil="showMyvil" />
      <propaganda :showPro="showPro" />
  </div>
</template>
<script>
import culActiv from '../../components/villageInfopanel/culActiv.vue'
import DormitoryMana from '../../components/villageInfopanel/DormitoryMana.vue'
import vilPlan from '../../components/villageInfopanel/vilPlan.vue'
import vilInfo from '../../components/villageInfopanel/vilInfo.vue'
import myvil from '../../components/villageInfopanel/myvil.vue'
import propaganda from '../../components/villageInfopanel/propaganda.vue'

import { XHeader, Cell, Badge } from 'vux'
import { truncateSync } from 'fs'
export default {
  name:'village',
  components: { XHeader, Cell, Badge, vilPlan, culActiv, DormitoryMana, vilInfo, myvil, propaganda },
  data () {
    return {
      showvil: false,
      showCulActiv: false,
      showDorMana: false,
      showvilInfo: false,
      showMyvil: false,
      showPro: false,
      show: true,
      showbadge: true
    }
  },
  methods: {
    showPlan () {
      this.showvil = true
      console.log(this.showvil)
    },
    showCul () {
      this.showCulActiv = true
      console.log(this.showCulActiv)
    },
    showDor () {
      this.showDorMana = true
      console.log(this.showDorMana)
    },
    showinfo () {
      this.showvilInfo = true
      console.log(this.showvilInfo)
    },
    showMy () {
      this.showMyvil = true
      console.log(this.showMyvil)
    },
    showProp () {
      this.showPro = true
      console.log(this.showPro)
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