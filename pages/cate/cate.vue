<template>
	<view>
		<login @myclick="OnMyclick"></login>
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
</style>
