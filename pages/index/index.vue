<template>
	<view class="content">
		<div class='header-top'>
			<swiper  class="swiper"
					circular="true" indicator-dots="true" autoplay="true" 
					interval="3000" duration="500"
					indicator-color="#2ca2f9" indicator-active-color="#d1c90e">
			    <swiper-item v-for='(item,index) in swiperImg' :key="item.id">
				     <view class="swiper-item">
					     <image class="sw-img" :src="item" mode="scaleToFill"></image>
				     </view>
			    </swiper-item>
		    </swiper>
		</div>
		<view class="example-body">
			<uni-grid :column="4" :highlight="true" >
				<uni-grid-item>
					<view class="grid-item-box" @tap="goRecordgorg">
						<image src="../../static/index/record.png" class="image" mode="aspectFill" />
						<text class="text">分类账单</text>
					</view>
				</uni-grid-item>
				<uni-grid-item>
					<view class="grid-item-box" @tap="goRecord">
						<image src="../../static/index/week.png" class="image" mode="aspectFill" />
						<text class="text">总账单</text>
					</view>
				</uni-grid-item>
				<uni-grid-item>
					<view class="grid-item-box" @tap="gotoday">
						<image src="../../static/index/today.png" class="image" mode="aspectFill" />
						<text class="text">今日账单</text>
					</view>
				</uni-grid-item>
				<uni-grid-item>
					<view class="grid-item-box" @tap="gomonth">
						<image src="../../static/index/month.png" class="image" mode="aspectFill" />
						<text class="text">本月账单</text>
					</view>
				</uni-grid-item>
				<uni-grid-item>
					<view class="grid-item-box" @tap="goyear">
						<image src="../../static/index/year.png" class="image" mode="aspectFill" />
						<text class="text">本年账单</text>
					</view>
				</uni-grid-item>
				<uni-grid-item>
					<view class="grid-item-box" @tap="goremind">
						<image src="../../static/tabbar/reminded.png" class="image" mode="aspectFill" />
						<text class="text">提醒</text>
					</view>
				</uni-grid-item>
				<uni-grid-item>
					<view class="grid-item-box" @tap="goRemindgorg">
						<image src="../../static/index/remind.png" class="image" mode="aspectFill" />
						<text class="text">分类提醒</text>
					</view>
				</uni-grid-item>
				<uni-grid-item>
					<view class="grid-item-box" @tap="gotopic">
						<image src="../../static/index/year.png" class="image" mode="aspectFill" />
						<text class="text">热门财经话题</text>
					</view>
				</uni-grid-item>
				<uni-grid-item>
					<view class="grid-item-box" @tap="gopost">
						<image src="../../static/tabbar/newsed.png" class="image" mode="aspectFill" />
						<text class="text">热门财经帖子</text>
					</view>
				</uni-grid-item>
				<uni-grid-item>
					<view class="grid-item-box" @tap="gocard">
						<image src="../../static/index/year.png" class="image" mode="aspectFill" />
						<text class="text">信用卡管理</text>
					</view>
				</uni-grid-item>
				<uni-grid-item>
					<view class="grid-item-box" @tap="gochart">
						<image src="../../static/tabbar/charted.png" class="image" mode="aspectFill" />
						<text class="text">详细报表</text>
					</view>
				</uni-grid-item>
			</uni-grid>
		</view>
		<view class="topic-new">
			<view>最近财经话题</view>
			<block v-for="(item,index) in list" :key="index">
				<topic-list :item="item" :index="index"></topic-list>
			</block>
		</view>
		<view class="btn-plusempty" hover-class="bottom-btn-hover" @click="addCustomer">
			<text class="btn-text">记账</text>
		</view>
	</view>
</template>

<script>
	import uniGrid from "@/components/uni-grid/uni-grid.vue";
	import uniGridItem from "@/components/uni-grid-item/uni-grid-item.vue";
	import topicList from "../../components/news/topic-list.vue";
	export default {
		components:{
			uniGrid,
			topicList,
			uniGridItem
		},
		data() {
			return {
				list:[],
				swiperImg: [
				      '../../static/index/swiper1.jpg',
				      '../../static/index/swiper2.jpg',
					  '../../static/index/swiper3.jpg',
					  '../../static/index/swiper4.jpg',
				  ],
				  current: 0,
				  swiperCurrent: 0,
				  month:"2020年03月",
				}
		},
		onShow() {
			this.userid=this.User.userinfo.id;
		},
		onLoad() {
			uni.getSystemInfo({
				success: (res)=> {
					let height=res.windowHeight-uni.upx2px(100)
					this.swiperheight=height;
				}
			});
			this.__init();
		},
		methods: {
			// 初始化数据
			__init(){
				this.getHot();
			},
			// 获取热门话题
			async getHot(){
				let [err,res] = await this.$http.get('/hottopic');
				if (!this.$http.errorCheck(err,res)) return;
				let arr = [];
				let list = res.data.data.list;
				for (let i = 0; i < list.length; i++) {
					arr.push({
						id:list[i].id,
						titlepic:list[i].titlepic,
						title:list[i].title,
						desc:list[i].desc,
						totalnum:list[i].post_count,
						todaynum:list[i].todaypost_count,
					})
				}
				this.list = arr;
			},
			// 轮播图
			changeSwiper(e) {
			    this.swiperCurrent = e.detail.current;
			 },
			addCustomer(){
				uni.navigateTo({
				  url: '../bill/bill',
				}) 
			},
			goRecord(){
				this.User.navigate({
					url: '../../pages/bill/billgl?userid='+this.userid,
				});
			},
			goremind(){
				this.User.navigate({
					url: '../../pages/remind/remindgl?userid='+this.userid,
				});
			},
			gopost(){
				uni.navigateTo({
					url: '../../pages/post-nav/post-nav',
				});
			},
			gotopic(){
				uni.navigateTo({
					url: '../../pages/topic-nav/topic-nav',
				});
			},
			goRecordgorg(){
				this.User.navigate({
					url: '../../pages/bill/billgory?userid='+this.userid,
				});
			},
			gotoday(){
				this.User.navigate({
					url: '../../pages/bill/todaybill?userid='+this.userid,
				});
			},
			gomonth(){
				this.User.navigate({
					url: '../../pages/bill/monthbill?userid='+this.userid,
				});
			},
			goyear(){
				this.User.navigate({
					url: '../../pages/bill/yearbill?userid='+this.userid,
				});
			},
			goRemindgorg(){
				this.User.navigate({
					url: '../../pages/remind/remindgory?userid='+this.userid,
				});
			},
			gocard(){
				this.User.navigate({
					url: '../../pages/creditcardgl/creditcardgl?userid='+this.userid,
				});
			},
			gochart(){
				uni.switchTab({
					url:"../chart/chart"
				})
			}
		}
	}
</script>

<style lang="scss">
@import "../../common/form.css";
/* 轮播图 */
	.swiper{
		width: 100%;
		height: 340upx;	
	}
	.sw-img{
		width: 760upx;
		height: 340upx;
	}
    .example-body {
    	flex-direction: row;
    	flex-wrap: wrap;
    	justify-content: center;
    	padding: 0;
    	font-size: 14px;
    	background-color: #ffffff;
    }
	.grid-item-box {
		flex: 1;
		/* position: relative;*/
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 15px 0;
	}
	.image {
		width: 50rpx;
		height: 50rpx;
	}
	.text {
		font-size: 26rpx;
		margin-top: 10rpx;
	}
	.topic-new{
		padding: 20upx;
	}
	.topic-new>view:first-child{
		padding-bottom: 5upx;
		font-size: 32upx;
	}
</style>
