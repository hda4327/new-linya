<template>
    <div class="main">
        <div class="title">
            {{caseData.title}}
        </div>
        <CompanyInfo :isShowVip="true"></CompanyInfo>
        <div class="content" v-html="caseData.content">

        </div>
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
            caseData:Object
        },
        components:{
            CompanyInfo
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
    }
}
</style>