<template>
    <div class="top-tab">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "TopTab"
    }
</script>

<style scoped>
    .top-tab{
        display: flex;
        background: white;
        align-items: center;
        height: 45px;
        font-size: 14px;
        position: fixed;
        top: 41px;
        left: 0;
        right: 0;
        z-index: 99;
    }
</style>