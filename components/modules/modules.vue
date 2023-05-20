<template>
	<view class="modules_contain">
		<view class="item">
			<image src="https://preview.qiantucdn.com/58pic/37/40/97/31x58PICSuhtqA3fnJdNS_PIC2018.png!qt324new_nowater" mode=""></image>
			<text>精品洗鞋</text>
		</view>
		<view class="item">
			<image src="https://imgo.liulanqi.net/img2022/4/13/17/2022041340176911.jpg" mode=""></image>
			<text>二手平台</text>
		</view>
		<view class="item">
			<image src="https://img.lanjinger.com/news/20220108/144402_jsmlmxohdeekx.jpeg@!thumb800" mode=""></image>
			<text>微醺精酿</text>
		</view>
	</view>
</template>

<script>
	export default {
		name:"modules",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
	.modules_contain{
		height: 180rpx;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		.item{
			width: 64px;
			height: 64px;
			// background-color: aqua;
			margin-top: 10px;
			margin-bottom: 10px;
			image{
				width: 100%;
				height: 100%;
			}
			text{
				font-size: 14px;
				font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
				
			}
		}
	}
</style>