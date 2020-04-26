<template>
    <div class="main">
        <div class="item" v-for="(item, index) in videoList" :key="index">
             <video :src="item.site" :poster="item.cover"  controls></video>

             <div class="desc">{{item.title}}</div>
        </div>

    </div>
</template>

<script>
    import {
            reqVideoList
    } from 'network/projectReq.js'
    export default {
        name: "VideoPart",
        data() {
        return {
            reqParams: {
                id: 0,
                class_id: 0,
                page: 1,
                num: 10,

            },
            videoList: []
        }
    },

    created() {
        this.reqParams.id = this.$route.query.id
        this.reqParams.class_id = this.$route.query.class_id
        this.getVideoList(this.reqParams)
    },
    watch:{
//        params(newVal){
//            if(newVal !={}){
//                this.reqParams.id = newVal.id
//                this.reqParams.class_id = newVal.class_id
//
//            }
//        }
    },
    methods: {
        getVideoList(params) {
            reqVideoList(params).then(res => {
                this.videoList = res.data.data
//                console.log('123',this.videoList)
            })
        }
    }
    }
</script>

<style scoped lang="scss">
    .main {
        padding: 10px 10px 0 10px;

    .item {
        margin-bottom: 10px;
    video {
        width: 100%;
        height: 186px;
        background-size: 100% 100%;
        cursor: pointer;
    }

    .desc {
        font-size: 13px;
        font-weight: 500;
        color: rgba(170, 170, 170, 1);
        line-height: 42px;
        height: 42px;

    }
    }
    }
</style>
