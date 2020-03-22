<template>
    <div class="search" @click="toSearch">
<!--        <form action="javascript:return true;">-->
            <input type="search" @focusout="cancelSearch" id="search"  @keyup.enter="search" ref="searchInput">
            <label for="search" class="hint" v-show="isSearching"><img
                    src="~assets/img/common/search.png"><span>搜索</span></label>
<!--        </form>-->
    </div>
</template>

<script>
    export default {
        name: "Search",
        data() {
            return {
                isSearching: true
            }
        },
        methods: {
            toSearch() {
                this.isSearching = false
            },
            cancelSearch() {
                this.isSearching = true
            },
            search(event){
                this.$refs.searchInput.blur();
                this.$emit('search', event.target.value)
            }
        }
    }
</script>

<style scoped lang="scss">
    .search {
        width: 100%;
        height: 22.5px;
        border-radius: 11px;
        background: #fff;
        margin-top: 5px;
        padding: 0 15px;
        position: relative;
        font-size: 11px;
        font-weight: 400;
        color: rgba(156, 156, 156, 1);
        border: none;
        line-height: 22.5px;

        input {
            font-size: 11px;
            font-weight: 400;
            color: rgba(156, 156, 156, 1);
            border: none;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
        }

        .hint {
            position: absolute;
            width: 100%;
            top: 0;
            left: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            background: #fff;

            img {
                width: 12px;
                height: 12px;
                margin-right: 5px;
            }
        }
    }
</style>