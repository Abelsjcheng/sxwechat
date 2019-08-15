<template>
  <div>
    <card>
      <div slot="header" style="margin-top: 10px;">
        <cell title="施景程" link="/home" >
            <img slot="icon" src="../../assets/img/my.png" style="border-radius: 50%;width: 3rem;">
        </cell>
      </div>
      <div slot="content" class="card-demo-flex card-demo-content01">
        <div class="vux-1px-r">
          <span>20</span>
          <br/>
          动态
        </div>
        <div class="vux-1px-r">
          <span>15</span>
          <br/>
          评论
        </div>
        <div>
          <span>5</span>
          <br/>
          获赞
        </div>
      </div>
    </card>
    <grid :show-lr-borders="false" :show-vertical-dividers="false">
      <grid-item v-for="menu in menus" :key="menu.id" :label="menu.label" :link="{ path: menu.path}">
        <i slot="icon" :class="menu.icon" :style="menu.style"></i>
      </grid-item>
    </grid>
    <group>
      <cell title="我的消息" is-link>
        <i slot="icon" class="fa fa-commenting menu-cell-icon"></i>
      </cell>
      <cell title="账号换绑" is-link>
        <i slot="icon" class="fa fa-phone-square menu-cell-icon"></i>
      </cell>
    </group>
    <group>
      <cell title="退出" is-link>
        <i slot="icon" class="fa fa-power-off menu-cell-icon"></i>
      </cell>
    </group>
  </div>
</template>
<script>
import { Card, Cell, Grid, GridItem, Group } from 'vux'
export default {
  components: { Card, Cell, Grid, GridItem, Group },
  data () {
    return {
      menus: [
        { label: '我的动态', icon: 'fa fa-bandcamp', style: 'font-size: 24px;color: #09bb07;', path: '/mine_dynamic' }, // 异步加载图片
        { label: '我的收藏', icon: 'fa fa-star', style: 'font-size: 24px;color: rgb(215, 185, 68);', path: '/mine_collect' },
        { label: '我的评论', icon: 'fa fa-comment', style: 'font-size: 24px;color: #828afc;', path: '/mine_comment' },
        { label: '我的点赞', icon: 'fa fa-thumbs-up', style: 'font-size: 24px;color: #f74c31;', path: '/mine_dianzan' }
      ]
    }
  }
}
</script>
<style lang="less" scoped>
@import '~vux/src/styles/1px.less';
.card-demo-flex {
  display: flex;
}
.card-demo-content01 {
  padding: 10px 0;
}
.card-padding {
  padding: 15px;
}
.card-demo-flex > div {
  flex: 1;
  text-align: center;
  font-size: 12px;
}
.weui-grids {
  margin-top: 10px;
  background-color: #fff;
}
.weui-grid{
  padding: 10px 10px;
}
.weui-grid /deep/ .weui-grid__icon{
    width:24px;
    height:24px;
  }
.weui-grid /deep/ .weui-grid__label{
    font-size: 12px;
  }
.menu-cell-icon{
  display:block;
  margin-right:5px;
  font-size:23px;
  color: #6d82ec;
  width:20px;
}
</style>
