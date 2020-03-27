<template>
    <div class="main">
        <Nav :navList="navList"></Nav>
        <div style="height: 40px"></div>
        <keep-alive>
            <router-view :picList="picList" :proList="proList" :videoList="videoList"></router-view>
        </keep-alive>
    </div>
</template>

<script>
    import Nav from "./ChildCom/Nav";
    import {reqPictureList, reqVideoList, reqProductList} from 'network/projectReq'

    export default {
        name: "projectDetail",
        data() {
            return {
                navList: [{title:'图解', path:'picture'}, {title:'动画',path:'video'}],
                id: '',
                class_id: '',
                picList: [],
                proList:[],
                videoList: [],
            }
        },
        created(){
            this.class_id = this.class_id?this.class_id:this.$route.query.class_id
            this.id = this.id?this.id:this.$route.query.id
            this.getPictureList()
            this.getVideoList()
            this.getProductList()

        },
        components:{
            Nav
        },
        activated() {
            // console.log(this.$route.query)
        },
        methods:{
            getPictureList(){
                reqPictureList(this.class_id).then(res=>{
                    this.picList = res.data
                })
            },
            getVideoList(){
                let params ={
                    class_id: this.class_id,
                    id: this.id,
                    page:1,
                    num:10,
                }
                reqVideoList(params).then(res=>{
                    this.proList = res.data
                })
            },
            getProductList(){
                let params ={
                    project_id: this.id,
                    page:1,
                    num:10,
                }
                reqProductList(params).then(res=>{
                    this.videoList = res.data
                })
            }
        }

    }
</script>

<style scoped lang="scss">

</style>