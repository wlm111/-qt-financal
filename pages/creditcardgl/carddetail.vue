<template>
	<view class="body">
		<view class="user-set-userinfo-list u-f-ac u-f-jsb">
			<view>卡号</view>
			<input class="input1" type="text" v-model="card" />
			<view class="icon iconfont icon-bi"></view>
		</view>
		<view class="user-set-userinfo-list u-f-ac u-f-jsb">
			<view>银行</view>
			<view class="u-f-ac" @tap="changeOne('bank')">
				<view>{{bankArr[bank]}}</view>
				<view class="icon iconfont icon-bi"></view>
			</view>
		</view>
		<view class="user-set-userinfo-list u-f-ac u-f-jsb">
			<view>姓名</view>
			<input class="input1" type="text" v-model="cardname" />
			<view class="icon iconfont icon-bi"></view>
		</view>
		<view class="user-set-userinfo-list u-f-ac u-f-jsb">
			<view>总金额</view>
			<input class="input1" type="text" v-model="total" />
			<view class="icon iconfont icon-bi"></view>
		</view>
		<view class="user-set-userinfo-list u-f-ac u-f-jsb">
			<view>还款金额</view>
			<input class="input1" type="text" v-model="balance" />
			<view class="icon iconfont icon-bi"></view>
		</view>
		<view class="user-set-userinfo-list u-f-ac u-f-jsb">
			<view>时间</view>
			<picker mode="date" :value="date_time" :start="startDate" :end="endDate" @change="bindDateChange">
			<view class="u-f-ac">
				<view>{{date_time}}</view>
				<view class="icon iconfont icon-bi"></view>
			</view>
			</picker>
		</view>
		<!-- 底部 -->
		<view class="u-f-ac addinput-foot">
			<view class="u-f1 u-f-ajc" @tap="delcard">删除</view>
			<view class="u-f1 u-f-ajc" @tap="changecard">编辑</view>
		</view>
	</view>
</template>

<script>
	let bankArr=['中国银行','农业银行','建设银行','农村信用社'];
	export default {
		data() {
			return {
				bankArr:bankArr,
				bank:0,
				cardname:"",
				card:"",
				date_time:"",
				balance:"",
				total:"",
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
				// console.log(obj);
				// 修改窗口标题
				uni.setNavigationBarTitle({ title: obj.cardname});
				// 加载中
				uni.showLoading({ title: 'Loading...',mask:true });
				//获取详情数据
				this.detail=obj;
				this.getdetail();
			},
			//获取信用卡详情数据
			async getdetail(){
				let [err,res] =await this.$http.get('/card/'+this.detail.id,{
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
				this.card = data.card;
				this.cardname = data.cardname;
				this.bank = data.bank;
				this.balance=data.balance;
				this.date_time=data.date_time;
				this.total=data.total;
				return uni.hideLoading();
			},
			// 修改信用卡
			async changecard(){
				let data = {
					card:this.card,
					cardname:this.cardname,
					bank:this.bank,
					total:this.total,
					balance:this.balance,
					date_time:this.date_time
				};
				let [err,res] = await this.$http.post('/editcard/'+this.detail.id,data,{
					token:true,
					checkToken:true
				});
				// 请求失败处理
				if (!this.$http.errorCheck(err,res)) return;
				// 修改状态，缓存
				this.card = data.card;
				this.cardname = data.cardname;
				this.bank = data.bank;
				this.balance=data.balance;
				this.date_time=data.date_time;
				this.total=data.total;
				uni.setStorageSync('card',this.card);
				uni.setStorageSync('cardname',this.cardname);
				uni.setStorageSync('bank',this.bank);
				// 成功
				uni.showToast({ title: '修改成功！' });
				let resdata = {
				 	type:"Card",
				 	id:this.detail.id,
				 	data:data
				};
				// 通知信用卡页
				uni.$emit('updateData',resdata);
				uni.showLoading({ title: '修改中...', mask: true });
				uni.hideLoading();
				uni.navigateBack({ delta: 1 });
			},
			//删除信用卡
			async delcard(){
				let [err,res] = await this.$http.post('/delcard',{
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
				 	type:"delCard",
				 	id:this.detail.id,
				 	data:data
				};
				uni.$emit('updateData',data);
				uni.showLoading({ title: '修改中...', mask: true });
				uni.hideLoading();
				uni.navigateBack({ delta: 1 });
			},
			// 单列选择
			changeOne(val){
				let arr=[];
				switch (val){
					case 'bank':
					arr=bankArr;
						break;
				}
				uni.showActionSheet({
					itemList: arr,
					success: res => {
						switch (val){
							case 'bank':
							this.bank=res.tapIndex;
								break;
						}
					},
				});
			},
			// 修改时间
			bindDateChange(e) {
				this.date_time = e.target.value
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
