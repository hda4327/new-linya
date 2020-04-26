<template>
    <div class="case-show">
        <IndexItem title="病例中心" :toPath="'/case'">
            <router-link :to="'/caseDetail?id='+ item.id" class="case-content"  v-for="(item, index) in caseList" v-if="index<2">
                <div class="case-img" :style="{backgroundImage: 'url('+baseUrl + item.img_resource.src+')'}">

                </div>
                <div class="case-info">
                    <div class="title">
                        {{item.title}}
                    </div>
                    <div class="time">{{computeTime(item.add_time)}}</div>
                </div>
            </router-link>
        </IndexItem>

    </div>

</template>

<script>
    import IndexItem from "components/content/IndexItem/IndexItem";
    import {getCaseList} from 'network/homeReq'


    export default {
        name: "CaseShow",
        data() {
            return {
                baseUrl: this.$baseUrl,
                caseList: []
            }
        },
        created() {
            getCaseList().then(res=>{
                this.caseList = res.data.data
                console.log(this.caseList)
            })
        },
        components:{
            IndexItem
        },
        computed:{
            computeTime(){

                return function(time){
                    return this.METHOD.getDateDiff(time)
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .case-content:first-child{
        border-bottom: 1px solid #e7e7e7;
    }
    .case-content{
        padding: 8px 0;
        display: flex;

        .case-img{
            width: 160px;
            height: 90px;
            border-radius: 5px;
            background-size: cover;
            flex: 0 0 auto;
        }
        .case-info{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding-left: 16px;
            .title{
                color: #323232;
                font-weight: 400;
                font-size: 15px;
            }
            .time{
                color: #999;
                font-weight: 400;
                font-size: 12px;
            }
        }
    }

</style>