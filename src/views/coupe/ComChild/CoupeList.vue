<template>
    <div class="list">
        <router-link :to="'/coupeDetail/' + item.id" class="item" v-for="(item, index) in coupeList" :key="index">
            <div class="ll">
                <div class="title">{{item.title}}</div>
                <div class="time">{{item.add_time}}</div>
                <div class="info">
                    <div class="main-i"><img class="ico1" src="~assets/img/coupe/msg.png"> <span>{{item.comments}}</span></div>
                    <div class="main-i"><img class="ico2" src="~assets/img/coupe/eye.png"> <span>{{item.view_num}}</span></div>
                    <div class="main-i"><img class="ico3" src="~assets/img/coupe/good.png"> <span>{{item.likes}}</span></div>
                </div>
            </div>
            <div class="rr" :style="{backgroundImage: 'url('+ item.imgsrc + ')'}"></div>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "CoupeList",
        data() {
            return {}
        },
        props:{
            coupeList:Array
        },
        methods:{

        }
    }
</script>

<style scoped lang="scss">
.list{
    padding: 0 15px;
    .item{
        width: 100%;
        height: 102.5px;
        border-radius: 10px;
        background: #fff;
        margin-bottom: 15px;
        padding: 7.5px 15px;
        display: flex;
        align-items: center;
        .ll{
            flex: 1 1 auto;
            height: 100%;
            padding-right: 10px;
            .title{
                font-size: 14px;
                font-weight: 400;
                color: rgba(50,50,50,1);
                line-height: 20px;
                height: 40px;
                overflow: hidden;
            }
            .time{
                font-size: 12px;
                font-weight: 400;
                color: rgba(135,135,135,1);
            }
            .info{
                display: flex;
                align-items: center;
                margin-top: 5px;
                .main-i{
                    display: flex;
                    align-items: center;
                    font-size: 12px;
                    font-weight: 400;
                    color: rgba(50,50,50,1);
                    margin-right: 10px;
                    .ico1{
                        width:12px
                    }
                    .ico2{
                        width:12px
                    }
                    .ico3{
                        width:14px
                    }

                    span{
                        margin-left: 10px;
                    }
                }
            }

        }
        .rr{
            width: 110px;
            height: 100%;
            background-size: cover;
            background-position: center;
            flex: 0 0 auto;
        }
    }
}
</style>