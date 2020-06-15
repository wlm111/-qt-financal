<template>
	<view>
		<swiper-tab-head :tabBars="tabBars" :tabIndex="tabIndex" @tabtap="tabtap"></swiper-tab-head>
	<swiper class="swiper-box" :style="{height:swiperheight+'px'}" :current="tabIndex" @change="tabChange">
		<!-- 支出-->
		<swiper-item>
			<scroll-view scroll-y class="list">
				<!-- 列表 -->
				<block @changeevent="updateData" v-for="(item,index) in zcremind" :key="index">
					<remind-list-item :item="item" :index="index1"></remind-list-item>
				</block>
			</scroll-view>
			</scroll-view>
		</swiper-item>
		<!-- 收入-->
		<swiper-item> 
			<scroll-view scroll-y class="list">
				<!-- 列表 -->
				<block @changeevent="updateData" v-for="(item,index) in srremind" :key="index">
					<remind-list-item :item="item" :index="index1"></remind-list-item>
				</block>
			</scroll-view>
		</swiper-item>
		<!-- 报销-->
		<swiper-item> 
			<scroll-view scroll-y class="list">
				<!-- 列表 -->
				<block @changeevent="updateData" v-for="(item,index) in swremind" :key="index">
					<remind-list-item :item="item" :index="index1"></remind-list-item>
				</block>
			</scroll-view>
		</swiper-item>
		<swiper-item> 
			<scroll-view scroll-y class="list">
				<!-- 列表 -->
				<block @changeevent="updateData" v-for="(item,index) in xykremind" :key="index">
					<remind-list-item :item="item" :index="index1"></remind-list-item>
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
	import remindListItem from "../../components/remind/remind-list-item.vue";
	export default {
		components:{
			swiperTabHead,
			loadMore,
			noThing,
			remindListItem
		},
		data() {
			return {
				swiperheight:800,
				tabIndex:0,
				tabBars:[
					{ name:"支出",id:"zhichu" },
					{ name:"收入",id:"shouru" },
					{ name:"事务",id:"baoxiao"},
					{ name:"信用卡还贷",id:"jiedai"},
				],
				zcremind:[],
				srremind:[],
				swremind:[],
				xykremind:[],
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
				this.getswList();
				this.getxykList();
				// 开启监听
				uni.$on('updateData',this.updateData);
			},
			// 获取支出列表
			async getzcList(){
				let [err,res] = await this.$http.get(`/user/zcremind`,{},{ token:true });
				if (!this.$http.errorCheck(err,res)) return;
				console.log(res)
				let list = res.data.data.list;
				this.zcremind=  list;
				return;
			},
			// 获取收入列表
			async getsrList(){
				let [err,res] = await this.$http.get(`/user/srremind`,{},{ token:true });
				if (!this.$http.errorCheck(err,res)) return;
				// console.log(res)
				let list = res.data.data.list;
				this.srremind=  list;
				return;
			},
			// 获取报销列表
			async getswList(){
				let [err,res] = await this.$http.get(`/user/swremind`,{},{ token:true });
				if (!this.$http.errorCheck(err,res)) return;
				// console.log(res)
				let list = res.data.data.list;
				this.bxremind=  list;
				return;
			},
			// 获取信用卡借贷列表
			async getxykList(){
				let [err,res] = await this.$http.get(`/user/xykremind`,{},{ token:true });
				if (!this.$http.errorCheck(err,res)) return;
				// console.log(res)
				let list = res.data.data.list;
				this.xykemind=  list;
				return;
			}
		}
	}
</script>

<style>

</style>

