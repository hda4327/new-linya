<template>
    <div class="main">
        <Nav :navList="navList"></Nav>
        <div style="height: 40px"></div>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
    import Nav from "./ChildCom/Nav";
    export default {
        name: "projectDetail",
        data() {
            return {
                navList: [{title:'图解', path:'picture'}, {title:'动画',path:'video'}]
            }
        },
        created(){

        },
        components:{
            Nav
        },
        activated() {
            console.log(this.$route.query.class_id)
        }
    }
</script>

<style scoped lang="scss">

</style>