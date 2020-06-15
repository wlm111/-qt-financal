<template>
	<view class="topic-nav">
		<view class="u-f-ac u-f-jsb">
			<view>热门帖子分类</view>
			<view class="u-f-ac" @tap="openPostNav">
				更多<view class="icon iconfont icon-right"></view>
			</view>
		</view>
		<view class="u-f-ac">
			<block v-for="(item,index) in postnav" :key="index">
				<view class="u-f-ajc">{{item.name}}</view>
			</block>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			postnav:Array
		},
		methods:{
			openPostNav(){
				uni.navigateTo({
					url: '../../pages/post-nav/post-nav',
				});
			}
		}
	}
</script>

<style scoped>
.topic-nav{
	border-bottom: 1upx solid #EEEEEE;
	border-top: 1upx solid #EEEEEE;
	padding: 20upx;
}
.topic-nav>view:first-child{
	margin-bottom: 10upx;
}
.topic-nav>view:first-child view{
	color: #9E9E9E;
}
.topic-nav>view:first-child>view:first-child{
	color: #333333;
	font-size: 32upx;
}
.topic-nav>view:last-child>view{
	flex: 1;
	background: #3ff595;
	color: #333333;
	border-radius: 10upx;
	margin: 0 10upx;
}
</style>