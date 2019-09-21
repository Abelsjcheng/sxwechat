<template>
    <div>
        <li class="style">
          <h3><a href="#" target="_blank">{{title}}</a></h3>
          <i><div class="clear"></div></i>
          <p>{{text}}</p>
          <span class="left">{{time}}</span>
        </li>
    </div>
</template>
<script>
export default {
  props: [ "title", "text", "time" ]
}
</script>
<style lang="less" scoped>
a:hover{
            color:#900;
            text-decoration: underline;
          }
.link-top {
            width: 50%;
            height: 5px;
            /* border-top: solid #cccccc 1px; */
        }
.left {
  font-size: 12px;
  color: #bbbbbb;
  text-align: center;
}
a{
   color:rgb(37, 35, 35);
}
div {
    display: block;
}
p{
    display: block;
    -webkit-margin-before: 2px;
    -webkit-margin-after: 2px;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
    font-size: 13px;
}
.style {
    background:#fff;
}
.text-scroll {
  border: 1px solid #ddd;
  border-left: none;
  border-right: none;
}
.text-scroll p{
  font-size: 12px;
  text-align: center;
  line-height: 30px;
}
.black {
  background-color: #000;
}
.title{
  line-height: 100px;
  text-align: center;
  color: #fff;
}
.animated {
  animation-duration: 1s;
  animation-fill-mode: both;
}
.vux-indicator.custom-bottom {
  bottom: 30px;
}
@-webkit-keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
  100% {
    opacity: 1;
    transform: none;
  }
}
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
  100% {
    opacity: 1;
    transform: none;
  }
}
.fadeInUp {
  animation-name: fadeInUp;
}
.swiper-demo-img img {
  width: 100%;
}
</style>
