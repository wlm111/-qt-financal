<template>
	<view>
		<swiper class="swiper-box" :current="tabIndex" :style="{height:swiperheight+'px'}" >
			<swiper-item v-for="(items,index) in remindlist" :key="index"> 
				<scroll-view scroll-y class="list" @scrolltolower="loadmore(index)">
					<!-- 统计 -->
					<remind-data :homedata="reminddata"></remind-data>
					<template v-if="items.list.length>0">
						<!-- 列表 -->
						<block @changeevent="updateData" v-for="(item,index1) in items.list" :key="index1">
							<remind-list-item :item="item" :index="index1"></remind-list-item>
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
	</view>
</template>

<script>
	import loadMore from "../../components/common/load-more.vue";
	import noThing from "../../components/common/no-thing.vue";
	import remindListItem from "../../components/remind/remind-list-item.vue";
	import remindData from "../../components/remind/remind-data.vue";
	export default {
		components: {
			loadMore,
			noThing,
			remindData,
			remindListItem
		},
		data() {
			return {
				userinfo:{
					userpic:"",
					username:"",
					id:0,
				},
				reminddata:[
					{ name:"支出提醒", num:0 },
					{ name:"收入提醒", num:0 },
					{ name:"事务提醒", num:0 },
					{ name:"还贷提醒", num:0 },
				],
				swiperheight:1000,
				tabIndex:0,
				remindlist:[{
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
					this.reminddata[0].num = counts.zc_remind;
					this.reminddata[1].num = counts.sr_remind;
					this.reminddata[2].num = counts.sw_remind;
					this.reminddata[3].num = counts.xyk_remind;
				}
			},
			// 上拉加载更多
			loadmore(){
				if(this.remindlist[this.tabIndex].loadtext!="上拉加载更多") return;
				// 修改状态
				this.remindlist[this.tabIndex].loadtext="加载中...";
				this.remindlist[this.tabIndex].page++;
				this.getList();
			},
			updateData(data){
				switch (data.type){
					case "updateList":
					this.updateList(data);
						break;
					case "Remind":
					this.updateRemid(data);
						break;
					case "delList":
					this.delList(data);
						break;
				}
			},
			// 获取列表
			async getList(){
				let page =this.remindlist[this.tabIndex].page;
				let [err,res] = await this.$http.get(`/user/remind/${page}`,{},{ token:true });
				if (!this.$http.errorCheck(err,res)) {
					return this.remindlist[this.tabIndex].loadtext="上拉加载更多";
				}
				let arr = [];
				let list = res.data.data.list;
				for (let i = 0; i < list.length; i++) {
					arr.push(this.__format(list[i]));
				}
				this.remindlist[this.tabIndex].list = page > 1 ? this.remindlist[this.tabIndex].list.concat(arr) : arr;
				this.remindlist[this.tabIndex].firstload = true;
				this.remindlist[this.tabIndex].loadtext= list.length < 10 ? "没有更多数据了" : "上拉加载更多";
				return;
			},
			// 格式转化
			__format(item){
				return {
					id:item.id,
					remind_name:item.remind_name,
					remind_nr:item.remind_nr,
					remind_time:item.remind_time,
					type_time:item.type_time,
					remind_type:item.remind_type,
					remind:item.remind,
				}
			},
			// 更新用户发布信息
			updateList(data){
				this.remindlist[this.tabIndex].list.push(this.__format(data));
			},
			// 更新提醒信息
			updateRemid(data){
				this.remindlist[this.tabIndex].list.forEach((item,index)=>{
					if (item.id === data.id) {
						item.remind_name = data.data.remind_name;
						item.remind_time = data.data.remind_time;
					}
				})
			},
			delList(data){
				this.remindlist[this.tabIndex].list.forEach((item,index)=>{
					if (item.id === data.id) {
						this.remindlist[this.tabIndex].list.splice(index,1);
					}
				})
			},
		}
	}
</script>

<style>

</style>
