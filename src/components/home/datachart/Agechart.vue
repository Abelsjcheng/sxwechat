<template>
  <v-chart  :options="polar" style="width:81vw;height:70vh"/>
</template>

<script>
export default {
    name: "Agechart",
  data () {
    return {
      polar: {
        title : {
            text: '年龄段分析',
            subtext: '总计人数：',
            x:'center',
            textStyle:{
            color: '#00ffb2'
            }
        },
        tooltip : {
            trigger: 'item',
            position: 'bottom',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
        // orient: 'vertical',
        bottom: 0,
        data: ['0-10岁','10-19岁','20-29岁','30-39岁','40-49岁','50-59岁','60-69岁','70-79岁','80-89岁','90-99','100岁以上']
         },
        series: [
            {
                name: '新增人口分析',
                type: 'pie',
                radius : '33%',
                center: ['50%', '45%'],
                data:[
                    {value:35, name: '0-10岁'},
                    {value:110, name: '10-19岁'},
                    {value:45, name: '20-29岁'},
                    {value:35, name: '30-39岁'},
                    {value:35, name: '40-49岁'},
                    {value:40, name: '50-59岁'},
                    {value:35, name: '60-69岁'},
                    {value:30, name: '70-79岁'},
                    {value:35, name: '80-89岁'},
                    {value:10, name: '90-99岁'},
                    {value:5, name: '100岁以上'}
                ],
                avoidLabelOverLap: true,
                label: {
                normal: {
                    textStyle: {
                        color: '#05d2e2'
                    }
                }
                },
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
         ]
       }
     }
  },
  methods: {
      getdataSex:function () {
      this.axios.get('http://110.53.162.165:5050/api/count/pmBySex').then(function(res) {
        console.log(res.data)
              this.polar.series.data[0].value=res.data.data.man
              this.polar.series.data[1].value=res.data.data.woman
              this.polar.series.data[2].value=res.data.data.msun

        // 请求成功函数  
                },function(){
                  console.log('请求失败处理');
              });
    }
  },
  mounted() { //函数初始化
      this.getdataSex()
  }
  
}
</script>

