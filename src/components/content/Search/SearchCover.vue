<template>
    <div class="main">
        <div class="search-cover" v-show="isShowCover" @click="isShowCover = false"></div>
    </div>
</template>

<script>
    export default {
        name: "SearchCover",
        data() {
            return {
                isShowCover:false
            }
        },
        activated(){
            this.$EventBus.$on('addCover', ()=>{
                this.isShowCover =true
            })
            this.$once('hook:deactivated', ()=>{
                console.log(12)
                this.$EventBus.$off('addCover')
            })
        },
    }
</script>

<style scoped lang="scss">
    .search-cover{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(175,175,175,0.2);
    }
</style>