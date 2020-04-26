<template>
    <div id="app">
        <div class="top-name" v-if="$route.meta.showTopTab">{{companyName}}</div>
        <MainTopTab v-if="$route.meta.showTopTab"></MainTopTab>
<!--        清除fixed dom的高度-->
        <div style="height: 86px" v-show="$route.meta.showTopTab"></div>
        <keep-alive :exclude="['TeamDetail']">
            <router-view></router-view>
        </keep-alive>

        <SupportTip></SupportTip>
        <ContactBottom></ContactBottom>
    </div>
</template>

<script>
    import Home from 'views/home/Home'
    import Login from 'views/login'
    import MainTopTab from "views/home/childComponent/MainTopTab";
    import SupportTip from "components/content/supportTip/SupportTip"
    import ContactBottom from "components/content/companyInfo/ContactBottom"

    export default {
        name: 'app',
        data(){
            return {
            }
        },
        components: {
            Home,
            Login,
            MainTopTab,
            SupportTip,
            ContactBottom
        },
        methods: {},
        created(){
//            console.log(.name)
        },
        computed:{
            companyName(){
                let seller_company = this.$store.state.companyMsg.seller_company

                return seller_company && seller_company.name

            }
        }
    }
</script>

<style>
    @import "assets/css/base.css";
    @import "assets/css/var.scss";

    .top-name {
        line-height: 41px;
        text-align: center;
        background: white;
        width: 100%;
        font-weight: 700;
        color: rgba(26, 26, 26, 1);
        font-size: 16px;
        border-bottom: 1px solid rgba(244,244,244,1);
        position: fixed;
        z-index: 99;
    }
</style>
