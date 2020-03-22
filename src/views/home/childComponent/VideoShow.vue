<template>
    <div class="video-show">
        <IndexItem title="口腔视频">
            <div class="video-content">
                <router-link v-for="(item, index) in videoList" v-if="index<4" class="video-item" to="">
                    <div class="video" :style="{backgroundImage: 'url('+item.pic+')'}">
                        <img src="~assets/img/home/play.png" alt="">
                    </div>
                    <div class="video-title">
                    {{item.title}}
                    </div>
                </router-link>

            </div>
        </IndexItem>
    </div>
</template>

<script>
    import IndexItem from "components/content/IndexItem/IndexItem";
    import {getVideoList} from 'network/homeReq'
    export default {
        name: "VideoShow",
        data() {
            return {
                videoList: {}
            }
        },
        created() {
            getVideoList(469).then(res=>{
                this.videoList = res.data
            })
        },
        components:{
            IndexItem
        }
    }
</script>

<style scoped lang="scss">
.video-content{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
    .video-item{
        width: 48%;
        margin-bottom: 15px;

        .video{
            width: 165px;
            height: 93px;
            background-size: cover;
            
            display: flex;
            align-items: center;
            justify-content: center;
            img{
                height: 15px;
                width: 12px;
            }
        }
        .video-title{
            margin-top: 5px;
            color: #323232;
            font-weight: 400;
            font-size: 13px;
            line-height: 20px;
        }
    }
</style>