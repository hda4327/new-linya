<template>
    <div class="main">
        <div class="name">
            活动图集
        </div>
        <div class="atlas-list">
            <Scroll ref="scroll" :contentWidth="contentWidth">
                <img v-for="(item,index) in photoResource"  :src="$baseUrl + item.src" alt="" @mousedown="showCover(index)">
            </Scroll>

        </div>
        <div class="cover" v-show="isShowCover" @mousedown="cancelCover">
            <Swiper :options="swiperOptions" class="out-wrapper" ref="swiper">
                <SwiperSlide class="swiper-item"  v-for="(item,index) in photoResource">
                    <img :src="$baseUrl + item.src" alt="" class="swiper-img">
                </SwiperSlide>
                <div class="swiper-pagination" slot="pagination"></div>
            </Swiper>
        </div>

    </div>
</template>

<script>
    import Scroll from "components/common/scroll/Scroll";

    import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
    import 'swiper/css/swiper.css'


    export default {
        name: "AtlasContent",
        data() {
            return {
                imageList: [
                ],
                imgWidth: 70,
                imgDistance: 12.5,
                swiperOptions:{
                    // centeredSlides:true,
                    observer:true,//修改swiper自己或子元素时，自动初始化swiper
                    observeParents:true,//修改swiper的父元素时，自动初始化swiper

                    pagination: {
                        el: '.swiper-pagination',
                        type:'fraction'
                    },
                },
                isShowCover: false
            }
        },
        props:{
            photoResource: Array
        },
        components:{
            Scroll,
            Swiper,
            SwiperSlide
        },
        mounted() {

        },
        methods:{
            showCover(i){
                this.isShowCover = true
                this.$refs.swiper.$swiper.slideTo(i)
            },
            cancelCover(){
                this.isShowCover = false
            }
        },
        computed:{
            contentWidth(){
                let len = this.photoResource.length
                return this.imgWidth*len + (len-1)*this.imgDistance
            }
        }
    }
</script>

<style scoped lang="scss">
.main{
    width: 100%;
    background-color: #fff;
    padding: 15px 20px 20px 20px;
    margin-top: 15px;
    .name{
        /*text-align: start;*/
    }
    .atlas-list{
        margin-top: 15px;
        img{
            width: 70px;
            height: 70px;
        }
    }
    .cover{
        z-index: 99;
        .out-wrapper{
            width: 100%;

        }
        .swiper-item{
            display: flex;
            justify-content: center;
            margin-top: 150px;

        }
        .swiper-img{
            width: 100%;
            height: 300px;

        }
    }







}
</style>