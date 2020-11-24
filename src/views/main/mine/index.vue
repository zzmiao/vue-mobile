<template>
	<div class="app-wrap">
		<div class="mine-index">
			<!--header-start-->
			<div class="mine-header">
				<div class="mine-header-left">
					<img class="mine-logo" v-bind:src="mineLogo" />
				</div>
				<div class="mine-header-right">
					<p class="mine-name">姓名</p>
					<p class="mine-phone">手机号</p>
				</div>
			</div>
			<!--header-end-->
			<!--菜单列表-start-->
			<ul class="mine-menu">
				<li class="mine-li arrow arrowRight" v-for="(item,index) in menuList" v-on:click="goNextPage(item.path)">{{item.name}}</li>
			</ul>
			<!--菜单列表-end-->
		</div>
		<my-footer></my-footer>
	</div>

</template>

<script>
	import myFooter from "@/views/base/footer/index"
	export default {
		name: "mine",
		data() {
			return {
				mineLogo: require("@/assets/mine/mine.png"),
				menuList: [{
					id: "001",
					name: '项目简介',
					path: '/projectIntroduce',
				}, {
					id: "002",
					name: '个人简介',
					path: '/myIntroduce',
				}]
			}
		},
		components: {
			myFooter
		},
		methods: {
			goNextPage: function(path) {
				this.$router.push(path);
			}
		},
		computed: {

		},
		watch: {

		},
		mounted() {
			this.$nextTick(function() {
                this.$store.commit("setUserName","苗振振");
                this.$store.commit("setUserPwd","123456");
			})
		}
	}
</script>

<style scoped="scoped">
	.mine-header {
		border: 1px solid #DCDCDC;
		border-radius: 5px;
		width: 96%;
		min-height: 100px;
		background-color: #FFFFFF;
		display: flex;
		flex-direction: row;
		margin: auto;
		margin-top: 10px;
		box-shadow: 0px 0px 5px 5px rgba(220, 220, 220, 0.5);
	}
	
	.mine-header-left {
		width: 30%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	
	.mine-logo {
		border: #00A2EF 1px solid;
		border-radius: 50%;
		width: 60px;
		height: 60px;
	}
	
	.mine-header-right {
		width: 70%;
	}
	
	.mine-name,
	.mine-phone {
		width: 100%;
		font-size: 16px;
	}
	
	.mine-name {
		margin-top: 25px;
	}
	
	.mine-phone {
		margin-top: 10px;
	}
	
	.mine-menu {
		border: 1px solid #DCDCDC;
		border-radius: 5px;
		width: 96%;
		display: flex;
		flex-direction: column;
		margin: 10px auto;
		background-color: #FFFFFF;
		box-shadow: 0px 0px 5px 5px rgba(220, 220, 220, 0.5);
	}
	
	.mine-li {
		border-bottom: 1px solid #DCDCDC;
		width: 100%;
		height: 50px;
		display: flex;
		font-size: 16px;
		align-items: center;
		padding-left: 20px;
	}
	
	.mine-li:nth-last-child(1) {
		border-bottom: 0px;
	}
</style>
<!--
	box-shadow:1px 2px 3px 4px #ccc inset；

      来分别看一下以上六个值的含义： 1px  从原点开始，沿x轴正方向的长度（倘若为负值，为沿x轴负方向的长度）；

　　　　　　　　　　　　　　　　　  2px  从原点开始，沿y轴正方向的长度；（倘若为负值，为沿y轴负方向的长度）；

　　　　　　　　　　　　　　　　　  3px  阴影的模糊度，只允许为正值；

　　　　　　　　　　　　　　　　　  4px  阴影扩展半径；

　　　　　　　　　　　　　　　　　  #ccc  阴影颜色；

　　　　　　　　　　　　　　　　　  inset  设置为内阴影（如果不写这个值，默认为外阴影）
-->