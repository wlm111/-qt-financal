<template>
	<view>
		<template v-if="!loginStatus">
			<!-- 未登录 -->
			<view class="u-f-ajc">登录财务小秘书，体验更多功能</view>
			<!-- 第三方登陆 -->
			<!-- <other-login :noback="true" @logining="isLogin()"></other-login> -->
			<!-- 账号密码登陆 -->
			<view class="u-f-ajc" @tap="openLogin">账号密码登录 <view class="icon iconfont icon-right"></view> </view>
		</template>
		<template v-else>
			<!-- 登录-->
			<home-info :homeinfo="homeinfo"></home-info>
		</template>
		<!-- 数据 -->
		<home-data :homedata="homedata"></home-data>
		<!-- 功能列表 -->
		<view class="home-list">
			<block v-for="(item,index) in list" :key="index">
				<home-list-item :item="item" :index="index"></home-list-item>
			</block>
		</view>
		
	</view>
</template>

<script>
	import homeListItem from "../../components/home/home-list-item.vue";
	import homeInfo from "../../components/home/home-info.vue";
	import otherLogin from "../../components/home/other-login.vue";
	import homeData from "../../components/home/home-data.vue";
	export default {
		components:{
			homeListItem,
			homeInfo,
			otherLogin,
			homeData
		},
		data() {
			return {
				loginStatus:false,
				homeinfo:{
					userpic:"../../static/demo/userpic/11.jpg",
					username:"昵称",
					totalnum:0,
					todaynum:0,
				},
				homedata:[
					{ name:"记账天数", num:0 },
					{ name:"提醒总次数", num:0 },
					{ name:"记账总笔数", num:0 },
				],
				list:[
					{ icon:"shezhi",name:"记账设置",clicktype:"navigateTo",url:""},
					{ icon:"dengdai",name:"浏览历史",clicktype:"navigateTo",url:"../user-history/user-history"},
					{ icon:"liebiao",name:"业务管理",clicktype:"navigateTo",url:"../categorygl/categorygl" },
					{ icon:"xinyongqiahuankuan",name:"信用卡管理",clicktype:"navigateTo",url:"../creditcardgl/creditcardgl" },
					{ icon:"guanli",name:"提醒管理",clicktype:"navigateTo",url:"../remind/remindgl" },
					{ icon:"guanyuwomen",name:"关于财务提醒小秘书",clicktype:"navigateTo",url:"../user-set-about/user-set-about" },
				]
			};
		},
		onNavigationBarButtonTap(e) {
			if(e.index==0){
				this.User.navigate({
					url: '../user-set/user-set',
				});
			}
		},
		onShow() {
			this.isLogin();
		},
		methods:{
			// 判断用户是否登录
			isLogin(){
				if (!this.User.token){
					this.loginStatus = false;
					this.homeinfo={
						userpic:"",
						username:"",
						totalnum:0,
						todaynum:0,
					};
					this.homedata[0].num = 0;
					this.homedata[1].num = 0;
					this.homedata[2].num = 0;
					return;
				}
				// 用户已登录
				this.homeinfo.id = this.User.userinfo.id;
				this.homeinfo.userpic = this.User.userinfo.userpic;
				this.homeinfo.username = this.User.userinfo.username;
				this.homeinfo.totalnum = this.User.counts.post_count || 0;
				this.homeinfo.todaynum = this.User.counts.today_posts_count || 0;
				this.homedata[0].num = this.User.counts.post_count || 0;
				this.homedata[1].num = this.User.counts.remind_count || 0;
				this.homedata[2].num = this.User.counts.record_count || 0;
				this.loginStatus = true;
			},
			openLogin(){
				uni.navigateTo({
					url: '../login/login'
				});
			}
		}
	}
</script>

<style>

.home-list{
	padding: 20upx;
}
.home-adv{
	padding: 20upx;
}
.home-adv>image{
	border-radius: 20upx;
	height: 150upx;
}
</style>
