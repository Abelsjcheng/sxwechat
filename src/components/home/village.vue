<template>
  <div>
    <x-header>美丽乡村</x-header>
      <div @on-click-item ="showit">
        <cell @click.native="showvil = true" is-link>
          <span slot="title" style="color:green;">
            <span style="vertical-align:middle">美丽乡村规划</span>
          </span>
          <div class="badge-value">
            <badge text="new"></badge>
          </div>
        </cell>
      </div>
      <div  @on-click-item ="showtwo">
        <cell  @click.native="showvil = true" is-link>
          <span slot="title" style="color:green;">
            <span style="vertical-align:middle">我爱我村</span>
          </span>
          <badge text="new"></badge>
        </cell>
      </div>
      <div @on-click-item ="showthree">
        <cell @click.native="showvil = true" is-link>
          <span slot="title" style="color:green;">
            <span style="vertical-align:middle">文化活动</span>
          </span>
            <badge text="new"></badge>
        </cell>
      </div>
      <cell is-link>
        <span slot="title" style="color:green;">
          <span style="vertical-align:middle">民宿管理</span>
        </span>
          <badge text="new"></badge>
      </cell>
      <cell is-link>
        <span slot="title" style="color:green;">
          <span style="vertical-align:middle">宣传文案</span>
        </span>
          <badge text="new"></badge>
      </cell>
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
      show: true
    }
  },
  methods: {
    showit () {
      this.showvil = true
      console.log(this.showvil)
    },
    showtwo () {
      this.showvil = true
      console.log(this.showvil)
    },
    showthree () {
      this.showvil = true
      console.log(this.showvil)
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
</style>