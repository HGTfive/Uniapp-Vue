<template>
	<view class="back" @click="handleClick">
		<image src="../static/返回.png" mode="" class="img"></image>
	</view>
</template>

<script>
	export default {
		name:"Back",
		data() {
			return {
				
			};
		},
		methods:{
			handleClick(){
				uni.$emit('back-click')
			}
		}
	}
</script>

<style lang="scss" scoped>
	.back{
		width: 20px;
		height: 20px;
		border-radius: 50%;
		.img{
			width: 100%;
			height: 100%;
		}
	}
</style>