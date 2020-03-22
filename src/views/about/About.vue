<template>
    <div class="about-main">
        <top-bg></top-bg>
        <TopLog></TopLog>
        <div class="content">
            <div class="html-render" v-html="aboutContent">

            </div>
        </div>
    </div>
</template>

<script>
    import TopBg from "components/content/topBg/TopBg";
    import TopLog from "components/content/topBg/TopLog";


    export default {
        name: "About",
        data() {
            return {
            }
        },
        created() {
            // reqCompanyMsg().then(res=>this.aboutContent = res.data)
        },
        mounted() {

        },
        components:{
            TopBg,
            TopLog
        },
        computed:{
            aboutContent(){
                return this.$store.state.companyMsg.content
            }
        }

    }
</script>

<style scoped lang="scss">
.content{
    padding: 15px;
    background: #ffffff;
    .html-render{
        font-size: 14px;
        font-weight: 400;
        color: rgba(54,54,54,1);
        line-height: 21px;
        white-space: pre-wrap;

        /deep/
        img{
            max-width: 100%;
            margin-top: 15px;
            margin-bottom: 15px;
        }
    }
}
</style>