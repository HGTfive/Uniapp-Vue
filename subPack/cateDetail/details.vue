<template>
	<view class="container">
		<!-- <my-back class="backTo" v-on:back-click="BackToNav"></my-back> -->
		<view class="image-container">
			<image src="../../static/c1.png" mode=""></image>
		</view>
		<view class="text-container">
			<view class="title">
				实打实大厦打卡啊打卡大声道还是打不
			</view>
			<view class="other">
				敬请期待！
			</view>
			<!-- <view class="decribe">
				<h4>评论</h4>
				<view class="comment" @click="handleToComment">
					<h5 class="user_name">小明</h5>
					<p class="content">
						我是评论内容
					</p>
				</view>
				<view class="comment">
					<h5 class="user_name">小明</h5>
					<p class="content">
						我是评论内容
					</p>
				</view>
				<view class="comment">
					<h5 class="user_name">小明</h5>
					<p class="content">
						我是评论内容
					</p>
				</view>
				<view class="comment" v-for="item in 9">
					<h5 class="user_name">小明</h5>
					<p class="content">
						我是评论内容
					</p>
				</view>
			</view> -->
		</view>
		<view class="btn-container">
			<view class="ai-chat">
				<image src="../../static/店铺.png" mode=""></image>
				<p>店铺</p>
			</view>
			<view class="btn-add-cart">
				Add
			</view>
			<view class="btn-buy">
				Buy
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				
			}
		},
		methods:{
			handleToComment(){
				uni.navigateTo({
					url:'/subPack/commentDetail/commentDetail',
					success(e) {
						console.log(e)
					},fail(err) {
						console.log(err)
					}
				})
			},
			BackToNav(){
				console.log(111)
				uni.navigateBack({
					success(e) {
						console.log(e)
					},
					fail(err){
						console.log(err)
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	.container{
		width: 100%;
		padding-bottom: 44px;
		.backTo{
			position: fixed;
			top: 5px;
		}
		// .backTo:hover{
		// 	background-color: gray;
		// }
		
		.image-container{
			width: 100%;
			height: 200px;
			background-color: pink;
			image{
				width: 100%;
				height: 100%;
			}
		}
		.text-container{
			width: 100%;
			// height: 270px;
			// background-color: skyblue;
			.title{
				font-size: 24px;
				font-weight: 700;
				border-bottom: 1rpx solid dimgrey;
			}
			.decribe{
				width: 100%;
				color: #616161;
				.comment{
					height: 60px;
					border-top: 1rpx solid dimgrey;
					h5{
						height: 27px;
						line-height: 27px;
						font-size: 18px;
						color: black;
					}
					p{
						color: #616161;
					}
				}
			}
		}
		.btn-container{
			width: 100%;
			display: flex;
			height: 44px;
			position: fixed;
			bottom: 0px;
			.ai-chat{
				width: 20%;
				height: 100%;
				background-color: #f6f6f6;
				// padding: 5px;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				image{
					width: 30px;
					height: 44px;
				}
				p{
					font-size: 12px;
				}
			}
			.btn-add-cart{
				height:100%;
				width: 35%;
				background-color: greenyellow;
				line-height: 44px;
				text-align: center;
				font-size: 18px;
				// align-items: center;
				// flex: 1;
				
			}
			.btn-buy{
				height: 100%;
				flex: 1;
				background-color: #48B1E6;
				line-height: 44px;
				text-align: center;
				font-size: 18px;
			}
			// height: ;
			// background-color: pink;
		}
	}
</style>