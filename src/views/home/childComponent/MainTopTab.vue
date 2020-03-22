<template>
    <TopTab>
        <TopTabItem :path="'/home'">
            首页
        </TopTabItem>
        <TopTabItem :path="'/team'">
            医生
        </TopTabItem>
        <TopTabItem :path="'/case'">
            病例
        </TopTabItem>
        <TopTabItem :path="'/coupe'">
            科普
        </TopTabItem>

    </TopTab>
</template>

<script>
    import TopTab from "components/content/topTab/TopTab";
    import TopTabItem from "components/content/topTab/TopTabItem";

    export default {
        name: "MainTopTab",
        components: {
            TopTab,
            TopTabItem
        }
    }
</script>

<style scoped>

</style>