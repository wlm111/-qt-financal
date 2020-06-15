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
		<button class="user-set-btn" type="primary" @tap="submit">完成</button>
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
		methods: {
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
			//添加提醒
			async submit(){
				uni.showLoading({ title: '发布中...', mask: true });
				try{
					let [err,res] = await this.$http.post('/remind/add',{
						remind_name:this.remind_name,
						remind_nr:this.remind_nr,
						remind_time:this.remind_time,
						remind_type:this.remind_type,
						type_time:this.type_time,
						remind:this.remind
					},{
						token:true,
						checkToken:true,
						checkAuth:true
					});
					if(!this.remind_name){
						return uni.showToast({ title: '请输入提醒名称', icon:"none" });
					}
					if(!this.remind_time){
						return uni.showToast({ title: '提醒时间不能为空', icon:"none" });
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
					this.isget = true;
					uni.$emit('updateData',{ 
						type:"updateList",
						data:res.data.data.detail
					});
					uni.navigateBack({ delta: 1 });
				}catch(e){
					return;
				}
			},
			__format(item){
				let obj = {
					userid:item.user.id,
					userpic:item.user.userpic,
					username:item.user.username,
					isguanzhu:!!item.user.fens.length,
					id:item.id,
					title:item.title,
					type:"img", // img:图文,video:视频
					titlepic:item.titlepic,
					video:false,
					path:item.path,
					share:!!item.share,
					infonum:{
						index:(item.support.length>0) ? (item.support[0].type+1) : 0,//0:没有操作，1:顶,2:踩；
						dingnum:item.ding_count,
						cainum:item.cai_count,
					},
					goodnum:item.ding_count,
					commentnum:item.comment_count,
					sharenum:item.sharenum,
				};
				if (item.user_id === this.User.userinfo.id) {
					obj.isguanzhu = true;
				}
				return obj;
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
