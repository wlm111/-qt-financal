<template>
	<view class="home-data u-f-ac animated fadeIn fast">
		<block v-for="(item,index) in homedata" :key="index">
			<view class="u-f1 u-f-ajc u-f-column">
				<view>{{item.num}}</view>{{item.name}}
			</view>
		</block>
	</view>
</template>

<script>
	export default {
		props:{
			homedata:Array
		}
	}
</script>

<style scoped>
.home-data{ 
	z-index: 1;
	background: #3ff595;
	padding: 20upx 40upx;
	box-shadow:4upx 4upx 10upx #CCCCCC;
}
.home-data>view{
	color: #333333;
}
.home-data>view>view{
	font-size: 32upx;
	color: #333333;
}
</style>
