<template>
	<view>
	<view class="uni-tab-bar">
	<swiper class="swiper-box" :style="{height:swiperheight+'px'}" :current="tabIndex">
		<!-- 支出 -->
		<swiper-item> 
			<scroll-view scroll-y class="list" @scrolltolower="loadmore()">
				<view class="inpt">
				   <input  type="digit" placeholder="请输入金额" v-model="money"/>
				 </view>
				 <view class="user-set-userinfo-list u-f-ac u-f-jsb">
				 	<view>记账类型</view>
				 	<view class="u-f-ac" @tap="changeOne('type')">
				 		<view>{{typeArr[type]}}</view>
				 		<view class="icon iconfont icon-bi"></view>
				 	</view>
				 </view>
				<view class="user-set-userinfo-list u-f-ac u-f-jsb">
					<view>分类名称</view>
					<picker mode="selector" :range="category.range" @change="changeCategory">
					<view class="u-f-ac">
						<view>{{category.title ? category.title : "选择分类"}}</view>
						<view class="icon iconfont icon-bi"></view>
					</view>
					</picker>
				</view>
				<view class="user-set-userinfo-list u-f-ac u-f-jsb">
					<view>账户</view>
					<view class="u-f-ac" @tap="changeOne('account_type')">
						<view>{{account_typeArr[account_type]}}</view>
						<view class="icon iconfont icon-bi"></view>
					</view>
				</view>
				<view class="user-set-userinfo-list u-f-ac u-f-jsb">
					<view>时间</view>
					<picker mode="date" :value="time" :start="startDate" :end="endDate" @change="bindDateChange">
					<view class="u-f-ac">
						<view>{{time}}</view>
						<view class="icon iconfont icon-bi"></view>
					</view>
					</picker>
				</view>
				<view class="user-set-userinfo-list u-f-ac u-f-jsb">
					<view>备注</view>
					<input class="input1" type="text" v-model="remark" />
					<view class="icon iconfont icon-bi"></view>
				</view>
				<button class="user-set-btn"
				type="primary" @tap="submit">完成</button>
			</scroll-view>
		</swiper-item>
	</swiper>   
	</view>
	</view>
</template>


<script>
	let typeArr=['支出','收入','报销','信用卡借贷'];
	let account_typeArr=['现金','支付宝','微信','信用卡'];
	export default {
		data() {
			return {
				swiperheight:500,
				tabIndex:0,
				account_typeArr: account_typeArr,
				remark:"",
				typeArr:typeArr,
				type:0,
				account_type:0,
				category_id:0,
				time:"",
				category:{
					id:0,     // 当前选中分类id
					title:"", // 当前选中分类名称
					range:[], // 可选项
					list:[]   // 服务端获取到的分类列表
				}
			}
		},
		computed: {
			startDate() {
				return this.getDate('start');
			},
			endDate() {
				return this.getDate('end');
			}
		},
		onLoad(e) {
			// 获取分类
			this.getCategory();
		},
		methods: {
			async getCategory(){
				try{
					let [err,res] = await this.$http.get('/category');
					if (!this.$http.errorCheck(err,res)) return;
					let list = res.data.data.list;
					let arr = [] , arr2 = [];
					for (let i = 0; i < list.length; i++) {
						arr.push(list[i].name);
						arr2.push({
							id:list[i].id,
							name:list[i].name
						})
					}
					this.category.range = arr;
					this.category.list = list;
				}catch(e){
					return;
				}
			},
			changeCategory(e){
				// 当前选中的id
				this.category.id = this.category.list[e.target.value].id;
				console.log(this.category.id);
				// 当前选中的名称
				this.category.title = this.category.list[e.target.value].name;
			},
			//提交
			async submit(){
				uni.showLoading({ title: '发布中...', mask: true });
				try{
					let [err,res] = await this.$http.post('/record/add',{
						money:this.money,
						type:this.type,
						account_type:this.account_type,
						time:this.time,
						category_id:this.category.id,
						remark:this.remark
					},{
						token:true,
						checkToken:true,
						checkAuth:true
					});
					if(!this.money){
						return uni.showToast({ title: '请输入金额', icon:"none" });
					}
					if(!this.category.id){
						return uni.showToast({ title: '请选择记账分类', icon:"none" });
					}
					if(!this.time){
						return uni.showToast({ title: '请选择记账时间', icon:"none" });
					}
					// 发布失败
					if (!this.$http.errorCheck(err,res)) {
						return uni.hideLoading();
					}
					// 发布成功
					uni.hideLoading();
					uni.showToast({
						title: '发布成功！'
					});
					uni.$emit('updateData',{ 
						type:"updateList",
						data:res.data.data.detail
					});
					console.log(res.data.data);
					uni.navigateBack({ delta: 1 });
				}catch(e){
					return;
				}
			},
			// tabbar点击事件
			tabtap(index){
				this.tabIndex=index;
			},
			// 滑动事件
			tabChange(e){
				this.tabIndex=e.detail.current;
			},
			// 修改时间
			bindDateChange(e) {
				this.time = e.target.value
			},
			// 单列选择
			changeOne(val){
				let arr=[];
				switch (val){
					case 'type':
					arr=typeArr;
						break;
					case 'account_type':
					arr=account_typeArr;
						break;
						
				}
				uni.showActionSheet({
					itemList: arr,
					success: res => {
						switch (val){
							case 'type':
							this.type=res.tapIndex;
								break;
							case 'account_type':
							this.account_type=res.tapIndex;
								break;
						}
					},
				});
			},
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();
			
				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			}
		},
	}
</script>

<style>
@import "../../common/form.css";
.user-set-userinfo-list{
	padding: 20upx;
	border-bottom: 1upx solid #F4F4F4;
}
.user-set-userinfo-list>view:first-child{
	font-size: 32upx;
	font-weight: bold;
	color: #9B9B9B;
}
.user-set-userinfo-list>view:last-child>image{
	width: 80upx;
	height: 80upx;
	border-radius: 100%;
}
.user-set-userinfo-list>view:last-child>input{
	text-align: right;
}
.user-set-userinfo-list>view:last-child>view:last-of-type{
	margin-left: 20upx;
	color: #9B9B9B;
}
.inpt{
	height: 90upx;
	display: flex;
	align-items: center;
	border:solid 1upx #4CD964;
	border-radius: 45upx;
	background-color:#F7F7F7;
	padding: 10upx 45upx;
}
.inpt input {
	width: 100%;
	height: 50upx;
	color: #000000;
	font-size: 36upx;
	font-weight: 200;
}
.input1{
	width: 70%;
	height: 40upx;
	display: flex;
	align-items: center;
	border:solid 1upx #4CD964;
	border-radius: 45upx;
	background-color:#F7F7F7;
	padding: 10upx 45upx;
}
</style>
