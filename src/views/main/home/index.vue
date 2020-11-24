<template>
	<div class="app-wrap">
		<div class="home-index">
			<!--轮播-start-->
			<my-swiper v-bind:swiperList="swiperList"></my-swiper>
			<!--轮播-end-->
			<!--菜单-start-->
			<ul class="nineSquare-wrap">
				<li class="nineSquare-li" v-for="item in nineSqueraList">
					<img :src="item.imgIcon" class="nineSquera-img" />
					<span class="nineSquare-name">{{item.name}}</span>
				</li>
			</ul>
			<!--菜单-end-->
			<!--最新消息-start-->
			<div class="home-newMsg">
				<div class="home-newMsg-title arrow arrowRight" v-on:click="change('苗振振')">
					<div class="newMsg-line"></div>
					<span>最新消息</span>
				</div>
				<ul class="home-newMsg-ul">
					<empty></empty>
				</ul>
			</div>
			<!--最新消息-end-->

		</div>
		<my-footer></my-footer>
	</div>
</template>

<script>
	import myFooter from "@/views/base/footer/index"
	import mySwiper from "@/views/base/swiper/index"
	import Empty from "@/views/base/empty/index"
	import {mapState} from 'vuex'
	export default {
		name: "Home",
		data() {
			return {
				/**
				 * 轮播数据
				 */
				swiperList: {
					swiper: [{
						url: "",
						img: require("@/assets/homeSwiper/阿轲.jpg"),
						name: "阿轲"
					}, {
						url: "",
						img: require("@/assets/homeSwiper/安琪拉.jpg"),
						name: "安琪拉"
					}, {
						url: "",
						img: require("@/assets/homeSwiper/白起.jpg"),
						name: "白起"
					}, {
						url: "",
						img: require("@/assets/homeSwiper/百里守约.jpg"),
						name: "百里守约"
					}]
				},
				/**
				 * 菜单数据
				 */
				nineSqueraList: [{
					id: "001",
					name: "调查问券",
					imgIcon: require("@/assets/nineSquare/参与调查问券.png"),
					path: "",
				}, {
					id: "002",
					name: "投票",
					imgIcon: require("@/assets/nineSquare/参与投票.png"),
					path: "",
				}, {
					id: "003",
					name: "电费",
					imgIcon: require("@/assets/nineSquare/缴电费.png"),
					path: "",
				}, {
					id: "004",
					name: "话费",
					imgIcon: require("@/assets/nineSquare/缴话费.png"),
					path: "",
				}, {
					id: "005",
					name: "燃气费",
					imgIcon: require("@/assets/nineSquare/缴燃气费.png"),
					path: "",
				}, {
					id: "006",
					name: "水费",
					imgIcon: require("@/assets/nineSquare/缴水费.png"),
					path: "",
				}, {
					id: "007",
					name: "违章",
					imgIcon: require("@/assets/nineSquare/缴违章.png"),
					path: "",
				}, {
					id: "008",
					name: "每日签到",
					imgIcon: require("@/assets/nineSquare/每日签到.png"),
					path: "",
				}]
			}
		},
		components: {
			myFooter,
			mySwiper,
			Empty
		},
		computed:{
			...mapState([
				"userName",
				"userPwd"
			])
		},
		methods: {
          change(name){
          	console.log(name);
          	/**
          	 * Vue.set( target , key , value)

				target: 要更改的数据源（可以是一个对象或者数组）
				key 要更改的具体数据 （索引）
				value 重新赋的值
          	 */
          	this.$set(this.nineSqueraList[0],"name",name)
          	console.log(this.nineSqueraList);
          	console.log("state",this.userName);
          }
		},
		watch: {
  
		},
		created: function() {
           
		}
	}
</script>

<style scoped="scoped">
	.home-index {
		margin-bottom: 60px;
	}
	
	.nineSquare-wrap {
		border: 1px solid #DCDCDC;
		border-radius: 5px;
		width: 96%;
		display: flex;
		flex-wrap: wrap;
		margin: auto;
		margin-top: 10px;
		background-color: #FFFFFF;
		padding-bottom: 10px;
		padding-top: 10px;
		box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.3);
	}
	
	.nineSquare-li {
		width: 25%;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-bottom: 5px;
		margin-top: 5px;
	}
	
	.nineSquera-img {
		width: 50px;
		height: 50px;
	}
	
	.nineSquare-name {
		font-size: 14px;
		line-height: 1.5;
	}
	
	.home-newMsg {
		border-top: 1px solid #DCDCDC;
		width: 100%;
		margin-top: 10px;
		background-color: #FFFFFF;
		display: flex;
		flex-direction: column;
	}
	
	.home-newMsg-title {
		border-bottom: 1px solid #DCDCDC;
		width: 100%;
		height: 50px;
		position: relative;
		display: flex;
		align-items: center;
	}
	
	.newMsg-line {
		border: 1px solid #00A2EF;
		width: 10px;
		height: 30px;
		background-color: #00A2EF;
	}
	
	.home-newMsg-title span {
		font-size: 16px;
		color: #333333;
		margin-left: 10px;
	}
	
	.home-newMsg-ul {
		width: 100%;
	}
</style>