<template>
	<view>
	<view class="inpt">
	   <input  type="text" placeholder="请输入金额" v-model="money"/>
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
			<view>{{category.title}}</view>
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
	<!-- 底部 -->
	<view class="u-f-ac addinput-foot">
		<view class="u-f1 u-f-ajc" @tap="delrecord">删除</view>
		<view class="u-f1 u-f-ajc" @tap="changerecord">编辑</view>
	</view>
	</view>
</template>


<script>
	let typeArr=['支出','收入','报销','信用卡借贷'];
	let account_typeArr=['现金','支付宝','微信','信用卡'];
	export default {
		data() {
			return {
				account_typeArr: account_typeArr,
				remark:"",
				typeArr:typeArr,
				type:0,
				account_type:0,
				category_id:0,
				time:"",
				money:"",
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
			this.__init(JSON.parse(e.detail));
		},
		methods: {
			// 初始化数据
			__init(obj){
				// console.log(obj);
				// 修改窗口标题
				uni.setNavigationBarTitle({ title: obj.remark});
				// 加载中
				uni.showLoading({ title: 'Loading...',mask:true });
				//获取详情数据
				this.detail=obj;
				this.getdetail();
			},
			//获取账单详情数据
			async getdetail(){
				let [err,res] =await this.$http.get('/record/'+this.detail.id,{
						token:true,
						checkToken:true,
						checkAuth:true
					});
				let error = this.$http.errorCheck(err,res,()=>{
					uni.hideLoading();
				},()=>{
					uni.hideLoading();
				});
				if (!error) return;
				let data = res.data.data.detail;
				this.money = data.money;
				this.type = data.type;
				this.time = data.time;
				this.account_type= data.account_type;
				this.category_id = data.category_id;
				this.remark=data.remark
				return uni.hideLoading();
			},
			// 修改账单
			async changerecord(){
				let data = {
					money:this.money,
					type:this.type,
					account_type:this.account_type,
					time:this.time,
					category_id:this.category.id,
					remark:this.remark
				};
				let [err,res] = await this.$http.post('/editrecord/'+this.detail.id,data,{
					token:true,
					checkToken:true
				});
				// 请求失败处理
				if (!this.$http.errorCheck(err,res)) return;
				// 修改状态，缓存
				this.money = data.money;
				this.type = data.type;
				this.time = data.time;
				this.account_type= data.account_type;
				this.category_id = data.category_id;
				this.remark=data.remark
				uni.setStorageSync('money',this.money);
				uni.setStorageSync('type',this.type);
				uni.setStorageSync('time',this.time);
				uni.setStorageSync('account_type',this.account_type);
				uni.setStorageSync('category_id',this.this.category.id);
				uni.setStorageSync('remark',this.remark);
				// 成功
				uni.showToast({ title: '修改成功！' });
				let corddata = {
				 	type:"Editcord",
				 	id:this.detail.id,
				 	data:data
				};
				// 通知账单页
				uni.$emit('updateData',corddata);
				uni.showLoading({ title: '修改中...', mask: true });
				uni.hideLoading();
				uni.navigateBack({
					delta:1,
				})
			},
			//删除账单
			async delrecord(){
				let [err,res] = await this.$http.post('/delrecord',{
						id:this.detail.id
					},{
					token:true,
					checkToken:true,
					checkAuth:true
				});
				// 请求失败处理
				if (!this.$http.errorCheck(err,res)) return;
				//成功
				let data = {
				 	type:"delList",
				 	id:this.detail.id,
				 	data:data
				};
				uni.$emit('updateData',data);
				uni.showLoading({ title: '修改中...', mask: true });
				uni.hideLoading();
				uni.navigateBack({ delta: 1 });
			},
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
				// 当前选中的名称
				this.category.title = this.category.list[e.target.value].name;
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

