<template>
	<view class="cate-box">
		<view class="log-box">
			<uni-icons type="contact-filled" size="100" ></uni-icons>
			<button type="primary" @click="getJscode()" class="button">一键登录</button>
			<text class="text">登录享受更多权益</text>
		</view>
	</view>
</template>

<script>
	export default {
		name:'login',
		properties:{
			
		},
		data() {
			return {
				userinfo:[],
				js_code:"",
				isShow:true,
				data:[]
			};
		},
		methods:{
			 getJscode(){
				uni.getUserProfile({
					desc:'ssss',	
				}).then(e=>{
						console.log(e)
						uni.login({
							desc:"weixin",
						}).then(res=>{
						console.log(res)
						const code=res[1].code
						uni.$http.post('/api/wxlogin',{'jscode':code}).then(ress=>{
					console.log(ress)
					this.data = ress.data
					if(ress.data.status == 200) this.isShow = false
				})
				})
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.cate-box{
		
		.log-box{
			height: 750rpx;
			background-color: #f8f8f8;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			
			.button{
				width: 90%;
				border-radius: 50rpx;
				margin: 15px 0;
				background-color: #48B1E6;
			}
			
			.text{
				font-size: 12px;
			}
		}
	}
</style>
