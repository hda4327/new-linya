<template>
    <div class="main">
        <Swiper class="outer" :options="swiperOptions">
            <SwiperSlide v-for="(item,index) in picList" :key="index">
                <img :src="item.imgsrc" alt="">


            </SwiperSlide>


            <div class="swiper-pagination page" slot="pagination"></div>
        </Swiper>
        <div class="swiper-button-prev arrows"></div><!--左箭头。如果放置在swiper-container外面，需要自定义样式。-->
        <div class="swiper-button-next arrows"></div><!--右箭头。如果放置在swiper-container外面，需要自定义样式。-->
    </div>
</template>

<script>
    import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
    import 'swiper/css/swiper.css'

    export default {
        name: "Picture",
        data() {
            return {
                swiperOptions:{
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        type:'fraction'
                    },
                }
            }
        },
        props:{
            picList:Array
        },
        components:{
            Swiper,
            SwiperSlide
        },


    }
</script>

<style scoped lang="scss">
    .main{
        width: 100%;
        padding-top: 10px;
        height: 552.5px;
        .outer{
            img{
                width: 100%;
                height: 100%;
            }

        }
        .page{
            position: relative;
            top: -90px;
            /deep/
            span{
                font-size: 8px;
                color: #333333;
            }
        }

    }
    .arrows{
        outline: none;
    }
    .arrows:after{
        font-size: 20px;

    }
</style>