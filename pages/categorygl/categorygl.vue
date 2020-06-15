<template>
	<view>
		<view class="home-list">
			<block v-for="(item,index) in list" :key="index">
				<home-list-item :item="item" :index="index"></home-list-item>
			</block>
		</view>
	</view>
</template>

<script>
	import homeListItem from "../../components/home/home-list-item.vue";
	export default {
		components:{
			homeListItem
		},
		data() {
			return {
				list:[
					{ icon:"bianji",name:"支出分类管理",clicktype:"navigateTo",url:"../categorygl/srcategorygl"},
					{ icon:"licai",name:"收入分类管理",clicktype:"navigateTo",url:"../categorygl/zccategorygl" },
					{ icon:"caifua",name:"账户分类管理",clicktype:"navigateTo",url:"../categorygl/zhcategorygl" }
				]
			}
		},
		methods: {
			
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
