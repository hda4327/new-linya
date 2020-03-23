<template>
    <div class="main">
        <template v-if="caseData.img_resource">
            <div class="top" :style="{backgroundImage:'url('+ $baseUrl + caseData.img_resource.src +')'}">
            </div>
        </template>
        <DetailContent :caseData="caseData"></DetailContent>


    </div>
</template>

<script>
    import {reqCaseDetail} from 'network/caseReq'
    import DetailContent from "./ComChild/DetailContent";

    export default {
        name: "CaseDetail",
        data(){
            return {
                id: this.$route.query.id,
                caseData:{}
            }
        },
        components:{
            DetailContent
        },
        created() {
            this.getCaseDetail(this.id)
        },
        methods:{
            getCaseDetail(id){
                reqCaseDetail(id).then(res=>{
                    this.caseData = res.data
                })
            }
        }

    }
</script>

<style scoped lang="scss">
.top{
    width: 100%;
    height: 165px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
</style>