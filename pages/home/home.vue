<template>
	<!-- //首页轮播图 -->
	<view class="container">
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" circular="true">
			<swiper-item>
				<view class="swiper-item">
					<image
						src="https://p0.meituan.net/merchantpic/62ee7d9c6c446996cb3add0ebc0b87a1_1_b8eb8f1aa8e3ef7a_1_S8E5HEZ89GzMbm%2FkO6f%2FJ2Fn8b6nFuhj8ymARq2%2FbIgGMfl36%2FLgGn5aBngTS29YLMdX30cGTAjAMkRz4TKOTjHOX48D7SvsKYFGQu2PhiSQAWjwtD%2Bx88U2Efmb4XtGyBzrwUXZxr4n3XR47VfebA%3D%3D"
						mode=""></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image
						src="https://img2.baidu.com/it/u=4269054804,3512454500&fm=253&fmt=auto&app=138&f=JPEG?w=498&h=232"
						mode=""></image>
				</view>
			</swiper-item>
		</swiper>
		<modules></modules>
		<view class="title">
			今日推荐
		</view>
		<view class="recomd-cont">
			<view class="recomd-item" v-for="item in 8" @click="handleToDetail(id)">
			
			</view>
		</view>
	</view>


</template>

<script>
	import modules from '../../components/modules/modules.vue'
	export default {
		components: {
			modules
		},
		data() {
			return {

			};
		},
		methods:{
			handleToDetail(id){
				uni.navigateTo({
					url:"/subPack/cateDetail/details",
					success(res) {
						console.log(res)
					},
					fail(err) {
						console.log(err)
					}
				})
				console.log(1)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		height: 300rpx;

		swiper-item,
		{
		width: 100%;

		// background-color: pink;
		image {
			width: 100vw;
			height: 300rpx;
		}
	}

	.title {
		text-align: center;
		line-height: 22px;
		margin-top: 15px;
	}

	.recomd-cont {
		width: 100vw;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-around;

		.recomd-item {
			width: 46%;
			height: 220px;
			margin-top: 2px;
			background-color: deeppink;
		}
	}
	}
</style>