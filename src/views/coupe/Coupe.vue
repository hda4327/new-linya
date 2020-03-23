<template>
    <div class="coupe-main">
        <div class="fixed-content">
            <Search @search="search"></Search>
        </div>
        <div style="height: 42px"></div>
        <Scroll ref="scroll"  :pullUpLoad="true" @pullingUp="pullUpLoad" class="scroll" :bounceTop="false">
            <CoupeList :coupeList="coupeList"></CoupeList>
        </Scroll>


    </div>
</template>

<script>
    import {reqCoupeList} from "../../network/homeReq";
    import CoupeList from "./ComChild/CoupeList";
    import Search from "../../components/content/Search/Search";
    import Scroll from "../../components/common/scroll/Scroll";
    export default {
        name: "Coupe",
        data(){
            return{
                params:{
                    page: 1,
                    num: 10,
                    title: ''
                },
                coupeList:[]
            }
        },
        created() {
            this.getCoupeList()
        },
        components:{
            CoupeList,
            Search,
            Scroll
        },
        methods:{
            getCoupeList(){

                reqCoupeList(this.params).then(res=>{
                    if (res.data.length){
                        this.coupeList =[...this.coupeList, ...res.data]
                        this.$nextTick(()=>{
                            this.$refs.scroll.refresh()
                            this.$refs.scroll.finishPullUp()
                        })
                    }


                })
            },
            search(title){
                this.params.title = title
            },

            pullUpLoad(){
                this.params.page += 1
                this.getCoupeList()

            }
        }
    }
</script>

<style scoped lang="scss">
.fixed-content{
    position: fixed;
    top: 86px;
    left: 0;
    right: 0;
}
    .scroll{
        height: 550px;
    }
</style>