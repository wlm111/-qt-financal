<template>
	<view>
		<!-- 今月统计 -->
		<bill-data :homedata="monthdata"></bill-data>
	<swiper class="swiper-box" :current="tabIndex" :style="{height:swiperheight+'px'}" >
		<swiper-item>
			<scroll-view scroll-y class="list">
				<!-- 列表 -->
				<block @changeevent="updateData" v-for="(item,index) in monthrecord" :key="index">
					<billgory-list :item="item" :index="index"></billgory-list>
				</block>
			</scroll-view>
		</swiper-item>
	</swiper>
	</view>
</template>

<script>
	import swiperTabHead from "../../components/index/swiper-tab-head.vue";
	import loadMore from "../../components/common/load-more.vue";
	import noThing from "../../components/common/no-thing.vue";
	import billgoryList from "../../components/bill/billgory-list.vue";
	import billData from "../../components/bill/bill-data.vue";
	export default {
		components:{
			swiperTabHead,
			loadMore,
			noThing,
			billgoryList,
			billData
		},
		data() {
			return {
				monthdata:[
					{ name:"本月支出", num:0 },
					{ name:"本月收入", num:0 },
					{ name:"本月报销", num:0 },
					{ name:"本月借贷", num:0 },
				],
				swiperheight:800,
				tabIndex:0,
				monthrecord:[]
			}
		},
		onLoad(e) {
			this.__init(e.userid);
		},
		methods: {
			// tabbar点击事件
			tabtap(index){
				this.tabIndex=index;
			},
			// 滑动事件
			tabChange(e){
				this.tabIndex=e.detail.current;
			},
			__init(userid){
				this.getmonthList();
				// 初始化统计数据
				this.getCounts(userid);
				// 开启监听
				uni.$on('updateData',this.updateData);
			},
			// 初始化统计数据
			async getCounts(id){
				let counts;
				let [err,res] =await this.$http.get('/user/getcounts/'+id);
				if (!this.$http.errorCheck(err,res)) return;
				counts = res.data.data;
				// console.log(counts)
				if (counts) {
					this.monthdata[0].num = counts.zc_month_sum;
					this.monthdata[1].num = counts.sr_month_sum;
					this.monthdata[2].num = counts.bx_month_sum;
					this.monthdata[3].num = counts.xyk_month_sum;
				}
			},
			// 获取月账单列表
			async getmonthList(){
				let [err,res] = await this.$http.get(`/user/monthrecord`,{},{ token:true });
				if (!this.$http.errorCheck(err,res)) return;
				console.log(res.data.data);
				let list = res.data.data.list;
				this.monthrecord=  list;
			}
		}
	}
</script>

<style>
.home-list{
	padding: 20upx;
}
.home-adv{
	padding: 20upx;
}
.home-adv>image{
	border-radius: 20upx;
	height: 150upx;
}
</style>