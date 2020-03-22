<template>
    <div class="case-main">
        <CaseNav :categoryList="categoryList" @changeTab="changeTab" ref="nav"></CaseNav>
        <Search @search="search"></Search>
        <CaseList :caseList="caseList"></CaseList>
    </div>
</template>

<script>
    import CaseNav from "./ComChild/CaseNav";
    import CaseList from "./ComChild/CaseList";
    import Search from "components/content/Search/Search";
    import {reqCaseCat,reqCaseList } from 'network/CaseReq'
    export default {
        name: "Case",
        data(){
            return {
                categoryList:[],
                caseList:[],
            }
        },
        components:{
            CaseNav,
            CaseList,
            Search
        },
        created() {
            this.getCaseCat()
        },
        methods:{
            search(title){
                let typeId = this.$refs.nav.currentTabIndex
                this.getCaseList(typeId, title)
            },
            getCaseCat(){
                reqCaseCat().then(res=>{
                    this.categoryList = res.data
                    let reqCaseId = this.categoryList[0].id
                    this.getCaseList(reqCaseId)
                })
            },

            getCaseList(project_id, title=''){
                let params= {project_id, title}
                reqCaseList(params).then(res=>{
                    this.caseList = res.data.data
                    console.log(this.caseList)
                })
            },

            changeTab(i){
                this.getCaseList(i)
            }
        }
    }
</script>

<style scoped>
.case-main{

}
</style>