<template>
	<view>
		<swiper class="swiper-box" :current="tabIndex" :style="{height:swiperheight+'px'}" >
			<swiper-item v-for="(items,index) in cardList" :key="index"> 
				<scroll-view scroll-y class="list" @scrolltolower="loadmore(index)">
					<template v-if="items.list.length>0">
						<!-- 列表 -->
						<block @changeevent="updateData" v-for="(item,index1) in items.list" :key="index1">
							<card-list-item :item="item" :index="index1"></card-list-item>
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
		<view class="u-f-ac addinput-foot">
			<view class="u-f1 u-f-ajc" @tap="addcard">添加信用卡</view>
		</view>
	</view>
</template>

<script>
	import cardListItem from "../../components/creditcard/card-list-item.vue";
	import loadMore from "../../components/common/load-more.vue";
	import noThing from "../../components/common/no-thing.vue";
	export default {
		components:{
			loadMore,
			noThing,
			cardListItem
		},
		data() {
			return {
				 userinfo:{
				 	userpic:"",
				 	username:"",
				 	id:0,
				 },
				 swiperheight:500,
				 tabIndex:0,
				 cardList:[{
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
		methods: {
			__init(userid){
				// 初始化用户信息
				this.getUserInfo(userid)
				this.getList();
				// 开启监听
				uni.$on('updateData',this.updateData);
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
			// 上拉加载更多
			loadmore(){
				if(this.cardList[this.tabIndex].loadtext!="上拉加载更多") return;
				// 修改状态
				this.cardList[this.tabIndex].loadtext="加载中...";
				this.cardList[this.tabIndex].page++;
				this.getList();
			},
			updateData(data){
				switch (data.type){
					case "updateList":
					this.updateList(data);
						break;
					case "Card":
					this.updateCard(data);
						break;
					case "delCard":
					this.delCard(data);
						break;
				}
			},
			// 获取列表
			async getList(){
				let page =this.cardList[this.tabIndex].page;
				let [err,res] = await this.$http.get(`/user/card/${page}`,{},{ token:true });
				if (!this.$http.errorCheck(err,res)) {
					return this.cardList[this.tabIndex].loadtext="上拉加载更多";
				}
				let arr = [];
				let list = res.data.data.list;
				for (let i = 0; i < list.length; i++) {
					arr.push(this.__format(list[i]));
				}
				this.cardList[this.tabIndex].list = page > 1 ? this.cardList[this.tabIndex].list.concat(arr) : arr;
				this.cardList[this.tabIndex].firstload = true;
				this.cardList[this.tabIndex].loadtext= list.length < 10 ? "没有更多数据了" : "上拉加载更多";
				return;
			},
			// 格式转化
			__format(item){
				return {
					id:item.id,
					card:item.card,
					cardname:item.cardname,
					bank:item.bank,
					total:item.total,
					balance:item.balance,
					date_time:item.date_time,
				}
			},
			// 更新用户发布信息
			updateList(data){
				let index = this.cardList.findIndex((item)=>{
					return item.id === data.id;
				})
				console.log(index);
				if (index > -1) {
					this.cardList[index].list.push(this.__format(data));
				}
			},
			// 更新信用卡信息
			updateCard(data){
				this.cardList[this.tabIndex].list.forEach((item,index)=>{
					if (item.id === data.id) {
						item.card = data.data.card;
						item.cardname = data.data.cardname;
						item.balance=data.data.balance;
						item.date_time=data.data.date_time
					}
				})
			},
			delCard(data){
				this.cardList[this.tabIndex].list.forEach((item,index)=>{
					if (item.id === data.id) {
						this.cardList[this.tabIndex].list.splice(index,1);
					}
				})
			},
			addcard(){
				uni.navigateTo({
					url: 'addcard'
				});
			}
		}
	}
</script>

<style>
.addinput-foot{
	background: #4CD964;
	position: fixed;bottom: 0;left: 0;right: 0;height: 88upx;border-top:1upx solid #DDDDDD
}
.addinput-foot view{
	height: 100%;
}
.addinput-foot-btn{
	background: #F4F4F4;
}
</style>
