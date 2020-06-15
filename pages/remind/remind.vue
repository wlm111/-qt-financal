<template>
	<view class="content">
		<Calendar :currentTime='currentTime' :mark='mark' @dayChange='dayChange' @monthChange='monthChange' :rangeMode='rangeMode'
		 :range='range' @rangeChange='rangeChange' :dateStart='dateStart' :dateEnd='dateEnd' :canDrag='true'>
		</Calendar>
		<button class="user-set-btn" type="primary" @tap="goremind">点击进入用户提醒</button>
		<!-- 浮动添加按钮 -->
		<view class="btn-plusempty" hover-class="bottom-btn-hover" @click="addremind">
			<text class="btn-text">提醒</text>
		</view>
	</view>
	
</template>

<script>
	import Calendar from '@/components/Li-Calendar/Li-Calendar.vue';
	export default {
		components: {
			Calendar,
		},
		props:{
			homeinfo:Object
		},
		data() {
			return {
				dateIndex:1,
				rangeMode: false,
				currentTime: '',
				title: 'Hello',
				dateStart: '2020-1-1',
				dateEnd: '2020-12-30',
				
			}
		},
		onShow() {
			this.userid=this.User.userinfo.id;
			// console.log(this.userid);
		},
		methods: {
			scroll(e){
			},
			dayChange(data) {
			},
			monthChange(data) {
			},
			addremind(){
				uni.navigateTo({
				  url: '../../pages/remind/CreateRemind',
				}) 
			},
			goremind(){
				this.User.navigate({
					url: '../../pages/remind/remindgl?userid='+this.userid,
				});
			}
		}
	}
</script>

<style>
@import "../../common/form.css";
.btn-plusempty{
		width: 110upx;
		height: 110upx;
		background: #3ff595;
		position: fixed;
		bottom: 50upx;
		right: 20upx;
		border-radius: 100%;
		overflow: hidden;
		text-align: center;
		line-height: 110upx;
	}
	.bottom-btn-hover{
		background: #3ff595!important;;
	}
	.btn-text{
		font-weight: bold;
		font-size: 36upx;
		color: #F5F5F5;
	}
	.list .cardList {
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
	  background: #3ff595;
	  color: hsla(0,0%,100%,.3);
	  font-size: 12px;
	  box-shadow:4upx 4upx 10upx #CCCCCC;
	}
	.list .cardList .card {
	  text-overflow: ellipsis;
	  overflow: hidden;
	  white-space: nowrap;
	  line-height: 52upx;
	  color:#000;
	  text-align: center;
	}
</style>

