<template>
	<view class="body">
		<view class="inpt">
			<input type="text" v-model="remind_name" placeholder="请输入提醒名称"  />
		</view>
		<view class="user-set-userinfo-list u-f-ac u-f-jsb">
			<view>提醒类型</view>
			<view class="u-f-ac" @tap="changeOne('remind_type')">
				<view>{{remind_typeArr[remind_type]}}</view>
				<view class="icon iconfont icon-bi"></view>
			</view>
		</view>
		<view class="user-set-userinfo-list u-f-ac u-f-jsb">
			<view>提醒时间</view>
			<picker mode="date" :value="remind_time" :start="startDate" :end="endDate" @change="bindDateChange">
			<view class="u-f-ac">
				<view>{{remind_time}}</view>
				<view class="icon iconfont icon-bi"></view>
			</view>
			</picker>
		</view>
		<view class="user-set-userinfo-list u-f-ac u-f-jsb">
			<view>提醒</view>
			<view class="u-f-ac" @tap="changeOne('type_time')">
				<view>{{type_timeArr[type_time]}}</view>
				<view class="icon iconfont icon-bi"></view>
			</view>
		</view>
		<view class="user-set-userinfo-list u-f-ac u-f-jsb">
			<view>闹钟提醒</view>
			<view class="u-f-ac">
				<switch v-model="remind" />
			</view>
		</view>
		<view class="user-set-userinfo-list u-f-ac u-f-jsb">
			<view>备注</view>
			<input class="input1" type="text" v-model="remind_nr" />
			<view class="icon iconfont icon-bi"></view>
		</view>
		<!-- 底部 -->
		<view class="u-f-ac addinput-foot">
			<view class="u-f1 u-f-ajc" @tap="delremind">删除</view>
			<view class="u-f1 u-f-ajc" @tap="changeremind">编辑</view>
		</view>
	</view>
</template>

<script>
	let remind_typeArr=['支出提醒','收入提醒','事务提醒','信用卡还贷提醒'];
	let type_timeArr=['开始时','提前1个小时','提前1天','提前2天'];
	export default {
		data() {
			return {
				remind_typeArr:remind_typeArr,
				type_timeArr:type_timeArr,
				type_time:0,
				remind_type:0,
				remind_time:"",
				remind_name:"",
				remind_nr:"",
				remind:0
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
			this.__init(JSON.parse(e.detail));
		},
		methods: {
			// 初始化数据
			__init(obj){
				console.log(obj);
				// 修改窗口标题
				uni.setNavigationBarTitle({ title: obj.remind_name });
				// 加载中
				uni.showLoading({ title: 'Loading...',mask:true });
				//获取详情数据
				this.detail=obj;
				this.getdetail();
			},
			//获取提醒详情数据
			async getdetail(){
				let [err,res] =await this.$http.get('/remind/'+this.detail.id,{
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
				this.remind_name = data.remind_name;
				this.remind_nr = data.remind_nr;
				this.remind_time = data.remind_time;
				this.remind_type= data.remind_type;
				this.type_time = data.type_time;
				this.remind=data.remind
				return uni.hideLoading();
			},
			// 修改提醒
			async changeremind(){
				let data = {
					remind_name:this.remind_name,
					remind_nr:this.remind_nr,
					remind_time:this.remind_time,
					remind_type:this.remind_type,
					type_time:this.type_time,
					remind:this.remind
				};
				let [err,res] = await this.$http.post('/editremind/'+this.detail.id,data,{
					token:true,
					checkToken:true
				});
				// 请求失败处理
				if (!this.$http.errorCheck(err,res)) return;
				// 修改状态，缓存
				this.remind_name = data.remind_name;
				this.remind_nr = data.remind_nr;
				this.remind_time = data.remind_time;
				this.remind_type= data.remind_type;
				this.type_time = data.type_time;
				this.remind=data.remind;
				uni.setStorageSync('remind_name',this.remind_name);
				uni.setStorageSync('remind_nr',this.remind_nr);
				uni.setStorageSync('remind_time',this.remind_time);
				uni.setStorageSync('remind_type',this.remind_type);
				uni.setStorageSync('type_time',this.type_time);
				uni.setStorageSync('remind',this.remind);
				// 成功
				uni.showToast({ title: '修改成功！' });
				let resdata = {
				 	type:"Remind",
				 	id:this.detail.id,
				 	data:data
				};
				// 通知提醒页
				uni.$emit('updateData',resdata);
				uni.showLoading({ title: '修改中...', mask: true });
				uni.hideLoading();
				uni.navigateBack({ delta: 1 });
			},
			//删除提醒
			async delremind(){
				let [err,res] = await this.$http.post('/delremind',{
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
			// 修改时间
			bindDateChange(e) {
				this.remind_time = e.target.value
			},
			// 单列选择
			changeOne(val){
				let arr=[];
				switch (val){
					case 'remind_type':
					arr=remind_typeArr;
						break;
					case 'type_time':
					arr=type_timeArr;
						break;
				}
				uni.showActionSheet({
					itemList: arr,
					success: res => {
						switch (val){
							case 'remind_type':
							this.remind_type=res.tapIndex;
								break;
							case 'type_time':
							this.type_time=res.tapIndex;
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
		}
	}
</script>

<style lang="scss">
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
	input {
		width: 100%;
		height: 50upx;
		color: #000000;
		font-size: 36upx;
		font-weight: 200;
	}
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
