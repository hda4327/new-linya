<!--  -->
<template>
    <div class="home-main">
        <BannerSwiper></BannerSwiper>
        <CompanyInfo></CompanyInfo>
        <StatisticsShow></StatisticsShow>
        <ProjectShow></ProjectShow>
        <CoupeShow></CoupeShow>
        <VideoShow></VideoShow>
        <DoctorShow></DoctorShow>
        <CaseShow></CaseShow>

    </div>
</template>

<script>

    import BannerSwiper from "./childComponent/BannerSwiper";
    import CompanyInfo from "components/content/companyInfo/companyInfo";
    import StatisticsShow from "./childComponent/statisticsShow";
    import CaseShow from "./childComponent/CaseShow";
    import ProjectShow from "./childComponent/ProjectShow";
    import CoupeShow from "./childComponent/CoupeShow";
    import DoctorShow from "./childComponent/DoctorShow";
    import VideoShow from "./childComponent/VideoShow";


    export default {
        data() {
            return {
                bannerList: [],

            };
        },

        created() {

        },
        components: {
            BannerSwiper,
            CompanyInfo,
            StatisticsShow,
            CaseShow,
            ProjectShow,
            CoupeShow,
            DoctorShow,
            VideoShow,

        },
        methods: {}
    }

</script>
<style scoped>
    .home-main {
        background: #FAF8F8;
    }
</style>