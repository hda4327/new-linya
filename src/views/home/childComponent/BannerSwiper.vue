<template>
    <Swiper v-if="bannerList" :showIndicator="false" @transitionEnd="showIndex">
        <SwiperItem  v-for="(item, index) in bannerList" :key="index">
            <div class="banner"><img :src="baseUrl+item.img_resource.src" alt=""></div>
        </SwiperItem>
        <template v-slot:indicator><div class="indicator">{{swiperCurrentIndex+'/'+bannerList.length}}</div></template>
    </Swiper>
</template>

<script>
    import {Swiper, SwiperItem} from 'components/common/swiper'
    import {getHomeBanner} from 'network/homeReq'
    export default {
        name: "BannerSwiper",
        created(){
            this.getBanner();

        },
        data(){
            return{
                baseUrl:this.$baseUrl,
                bannerList: null,
                swiperCurrentIndex: 1,
            }
        },
        components:{
            Swiper,
            SwiperItem
        },
        props:{
            // banners:{
            //     type:Array,
            //     default(){return []}
            // }
        },
        methods:{
            getBanner(){
                getHomeBanner().then(res=>{this.bannerList=res.data})
            },
            showIndex(index){
                this.swiperCurrentIndex = index+1
            }
        },

    }
</script>

<style scoped>
    .banner img{
        height: 200px;

    }
    .indicator{
        position: absolute;
        right: 10px;
        bottom: 10px;
        background: rgba(1,1,1,0.4);
        color: white;
        width: 40px;
        /*height: 20px;*/
        padding: 2px 5px;
        font-size: 12px;
        text-align: center;
        line-height: 20px;
        border-radius: 20px;
    }
</style>