<template>
  <div id="app">
    <router-view/>  <!-- 路由出口 --><!-- 路由匹配到的组件将渲染在这里 -->
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

</style>
