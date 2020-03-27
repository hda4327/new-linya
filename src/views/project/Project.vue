<template>
    <div class="main">
        <router-link :to="{path:'/projectDetail/picture', query:{class_id:item.classify_id, id:item.id }}" class="item" v-for="item in projectList">
            <img :src="item.img_resource.src">
            <p>{{item.project_name}}</p>
        </router-link>
    </div>
</template>

<script>
    import {reqProjectList} from 'network/projectReq'

    export default {
        name: "Project",
        data() {
            return {
                projectList:[]
            }
        },
        created(){
            this.getProjectList()
        },
        methods:{
            getProjectList(){
                reqProjectList().then(res=>{
                    this.projectList = res.data
                })
            }

        },

    }
</script>

<style scoped lang="scss">
.main{
    .item{
        width: 33.333%;
        height: 121.4px;
        float: left;
        text-align: center;
        /* padding: 0.3rem 0; */
        display: flex;
        align-items: center;
        justify-content: center;
        flex-flow: column;
        img{
            height: 40px;
            width: 40px;
        }
        p{
            font-size: 12px;
            font-weight: 400;
            color: rgba(106,106,106,1);
            line-height: 18px;
            margin-top: 10px;
        }
    }
}
</style>