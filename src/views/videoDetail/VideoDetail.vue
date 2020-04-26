<template>
    <div class="main">
		<div class="top-bg">
			<img src="~assets/img/common/top-bg3.png"></img>
		</div>
		<CompanyInfo></CompanyInfo>
		<VideoContent :videoInfo="videoInfo"></VideoContent>
		<CompanyBottom :isShowLog="false"></CompanyBottom>
		<TipContent></TipContent>
		
    </div>
</template>

<script>
	import {reqVideoDetail} from 'network/videoReq.js'
	
	import VideoContent from './childCom/videoContent.vue'
	import CompanyInfo from './childCom/CompanyInfo.vue'
	import TipContent from './childCom/TipContent.vue'
	import CompanyBottom from 'components/content/companyInfo/CompanyBottom.vue'
	
    export default {
		
        name: "videoDetail",
        data(){
			return {
				videoId:'',
				videoInfo: {}
			}
        },
		created(option) {
			this.videoId = this.$route.params.id
			this.getVideoDetail(this.videoId)
		},
        components:{
			VideoContent,
			CompanyInfo,
			TipContent,
			CompanyBottom
        },
		methods:{
			getVideoDetail(videoId){
				reqVideoDetail(videoId).then(res=>{
					
					this.videoInfo = res.data
				})
			},

		}
    }
</script>

<style scoped lang="scss">
	.top-bg{
		image{
			height: 180px;
			width: 100%;
		}
	}
</style>
