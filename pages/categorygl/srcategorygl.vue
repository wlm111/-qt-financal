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
					{ icon:"canyin1",name:"餐饮 ",clicktype:"",url:""},
					{ icon:"zhusu",name:"住宿",clicktype:"",url:"" },
					{ icon:"feiji",name:"飞机",clicktype:"",url:"" }
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