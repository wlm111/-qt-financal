<template>
	<view>
		<uni-nav-bar :fixed="true" :statusBar="true" :border="false">
			<!-- 中间 -->
			<view class="nav-tab-bar u-f-ajc">
				<block v-for="(tab,index) in tabBars" :key="tab.id">
					<view class="u-f-ajc" 
					:class="{'active':tabIndex==index}" 
					@tap="changeTab(index)">
						{{tab.name}}
						<view v-if="(tabIndex==index)" class="nav-tab-bar-line"></view>
					</view>
				</block>
			</view>
		</uni-nav-bar>
	</view>
</template>

<script>
	import uniNavBar from "../../components/uni-nav-bar/uni-nav-bar.vue";
	export default {
		components:{
			uniNavBar
		},
		props:{
			tabBars:Array,
			tabIndex:Number
		},
		methods:{
			changeTab(index){
				this.$emit('change-tab',index);
			}
		}
	}
</script>

<style scoped>
.nav-tab-bar{
	width: 100%;
	margin-left: -20upx;
	position: relative;
}
.nav-tab-bar>view{
	font-size: 28upx;
	padding: 0 15upx;
	font-weight: bold;
	color: #969696;
}
.active{
	color: #333333!important;
}
.nav-tab-bar-line{
	border-bottom: 5upx solid #3ff595;
	border-top: 5upx solid #3ff595;
	width: 70upx;
	position: absolute;
	bottom: 12upx;
}
</style>

