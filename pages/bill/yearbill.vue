<template>
	<view>
		<!-- 今月统计 -->
		<bill-data :homedata="yeardata"></bill-data>
	<swiper class="swiper-box" :current="tabIndex" :style="{height:swiperheight+'px'}" >
		<swiper-item>
			<scroll-view scroll-y class="list">
				<!-- 列表 -->
				<block @changeevent="updateData" v-for="(item,index) in yearrecord" :key="index">
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
				yeardata:[
					{ name:"本年支出", num:0 },
					{ name:"本年收入", num:0 },
					{ name:"本年报销", num:0 },
					{ name:"本年借贷", num:0 },
				],
				swiperheight:800,
				tabIndex:0,
				yearrecord:[]
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
				this.getyearList();
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
					this.yeardata[0].num = counts.zc_year_sum;
					this.yeardata[1].num = counts.sr_year_sum;
					this.yeardata[2].num = counts.bx_year_sum;
					this.yeardata[3].num = counts.xyk_year_sum;
				}
			},
			// 获取今年账单列表
			async getyearList(){
				let [err,res] = await this.$http.get(`/user/yearrecord`,{},{ token:true });
				if (!this.$http.errorCheck(err,res)) return;
				console.log(res.data.data);
				let list = res.data.data.list;
				this.yearrecord=  list;
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
