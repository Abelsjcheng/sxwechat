<template>
  <div id="app">
    <router-view/>  <!--一级 路由出口 --><!--一级 路由匹配到的组件将渲染在这里 -->
  </div>
</template>

<style lang="less">
@import "~vux/src/styles/reset.less";
html,
body {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
}
body {
  -webkit-overflow-scrolling: touch;
  background-color: #fbf9fe;
  font-family: Microsoft YaHei;
  font-size: 14px;
}
#app {
  width: 100%;
  height: 100%;
  background: #fff;
  -webkit-overflow-scrolling: touch;
  position: absolute;
  left: 0;
  top: 0;
}
body /deep/ .vux-popover-arrow-right {
  border-top:0px;
  border-bottom:0px;
  border-left:0px;
  top:0%;
  transform:0;
  right:0px;
}
</style>
