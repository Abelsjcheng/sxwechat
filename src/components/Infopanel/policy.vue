<template>
<div>
	<panel :list="list" type="4"></panel>
    <load-more tip="正在加载"></load-more>
</div>
</template>

<script>

import { Panel, LoadMore } from 'vux'

export default {
  name: 'policy', // 政策
  components: {
    Panel, LoadMore 
  }, // 注册组件
  data () { // 局内数据
    return {
		list: [
			{
				src: '',
				title: '政策一',
				desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道',
				url: {
					path: '',
					replace: false
					},
				meta: {
					other: '评论 20',
					date: '10分钟前'
					}
			},
			{
				src: '',
				title: '政策二',
				desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道',
				url: {
					path: '',
					replace: false
				},
				meta: {
					other: '评论 20',
					date: '10分钟前'
				}
			},
         {
          src: '',
          title: '政策三',
          desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道',
          url: {
            path: '',
            replace: false
          },
          meta: {
            other: '评论 20',
            date: '10分钟前'
          }
        },
        {
          src: '',
          title: '政策四',
          desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道',
          url: {
            path: '',
            replace: false
          },
          meta: {
            other: '评论 20',
            date: '10分钟前'
          }

        }
	   ],
	   footer: {
        title: 'loading',
        url: ''
      }
    }
  },
//    scrollLoding() {
//       //加载事件
//       let self = this;
//       // 注册scroll事件并监听
//       if (self.lists.length >= 20) {
//         console.log("长度大于20");
//         window.addEventListener("scroll", this.addData);
//         self.tip = '暂无数据!';
//       } else {
//         window.removeEventListener("scroll", self.addData);
//          self.tip = '已加载所有数据!';
//       }
//     },

//     addData() {
//       // 拿页面的总数和后台返回的总数对比,如果页面数量小于等于后台总数便加载
//       let self = this;
//       console.log($(window).scrollTop(),'-----滚动条的高----')
//       console.log($(document).height(),'---------整个文档的高度----' )
//       console.log($(window).height(),'-----当前可见区域的大小----')
//       console.log($(window).scrollTop() >=$(document).height() - $(window).height())
//       if ($(window).scrollTop() >=$(document).height() - $(window).height()) {
//         self.params.currentPage = self.currentPage;
//         let params = self.params;
//         self.showLoding = true;
//         self.$http.get(self.apis.getWsxcList, { params })
//           .then(function(response) {
//             let dataEl = response.data;
//             // 对比当前页和总页数
//             if (dataEl.currentPage === dataEl.pageCount) {
//               window.removeEventListener("scroll", self.addData);
//               self.showLoding = false;
//               self.showTip = true;
//               self.tip = '已加载所有数据!';
//               return;
//             } else {
//               self.showLoding = false;
//               self.currentPage++;
//               let value = response.data.record;
//               self.showTip = true;
//               // self.lists = [];
//               if (value.length > 0) {
//                 self.showTip = false;
//                 value.forEach(el => {
//                   self.lists.push({
//                     roomTile: el.YWKS,
//                     num: el.FS,
//                     date: el.WG_DATE,
//                     infos: el.WG_VALUE,
//                     pKey: el.P_KEY
//                   });
//                 });
//                 for (let i = 0; i < self.lists.length; i++) {
//                   if (self.lists[i].roomTile == "") {
//                     self.lists[i].roomTile = "其它";
//                   }
//                 }
//               }else{
//               }
//             }
//           })
//           .catch(error => console.log(error));
//       } else {
//         self.showTip = false;
//       }
//     },
  methods: { // 方法函数

  },
  computed: { // 计算属性

  },
  watch: { // 侦听器

  },
  mounted () { // 初始化函数

  }
}
</script>

<style lang="less" scoped>

</style>
