<template>
    <div id="app">
        <div class="top-name" v-if="$route.meta.showTopTab">杭州邻牙科技有限公司</div>
        <MainTopTab v-if="$route.meta.showTopTab"></MainTopTab>
<!--        清除fixed dom的高度-->
        <div style="height: 86px" v-show="$route.meta.showTopTab"></div>
        <keep-alive :exclude="['TeamDetail']">
            <router-view></router-view>
        </keep-alive>

        <SupportTip></SupportTip>
    </div>
</template>

<script>
    import Home from 'views/home/Home'
    import Login from 'views/login'
    import MainTopTab from "views/home/childComponent/MainTopTab";
    import SupportTip from "components/content/supportTip/SupportTip"

    export default {
        name: 'app',
        components: {
            Home,
            Login,
            MainTopTab,
            SupportTip
        },
        methods: {}
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
