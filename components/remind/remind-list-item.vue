<template>
	<view @tap="reminddetail" class="list1">
		<view class="cardList">
				<view class="card">提醒名称：{{item.remind_name}}</view>
				<view class="card">提醒时间：{{item.remind_time}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			item:Object,
			index:Number
		},
		methods:{
			reminddetail(){
				uni.navigateTo({
				  url: '../../pages/remind/reminddetail?detail='+JSON.stringify(this.item),
				}) 
			}
		}
	}
</script>

<style>
	@import "../../common/form.css";
	.list1 {
	  position: relative;
	  display: flex;
	  margin: 0 40upx;
	  padding-top: 40upx;
	  height: 200upx;
	}
	.list1 .cardList {
		  -webkit-box-flex: 1;
		  -ms-flex: 1;
		  flex: 1;
		  display: -webkit-box;
		  display: -ms-flexbox;
		  display: flex;
		  -webkit-box-orient: vertical;
		  -webkit-box-direction: normal;
		  -ms-flex-direction: column;
		  flex-direction: column;
		  -webkit-box-pack: center;
		  -ms-flex-pack: center;
		  justify-content: center;
		  padding: 0 40upx;
		  height: 200upx;
		  overflow: hidden;
		  background: #EEEEEE;
		  color: hsla(0,0%,100%,.3);
		  font-size: 12px;
		  box-shadow:4upx 4upx 10upx #CCCCCC;
		}
		.list1 .cardList .card {
		  text-overflow: ellipsis;
		  overflow: hidden;
		  white-space: nowrap;
		  line-height: 52upx;
		  color:#000;
		  text-align: center;
		}
</style>
