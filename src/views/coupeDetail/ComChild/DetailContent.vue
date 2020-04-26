<template>
    <div class="main">
        <div class="title">
            {{coupeData.title}}
        </div>
        <CompanyInfo :isShowVip="true"></CompanyInfo>
        <!-- <div class="content" v-html="caseData.content">

        </div> -->
		<!-- <rich-text :nodes="caseData.content" class="content"></rich-text> -->
		<div v-html="coupeData.content"  class="content"></div>
    </div>
</template>

<script>
    import CompanyInfo from "components/content/companyInfo/companyInfo";

    export default {
        name: "DetailContent",
        data() {
            return {}
        },
        props:{
            coupeData:Object
        },
        components:{
            CompanyInfo,
        }
    }
</script>

<style scoped lang="scss">
.main{
    margin-top: -15px;
    background: #fff;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    .title{
        font-size: 18px;
        font-weight: bold;
        color: rgba(34,34,34,1);
        padding: 15px;
    }
    .content{
        padding: 15px;

        /deep/
         img{
            border: 0 none;
            width: auto;
            max-width: 100%;
            vertical-align: top;
            height: auto;
        }
    }
}


</style>