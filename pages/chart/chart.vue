<template>
    <view class="qiun-columns">
		<swiper-tab-head :tabBars="tabBars" :tabIndex="tabIndex" @tabtap="tabtap"></swiper-tab-head>
	<swiper class="swiper-box" :style="{height:swiperheight+'px'}" :current="tabIndex" @change="tabChange">
		<!-- 支出图表 -->
		<swiper-item> 
				<view class="qiun-bg-white qiun-title-bar qiun-common-mt" >
				    <view class="qiun-title-dot-light">支出饼状图</view>
				</view>
				<view class="qiun-charts" >
				    <canvas canvas-id="canvasPie" id="canvasPie" class="charts" @touchstart="touchPie"></canvas>
				</view>
				<view class="qiun-bg-white qiun-title-bar qiun-common-mt" >
				    <view class="qiun-title-dot-light">支出折线图(单位为元)</view>
				</view>
				<!-- 折线Line纯数字-->
				<view class="line">
					<line-chart canvasId="index_line_1" :dataAs="zclineData" />
				</view>
		</swiper-item>
		<!-- 收入图表-->
		<swiper-item> 
				<view class="qiun-bg-white qiun-title-bar qiun-common-mt" >
				    <view class="qiun-title-dot-light">收入饼状图(单位为元)</view>
				</view>
				<view class="qiun-charts" >
				    <canvas canvas-id="canvasPie1" id="canvasPie1" class="charts" @touchstart="touchPie"></canvas>
				</view>
				<view class="qiun-bg-white qiun-title-bar qiun-common-mt" >
				    <view class="qiun-title-dot-light">收入折线图(单位为元)</view>
				</view>
				<!-- 折线Line纯数字-->
				<view class="line">
					<line-chart canvasId="index_line_3" :dataAs="srlineData" />
				</view>
		</swiper-item>
		<!-- 收支图表-->
		<swiper-item> 
				<view class="qiun-bg-white qiun-title-bar qiun-common-mt" >
				    <view class="qiun-title-dot-light">收支折线图(单位为元)</view>
				</view>
				<!-- 折线Line纯数字-->
				<view class="line">
					<line-chart canvasId="index_line_2" :dataAs="lineData2" />
					<view style="text-align: center;line-height: 40px;">折线LineChart Number</view>
				</view>
		</swiper-item>
		<!-- 报销图表-->
		<swiper-item> 
				<view class="qiun-bg-white qiun-title-bar qiun-common-mt" >
				    <view class="qiun-title-dot-light">报销饼状图(单位为元)</view>
				</view>
				<view class="qiun-charts" >
				    <canvas canvas-id="canvasPie2" id="canvasPie2" class="charts" @touchstart="touchPie"></canvas>
				</view>
				<view class="qiun-bg-white qiun-title-bar qiun-common-mt" >
				    <view class="qiun-title-dot-light">报销折线图(单位为元)</view>
				</view>
				<!-- 折线Line纯数字-->
				<view class="line">
					<line-chart canvasId="index_line_4" :dataAs="bxlineData" />
				</view>
		</swiper-item>
		<!-- 信用卡借贷图表-->
		<swiper-item> 
				<view class="qiun-bg-white qiun-title-bar qiun-common-mt" >
				    <view class="qiun-title-dot-light">信用卡借贷饼状图(单位为元)</view>
				</view>
				<view class="qiun-charts" >
				    <canvas canvas-id="canvasPie3" id="canvasPie3" class="charts" @touchstart="touchPie"></canvas>
				</view>
				<view class="qiun-bg-white qiun-title-bar qiun-common-mt" >
				    <view class="qiun-title-dot-light">信用卡借贷折线图(单位为元)</view>
				</view>
				<!-- 折线Line纯数字-->
				<view class="line">
					<line-chart canvasId="index_line_1" :dataAs="xyklineData" />
				</view>
		</swiper-item>
	</swiper>   
    </view>
