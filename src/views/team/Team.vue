<template>
    <div class="team-main">
        <div class="top-bg">
            <img src="~assets/img/doctor/doctor-banner.png" alt="">
        </div>
        <statisticsTab :teamData="teamData"></statisticsTab>
        <TeamNav @changeType="getTeamData"></TeamNav>
        <TeamList :teamData="teamData.data"></TeamList>

    </div>
</template>

<script>
    import statisticsTab from './childCom/statisticsTab'
    import TeamNav from './childCom/TeamNav'
    import TeamList from './childCom/TeamList'
    import {getTeamList} from 'network/teamReq'


    export default {
        name: "Team",
        data() {
            return {
                teamData: {},
                type: 1,

            }
        },
        components:{
            statisticsTab,
            TeamNav,
            TeamList,

        },
        created() {
            this.getTeamData(this.type)

        },
        methods:{
            getTeamData(type){
                getTeamList(type).then(res => {
                    this.teamData = res.data;
                })
            },
            // toGetTeamData(type){
            //     this.getTeamData(type)
            // }
        }

    }
</script>

<style scoped>
.top-bg img{
    height: 210px;
    width: 100%;
}
</style>