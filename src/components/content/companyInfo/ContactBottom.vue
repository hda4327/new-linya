<template>
	<div>
		<div class="company-bottom-contract">
		    <a class="company-to-tel" :href="'tel:'+ companyInfoPhone">
		        <div class="to-tel-ico"></div>
		        <span>电话</span>
		    </a>
			
			<template v-if="isHaveShop">
				<div  class="two-btn">
					<a class="contract" >
						<img src="~assets/img/common/mobile-wx-ico.png"></img><span>在线咨询</span>
					</a>
					<a class="shop" @click="toShopUrl">
						<img src="~assets/img/common/shop-link-ico.png"></img><span>护理商城</span>
						
					</a>
				</div>
			</template>
			
			<template v-else>
				<button class="company-to-contract" open-type="contact">
					在线咨询
				</button>
			</template>
		   
		</div>
		<div style="height: 50px;"></div>
	</div>
    
</template>

<script>
    export default {
        name: "contactBottom",
        data(){
			return {
				companyInfo: {}
			}
        },
		mounted() {
			this.companyInfo = this.$store.state.companyMsg
		},
		props:{
			isHaveShop:{
				default:true,
				
			}
		},
        components:{

        },
		computed:{
			companyInfoPhone(){
				let companyInfo = this.$store.state.companyMsg
				if(companyInfo.phone){
					return this.METHOD.getOnePhone(companyInfo.phone)
				}
				else{
					return ''
				}
			}
		},
		methods:{
			toPhone(num){

			},
			toShopUrl(){

			}
			
		}
    }
</script>

<style scoped>
.company-bottom-contract{
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        background:rgba(255,255,255,1);
        box-shadow:0px 0px 10px 0px rgba(0, 0, 0, 0.06);
        display: flex;
        align-items: center;
        height: 50px;
        padding-left: 25px;
        /*padding-left: 0.35rem;*/
        padding-right: 13.5px;
        z-index: 99;
		justify-content: space-around;
    }

    .company-bottom-contract .company-to-tel{
        display: flex;
        width: 25px;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;

    }
    .company-bottom-contract .company-to-tel span{
        font-size:11px;
        font-weight:400;
        color:rgba(26,26,26,1);
    }

    .company-bottom-contract .company-to-tel .to-tel-ico{
        width: 15px;
        height: 18px;
        background-size: cover;
        background-image: url("~assets/img/common/to-tel-black.png");
    }
    .company-bottom-contract .company-to-contract{
        width:298px;
        height:36.5px;
        background:rgba(76,150,255,1);
        border-radius:18.5px;
        text-align: center;
        line-height: 36.5px;
		flex: 1;

        font-size:14px;
        font-weight:400;
        color:rgba(255,255,255,1);
        margin-left: 20px;
    }
	.two-btn{
		display: flex;
		/* flex-direction: column; */
		line-height: 36.5px;
		margin-left: 12px;
		font-weight: 400;
		
		width: 298px;
		height: 36.5px;
		flex: 1;
	}
	.two-btn a{
		font-size: 14px;
		color: rgba(255,255,255,1);
	}
	.two-btn .contract{
		width: 50%;
		height: 36.5px;
		background: rgba(0,183,113,1);
		border-radius: 18.5px 0px 0px 18.5px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.two-btn .contract img{
		margin-right: 5px;
		width: 15.5px;
		height: 13.5px;
	}
	.two-btn .shop img{
		margin-right: 5px;
		width: 11px;
		height: 14px;
	}
	
	.two-btn .shop{
		width: 50%;
		height: 36.5px;
		background: rgba(76,150,255,1);
		border-radius: 0px 18.5px 18.5px 0px;
		display: flex;
		align-items: center;
		justify-content: center;
			
	}
	button::after{
		border: none;
	}

</style>
