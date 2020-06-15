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
		<button class="user-set-btn" 
		type="primary" @tap="submit">完成</button>
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
		methods: {
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
			//添加信用卡
			async submit(){
			   uni.showLoading({ title: '发布中...', mask: true });
			   try{
			   	let [err,res] = await this.$http.post('/creditcard/add',{
			   		card:this.card,
			   		cardname:this.cardname,
			   		bank:this.bank,
					total:this.total,
					balance:this.balance,
					date_time:this.date_time
			   	},{
			   		token:true,
			   		checkToken:true,
			   		checkAuth:true
			   	});
				if(!this.card){
					return uni.showToast({ title: '请输入信用卡卡号', icon:"none" });
				}
				if(!this.cardname){
					return uni.showToast({ title: '姓名不能为空', icon:"none" });
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
			   	uni.navigateBack({ delta: 1 });
			   }catch(e){
			   	return;
			   }	
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
