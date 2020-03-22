<template>
    <div class="tab-item" @click="changeTab">
        <div :style="activeTab" class="tab-name"><slot></slot></div>
    </div>
</template>

<script>
    export default {
        name: "TopTabItem",
        props: {
            path: String,
            activeColor:{
                type: String,
                default: '#4c96ff',
            }
        },
        data(){
            return{
                isActive:false
            }
        },
        methods:{
            changeTab(){
                if (this.$route.path !== this.path){
                    this.$router.replace(this.path)
                }
            }
        },
        computed:{

            activeTab(){
                return this.$route.path.indexOf(this.path)>-1?{borderBottom:this.activeColor+ ' 2px solid','color':this.activeColor}:{}
            }
        }
    }
</script>

<style scoped>
.tab-item{
    height: 30px;
    color: black;
    flex: 1;
    text-align: center;
    align-items: center;
    justify-content: center;
    display: flex;
}
    .tab-name{
        width: 40px;
        height: 20px;
    }
</style>