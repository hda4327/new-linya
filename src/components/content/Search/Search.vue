<template>
    <div class="outer-search">
        <div class="search" @click="toSearch">
            <!--        <form action="javascript:return true;">-->
            <input type="search" @focusout="cancelSearch" id="search"  @keyup.enter="search" ref="searchInput" @focus="addCover">
            <label for="search" class="hint" v-show="isSearching"><img
                    src="~assets/img/common/search.png"><span>搜索</span></label>
            <!--        </form>-->
        </div>
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
            },
            addCover(){
                this.$EventBus.$emit('addCover')
            }
        }
    }
</script>

<style scoped lang="scss">
    .outer-search{
        padding: 5px 15px;
        height: 42px;
        width: 100%;
        background: #FAF8F8;
    }

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
            border-radius: 11px;

            img {
                width: 12px;
                height: 12px;
                margin-right: 5px;
            }
        }
    }
</style>