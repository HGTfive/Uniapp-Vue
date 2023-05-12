<template>
	<!-- //首页轮播图 -->
	<view class="container">
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" circular="true">
			<swiper-item>
				<view class="swiper-item">1</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">2</view>
			</swiper-item>
		</swiper>
	</view>
	<!-- //模块展示区域 -->
	
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
	.container{
		height: 300rpx;
		
		swiper-item,
		.swiper-item{
			width: 100%;
			background-color: pink;
		}
	}
</style>