</template>
<script>
    import uCharts from '@/components/u-charts/js/u-charts.js';
	import chartNavBar from "../../components/charts/chart-nav-bar.vue";
	import swiperTabHead from "../../components/index/swiper-tab-head.vue";
	import noThing from "../../components/common/no-thing.vue";
	import LineChart from '@/components/stan-ucharts/LineChart.vue';
    var _self;
    var canvaPie=null;
	var canvaLineA=null;
    export default {
		name: 'Index',
		components:{
			swiperTabHead,
			noThing,
			LineChart,
			chartNavBar
		},
        data() {
            return {
                cWidth:'',
                cHeight:'',
                pixelRatio:1,
                serverZCData:'',
				ServerSRData:'',
				ServerBXData:'',
				ServerXYKData:'',
				swiperheight:800,
				tabIndex:0,
				tabBars:[
					{ name:"支出",id:"zhichu" },
					{ name:"收入",id:"shouru" },
					{ name:"收支汇总",id:"sz"},
					{ name:"报销",id:"baoxiao"},
					{ name:"信用卡借贷",id:"jiedai"},
				],
				lineData2: {
					//数字的图--折线图数据
					categories: [],
					series: []
				},
				zclineData: {
					//数字的图--折线图数据
					categories: [],
					series: []
				},
				srlineData: {
					//数字的图--折线图数据
					categories: [],
					series: []
				},
				bxlineData: {
					//数字的图--折线图数据
					categories: [],
					series: []
				},
				xyklineData: {
					//数字的图--折线图数据
					categories: [],
					series: []
				},
            }
        },
        onLoad() {
            _self = this;
            this.cWidth=uni.upx2px(750);
            this.cHeight=uni.upx2px(500);
            this.getServerZCData();
			this.getServerSRData();
			this.getServerBXData();
			this.getServerXYKData();
			this.getServerhzData();
        },
		onShow() {
			this.userid=this.User.userinfo.id;
		},
        methods: {
			// tabbar点击事件
			tabtap(index){
				this.tabIndex=index;
			},
			// 滑动事件
			tabChange(e){
				this.tabIndex=e.detail.current;
			},
			//支出
           async getServerZCData(){
			   let [err,res] =await this.$http.get('/user/getzccharts/'+this.User.userinfo.id);
			   if (!this.$http.errorCheck(err,res)) return;
			   let charts = res.data.data;
			   let ZCPie={series:[]};
			   ZCPie.series=res.data.data.series;
			   _self.showPie("canvasPie",ZCPie);
            },
			//收入
			async getServerSRData(){
			   let [err,res] =await this.$http.get('/user/getsrcharts/'+this.User.userinfo.id);
			   if (!this.$http.errorCheck(err,res)) return;
			   let charts = res.data.data;
			   let SRPie={series:[]};
			   SRPie.series=res.data.data.series;
			   _self.showPie("canvasPie1",SRPie);
			 },
			 //报销
			 async getServerBXData(){
			    let [err,res] =await this.$http.get('/user/getbxcharts/'+this.User.userinfo.id);
			    if (!this.$http.errorCheck(err,res)) return;
			    let charts = res.data.data;
			    let BXPie={series:[]};
				// console.log(res);
			    BXPie.series=res.data.data.series;
			    _self.showPie("canvasPie2",BXPie);
			  },
			  //信用卡
			  async getServerXYKData(){
			     let [err,res] =await this.$http.get('/user/getxykcharts/'+this.User.userinfo.id);
			     if (!this.$http.errorCheck(err,res)) return;
			     let charts = res.data.data;
			     let XYKPie={series:[]};
			     XYKPie.series=res.data.data.series;
			     _self.showPie("canvasPie3",XYKPie);
			   },
			   //折线图
			   async getServerhzData(){
				   let [err,res] =await this.$http.get('/user/getzhoucharts/'+this.User.userinfo.id);
				   if (!this.$http.errorCheck(err,res)) return;
				   let categories = res.data.data.categories;
				   let series = res.data.data.series;
				   let srseries = res.data.data.sr_series;
				   let zcseries = res.data.data.zc_series;
				   let bxseries = res.data.data.bx_series;
				   let xykseries = res.data.data.xyk_series;
				   this.lineData2.categories= categories;
				   this.lineData2.series=series;
				   // 支出
				   this.zclineData.categories= categories;
				   this.zclineData.series=zcseries;
				   // 收入
				   this.srlineData.categories= categories;
				   this.srlineData.series=srseries;
				   // 报销
				   this.bxlineData.categories= categories;
				   this.bxlineData.series=bxseries;
				   // 信用卡
				   this.xyklineData.categories= categories;
				   this.xyklineData.series=xykseries;
				  
			    },
			showPie(canvasId,chartData){
		        canvaPie=new uCharts({
			           $this:_self,
		            canvasId: canvasId,
		            type: 'pie',
		            fontSize:11,
		            legend:true,
		            background:'#FFFFFF',
		            pixelRatio:_self.pixelRatio,
		            series: chartData.series,
		            animation: true,
		            width: _self.cWidth*_self.pixelRatio,
			           height: _self.cHeight*_self.pixelRatio,
		            dataLabel: true,
		            extra: {
		                pie: {
		                  lableWidth:15
		                }
	             },
		        });
		    },
		    touchPie(e){
		        canvaPie.showToolTip(e, {
			           format: function (item) {
		                return item.name + ':' + item.data+"元" 
		            }
		        });
		    }
        }
    }
</script>
<style>
.qiun-padding{padding:2%; width:96%;}
.qiun-wrap{display:flex; flex-wrap:wrap;}
.qiun-rows{display:flex; flex-direction:row !important;}
.qiun-columns{display:flex; flex-direction:column !important;}
.qiun-common-mt{margin-top:10upx;}
.qiun-bg-white{background:#FFFFFF;}
.qiun-title-bar{width:96%; padding:10upx 2%; flex-wrap:nowrap;}
.qiun-title-dot-light{border-left: 10upx solid #0ea391; padding-left: 10upx; font-size: 32upx;color: #000000}
.qiun-charts{width: 750upx; height:500upx;background-color: #FFFFFF;}
.charts{width: 750upx; height:500upx;background-color: #FFFFFF;}
</style>

