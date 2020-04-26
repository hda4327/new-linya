<template>
	<div class="search-mian">
		<div class="search-main">
			<div @click="showPicker()" class="picker-btn">
				<span class="text-line-ov-hide title">{{typeName}}</span>

				<img src="~assets/img/video/more-select.png" class="more-select"></img>
			</div>
			
			
		</div>

		<div style="height: 50px;"></div>
	</div>

</template>

<script>



	export default {
		name: "search",
		data() {
			return {
				curIndex: 0,
				
			}
		},

		props: {
			typeList: {
				type:Array,
				default(){
					return []
				}
				}
		},
		
		computed: {
			typeName(){
				return this.typeList.length?this.typeList[this.curIndex].name:''
			}
		},
		watch: {

		},
		methods: {
			changeType(res) {
				// picker选择结果的索引值
				this.curIndex = parseInt(res.detail.value)
				
				let typeId = this.typeList[this.curIndex]['type']
				this.$emit("changeType", typeId)
			},
			showPicker(){
				this.$emit('showPicker')
			}
		}
	}
</script>

<style scoped lang="scss">
	.search-main {
		position: fixed;
		height: 50px;
		left: 0;
		right: 0;
		z-index: 999;
		background: rgba(76, 150, 255, 1);
		display: flex;
		align-items: center;



		.picker-btn {
			// width: 225px;
			height: 20px;
			color: #fff;
			font-size: 14px;
			margin-left: 15px;
			.title{
				width: 320px;
				display: inline-block;
			}

			.more-select {
				width: 6.5px;
				height: 10px;
				margin-left: 5px;
				vertical-align: 3px;

			}
		}

		
	}
</style>
