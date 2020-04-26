<template>
    <div class="main">
		<VideoSearch @showPicker="showPicker" :typeList="typeList" @changeType="changeType"></VideoSearch>
		<VideoList :videoList="videoList"></VideoList>
		<SupportTip></SupportTip>

		<van-popup v-model="isShowPicker" position="bottom">
			<van-picker show-toolbar  :columns="typeList" title="标题"  class="picker-btn" @change="changeType" ref="picker" value-key="name">

			</van-picker>
		</van-popup>
    </div>
</template>

<script>
	import VideoSearch from './childCom/VideoSearch.vue'
	import VideoList from './childCom/VideoList.vue'
	import {reqVideoTypeList, reqVideoList} from 'network/videoReq.js'
	import SupportTip from 'components/content/supportTip/SupportTip.vue'
    export default {
        name: "videoPart",
        data(){
			return {
				typeList:[],
				videoList: [],
				videoListParam:{title:'', type:469},
				isShowPicker: false
			}
        },
        components:{
			VideoSearch,
			VideoList,
			SupportTip
        },
		created() {
			this.getVideoTypeList()
			
			this.getVideoList(this.videoListParam)
		},

		methods:{
			getVideoTypeList(){
				let sid = this.$store.state.sid
				reqVideoTypeList(sid).then(res=>{
					this.typeList = res.data
				})
			},
			getVideoList(params){
				reqVideoList(params).then(res=>{
					this.videoList = res.data
				})
			},
			changeType(typeId){
				this.videoListParam['type'] = typeId
				this.getVideoList(this.videoListParam)
			},
			showPicker(){
				this.isShowPicker = true
			}
			
		}
    }
</script>

<style scoped>
.picker-btn{
	width: 100%;
	position: absolute;
	background: #fff;
	z-index: 99;
	top: 0;
}
</style>
