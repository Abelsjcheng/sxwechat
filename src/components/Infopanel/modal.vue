
//  弹窗

<template>
    <div>
        <div v-show="visible" :value="value" class="mod">
            <div class="mod_body">
                <div class="mod_title" v-if="title">{{title}}</div>
                <div class="slot">
                     <p slot="content" class="card-padding">
                         <img src="../../assets/img/my_head.png" width="90" height="80" style="">
                        <cell align-items="flex-start" value-align="left">
                        
                        <div>
                            <p>值班党员: 周竖庚 </p>
                            <p>党员组名: 新港</p>
                            <p>值班地点: 暮云镇居委会二楼办公室</p>
                            <p>联系方式: 18874083707 </p>
                            <p>值班日期: 2018-07-25</p>
                        </div>
                        </cell>
                    </p>
                </div>
                <div v-if="useClose" class="close" @click="cancel">我 知 道 了</div>
            </div>
        </div>
    </div>
</template>
<script>
import { Cell } from 'vux'
export default {
    components: { Cell },
    props: {
        value: {
            type: Boolean,
            default: false
        },
        // 是否出现关闭
        useClose: {
            type: Boolean,
            default: true
        },
        //标题
        title: {
            type: String
        }
    },
    data() {
        return {
            visible: true,
            scrollTop: 0
        };
    },
    watch: {
        value(val) {
            this.visible = val;
            const body = window.document.body;
            if (val) {
                this.scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
                body.style.position = "fixed";
                body.style.width = "100%";
                body.style.top = -this.scrollTop + "px";
            } else {
                body.style.position = "relative";
                body.style.top = 0;
                document.body.scrollTop = this.scrollTop;
            }
        },
        visible(val) {
            this.$emit("input", val);
        }
    },
    mounted() {
        if (this.value) {
        this.visible = false;
        }
    },
    methods: {
        cancel() {
                    this.visible = false;
                }
        }
    };

</script>

<style lang="less" scoped>

// @import '~@/assets/css/style.less';

.mod {
    position: fixed;
    top: 0;
    bottom: 0;
    width: 100%;
    // height: 100vh;
    background-color: rgba(0, 0, 0, 0.73);
    z-index: 999;

    .mod_body {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateY(-60%);
        margin-left: -35%;
        border-radius: 6px;
        width: 70%;
        background-color: #fff;
        padding-bottom: 25px;
        .close {
            position: absolute;
            bottom: 0;
            width: 100%;
            height: 38px;
            line-height: 36px;
            text-align: center;
            // background-image: url('~@/assets/image/red-pack/close.png');
            background-size: 100% 100%;
            background-repeat: no-repeat;
            background-color: #ecd;
        }
        .slot {
            padding: 5px 20px;
            height: 72%;
            overflow-x: hidden;
            overflow-y: auto;
            -webkit-overflow-scrolling: touch;
        }
    }
    .mod_title {
        font-size: 16px;
        font-weight: bold;
        color: #4a4a4a;
        text-align: center;
        line-height: 15px;
        padding: 10px 10px;
        background-color: #ecd;
    }
}
img{
    display: block;
    margin: auto auto;
}
</style>