<template>
    <div class="team-detail">
        <header class="top-bg">
        </header>
        <DoctorContent :doctorData="doctorData"></DoctorContent>
        <SatisfactionContent :satisfiedList="satisfiedList"></SatisfactionContent>
        <template v-if="doctorData.wx_img_resource">
            <DoctorWx :wxImg="wxImageUrl" :name="doctorData.name"></DoctorWx>
        </template>
        <template v-if="doctorData.photo_resource.length">
            <AtlasContent :photoResource="doctorData.photo_resource"></AtlasContent>
        </template>
        <GiftContent></GiftContent>
        <CommentContent></CommentContent>
    </div>

</template>

<script>
    import {getTeamDetail} from 'network/teamReq'
    import DoctorContent from "./childCom/DoctorContent";
    import SatisfactionContent from "./childCom/SatisfactionContent";
    import DoctorWx from "./childCom/DoctorWx";
    import GiftContent from "./childCom/GiftContent";
    import AtlasContent from "./childCom/AtlasContent";
    import CommentContent from "./childCom/CommentContent";


    export default {
        name: "TeamDetail",
        data() {
            return {
                doctorId: this.$route.params.tit,
                doctorData: {},
                swiperOption:{},
                satisfiedList: []
            }
        },
        components: {
            DoctorContent,
            SatisfactionContent,
            DoctorWx,
            AtlasContent,
            GiftContent,
            CommentContent
        },
        created() {
            this.reqTeamDetail()
        },
        methods: {
            reqTeamDetail() {
                getTeamDetail(this.doctorId).then(res => {
                    this.doctorData = res.data;
                    this.satisfiedList.push(res.data.very_satisfied)
                    this.satisfiedList.push(res.data.satisfied)
                    this.satisfiedList.push(res.data.commonly)
                })
            },

        },
        computed: {
            wxImageUrl() {
                return this.$baseUrl + this.doctorData.wx_img_resource.src
            }
        }


    }
</script>

<style scoped lang="scss">
    @import "assets/css/var.scss";

    .team-detail {
        display: flex;
        flex-direction: column;
        align-items: center;

        .top-bg {
            width: 100%;
            height: 205px;
            background-image: url($bg-path + 'doctor/doctor-top-bg.png');
            position: relative;
            /* padding-top: 1.58rem; */
            background-size: 100% 100%;
        }


    }

</style>