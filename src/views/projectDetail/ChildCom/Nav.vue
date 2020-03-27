<template>
    <div class="main">
        <router-link v-for="item in navList" :to="{path:item.path, query:{id,class_id}}" class="title" :class="isCurrentRoute(item.path)?'active':''"  replace>
            {{item.title}}
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "Nav",
        data() {
            return {
                id: '',
                class_id: '',
            }
        },
        props:{
            navList:{
                default:[{title:'图解', path:'picture'}, {title:'动画',path:'video'}],
                type:Array
            }
        },
        created() {
            this.id = this.$route.query.id
            this.class_id = this.$route.query.class_id
        },
        methods:{

        },
        computed:{
            isCurrentRoute(){
                return function (path){
                    return this.$route.path.indexOf(path)>-1
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .main{
        background: #fff;
        height: 40px;
        width: 100%;
        position: fixed;
        display: flex;
        justify-content: space-around;
        z-index: 9;
        .title{
            width: 33.3%;
            height: 100%;
            text-align: center;
            float: left;
            line-height: 40px;
            font-size: 14px;
            font-weight: 400;
            color: rgba(170,170,170,1);
        }
        .active{
            color:rgb(255, 77, 77);
        }
    }
</style>