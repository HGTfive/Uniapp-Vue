<template>
	<view class="container">
		<login @myclick="OnMyclick"></login>
	<!-- 	<view class="avater">
			<view class="ava-img">
				<image src="../../static/c1.png" mode=""></image>
			</view>
			<view class="nickname">
				<p class="name">Zeros.</p>
				<view class="user-msg">
					<view class="address">
						
					</view>
					<view class="age">
						
					</view>
					<view class="sign">
						
					</view>
				</view>
			</view>
		</view>
		<view class="info"> -->
			
		</view>
	</view>
</template>

<script>
	import login from "../../components/login/login.vue"
	export default {
		components:{
			login
		},
		data() {
			return {
			};
		},
		methods:{
			OnMyClick(data){
				console.loh("cate"+data)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container{
		width: 100vw;
		height: 100vh;
		display: flex;
		flex-direction: column;
		.avater{
			width: 100%;
			height: 160px;
			display: flex;
			flex: 0 25%;
			.ava-img{
				width: 70px;
				height: 70px;
				border: 1px solid black;
				border-radius: 50%;
				image{
					width: 100%;
					height: 100%;
				}
			}
		}
		.nickname{
			flex: 1;
			display: flex;
			flex-direction: column;
			.name{
				font-size: 32px;
				font-weight: 700;
			}
			.user-msg{
				flex: 1;
				background-color: #fff;
			}
		}
		.info{
			width: 100%;
			flex: 1;
			background-color: aqua;
		}
	}
</style>
