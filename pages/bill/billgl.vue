<template>
	<view>
		<swiper class="swiper-box" :current="tabIndex" :style="{height:swiperheight+'px'}" >
			<swiper-item v-for="(items,index) in recordlist" :key="index"> 
				<scroll-view scroll-y class="list" @scrolltolower="loadmore(index)">
					<!-- 统计 -->
					<bill-data :homedata="recorddata"></bill-data>
					<template v-if="items.list.length>0">
						<!-- 列表 -->
						<block @changeevent="updateData" v-for="(item,index1) in items.list" :key="index1">
							<bill-list-item :item="item" :index="index1"></bill-list-item>
						</block>
						<!-- 上拉加载 -->
						<load-more :loadtext="items.loadtext"></load-more>
					</template>
					<template v-else-if="!items.firstload">
						<view style="font-size: 50upx;font-weight: bold;color: #CCCCCC;
						padding-top: 100upx;" class="u-f-ajc">Loading ...</view>
					</template>
					<template v-else>
						<!-- 无内容默认 -->
						<no-thing></no-thing>
					</template>
				</scroll-view>
			</swiper-item>
		</swiper>
		<!-- 底部 -->
		<view class="u-f-ac add">
			<view class="u-f1 u-f-ajc"  @tap="addrecord">新增记账</view>
		</view>
	</view>
</template>

<script>
	import loadMore from "../../components/common/load-more.vue";
	import noThing from "../../components/common/no-thing.vue";
	import billListItem from "../../components/bill/bill-list-item.vue";
	import billData from "../../components/bill/bill-data.vue";
	export default {
		components: {
			loadMore,
			noThing,
			billData,
			billListItem
		},
		data() {
			return {
				userinfo:{
					userpic:"",
					username:"",
					id:0,
				},
				recorddata:[
					{ name:"支出", num:0 },
					{ name:"收入", num:0 },
					{ name:"报销", num:0 },
					{ name:"信用卡借贷", num:0 },
				],
				swiperheight:1000,
				tabIndex:0,
				recordlist:[{
					loadtext:"上拉加载更多",
					page:1,
					firstload:false,
					list: []
				}]
			}
		},
		onLoad(e) {
			this.__init(e.userid);
		},
		// 上拉触底事件
		onReachBottom() {
			// 上拉加载
			this.loadmore();
		},
		// 监听下拉刷新 
		onPullDownRefresh(){
			this.getList();
		},
		methods: {
			__init(userid){
				// 初始化用户信息
				this.getUserInfo(userid);
				this.getList();
				// 开启监听
				uni.$on('updateData',this.updateData);
				// 初始化统计数据
				this.getCounts(userid);
			},
			// 初始化用户信息
			async getUserInfo(userid){
				let sexArr=['不限','男','女'];
				let qgArr=['秘密','未婚','已婚'];
				// 用户本人
				let isme;
				if (userid == this.User.userinfo.id) {
					info = this.User.userinfo;
					isme = true;
				}
				this.userinfo = {
					isme:isme,
					id:info.id,
					userpic:info.userpic,
					username:info.username,
				}
			},
			// 初始化统计数据
			async getCounts(id){
				let counts;
				let [err,res] =await this.$http.get('/user/getcounts/'+id);
				if (!this.$http.errorCheck(err,res)) return;
				counts = res.data.data;
				if (counts) {
					this.recorddata[0].num = counts.zc_sum;
					this.recorddata[1].num = counts.sr_sum;
					this.recorddata[2].num = counts.bx_sum;
					this.recorddata[3].num = counts.xyk_sum;
				}
			},
			// 上拉加载更多
			loadmore(){
				if(this.recordlist[this.tabIndex].loadtext!="上拉加载更多") return;
				// 修改状态
				this.recordlist[this.tabIndex].loadtext="加载中...";
				this.recordlist[this.tabIndex].page++;
				this.getList();
			},
			updateData(data){
				switch (data.type){
					case "updateList":
					this.updateList(data);
						break;
					case "Editcord":
					this.updateRecord(data);
						break;
					case "delList":
					this.delList(data);
						break;
				}
			},
			// 获取列表
			async getList(){
				let page =this.recordlist[this.tabIndex].page;
				let [err,res] = await this.$http.get(`/user/record/${page}`,{},{ token:true });
				if (!this.$http.errorCheck(err,res)) {
					return this.recordlist[this.tabIndex].loadtext="上拉加载更多";
				}
				// console.log(res)
				let arr = [];
				let list = res.data.data.list;
				let index=this.tabIndex;
				for (let i = 0; i < list.length; i++) {
					arr.push(this.__format(list[i]));
				}
				this.recordlist[index].list = page > 1 ? this.recordlist[index].list.concat(arr) : arr;
				this.recordlist[index].firstload = true;
				this.recordlist[index].loadtext= list.length < 10 ? "没有更多数据了" : "上拉加载更多";
				return;
			},
			// 格式转化
			__format(item){
				return {
					id:item.id,
					money:item.money,
					type:item.type,
					account_type:item.account_type,
					time:item.time,
					category_id:item.category_id,
					remark:item.remark,
					category:{
						id:item.category.id,
						name:item.category.name,
					}
				}
			},
			// 更新用户发布信息
			updateList(data){
				this.recordlist[this.tabIndex].list.push(this.__format(data));
			},
			// 更新提醒信息
			updateRecord(data){
				this.recordlist[this.tabIndex].list.forEach((item,index)=>{
					if (item.id === data.id) {
						
						item.category.name = data.data.category.name;
						item.money = data.data.money;
						item.time = data.data.time;
					}
				})
			},
			delList(data){
				this.recordlist[this.tabIndex].list.forEach((item,index)=>{
					if (item.id === data.id) {
						this.recordlist[this.tabIndex].list.splice(index,1);
					}
				})
			},
			addrecord(){
				uni.navigateTo({
					url: 'bill'
				});
			}
		}
	}
</script>

<style>
.add{
	background: #4CD964;
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	height: 88upx;
	border-top:1upx solid #DDDDDD
}
.add view{
	height: 100%;
}
.user-record-data{
	background: #FFFFFF;
	width: 100%;
	height: 40upx;
	border-top-left-radius: 20upx;
	border-top-right-radius: 20upx;
	margin-top: -15upx;
}
</style>
