<template>
	<view>
		<swiper-tab-head :tabBars="tabBars" :tabIndex="tabIndex" @tabtap="tabtap"></swiper-tab-head>
	<swiper class="swiper-box" :style="{height:swiperheight+'px'}" :current="tabIndex" @change="tabChange">
		<!-- 支出-->
		<swiper-item>
			<scroll-view scroll-y class="list">
				<!-- 列表 -->
				<block @changeevent="updateData" v-for="(item,index) in zcrecord" :key="index">
					<billgory-list :item="item" :index="index"></billgory-list>
				</block>
			</scroll-view>
		</swiper-item>
		<!-- 收入-->
		<swiper-item> 
			<scroll-view scroll-y class="list">
				<!-- 列表 -->
				<block @changeevent="updateData" v-for="(item,index) in srrecord" :key="index">
					<billgory-list :item="item" :index="index"></billgory-list>
				</block>
			</scroll-view>
		</swiper-item>
		<!-- 报销-->
		<swiper-item> 
			<scroll-view scroll-y class="list">
				<!-- 列表 -->
				<block @changeevent="updateData" v-for="(item,index) in bxrecord" :key="index">
					<billgory-list :item="item" :index="index"></billgory-list>
				</block>
			</scroll-view>
		</swiper-item>
		<swiper-item> 
			<scroll-view scroll-y class="list">
				<!-- 列表 -->
				<block @changeevent="updateData" v-for="(item,index) in xykrecord" :key="index">
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
	export default {
		components:{
			swiperTabHead,
			loadMore,
			noThing,
			billgoryList
		},
		data() {
			return {
				swiperheight:800,
				tabIndex:0,
				tabBars:[
					{ name:"支出",id:"zhichu" },
					{ name:"收入",id:"shouru" },
					{ name:"报销",id:"baoxiao"},
					{ name:"信用卡借贷",id:"jiedai"},
				],
				zcrecord:[],
				srrecord:[],
				bxrecord:[],
				xykrecord:[],
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
				this.getzcList();
				this.getsrList();
				this.getbxList();
				this.getxykList();
				// 开启监听
				uni.$on('updateData',this.updateData);
			},
			// 获取支出列表
			async getzcList(){
				let [err,res] = await this.$http.get(`/user/zcrecord`,{},{ token:true });
				if (!this.$http.errorCheck(err,res)) return;
				// console.log(res)
				let list = res.data.data.list;
				this.zcrecord=  list;
				return;
			},
			// 获取收入列表
			async getsrList(){
				let [err,res] = await this.$http.get(`/user/srrecord`,{},{ token:true });
				if (!this.$http.errorCheck(err,res)) return;
				// console.log(res)
				let list = res.data.data.list;
				this.srrecord=  list;
				return;
			},
			// 获取报销列表
			async getbxList(){
				let [err,res] = await this.$http.get(`/user/bxrecord`,{},{ token:true });
				if (!this.$http.errorCheck(err,res)) return;
				// console.log(res)
				let list = res.data.data.list;
				this.bxrecord=  list;
				return;
			},
			// 获取信用卡借贷列表
			async getxykList(){
				let [err,res] = await this.$http.get(`/user/xykrecord`,{},{ token:true });
				if (!this.$http.errorCheck(err,res)) return;
				// console.log(res)
				let list = res.data.data.list;
				this.xykecord=  list;
				return;
			}
		}
	}
</script>

<style>

</style>
