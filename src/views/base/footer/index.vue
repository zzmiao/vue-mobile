<template>
	<!--导航栏菜单-start-->
	<div id="nav" class="menu-wrap" ref="menuWrap">
		<router-link v-for="item in menuList" v-bind:to="item.path">
			<p><img v-bind:src="item.path==currentPath?item.iconok:item.iconno" /></p>
			<p>{{item.name}}</p>
		</router-link>
	</div>
	<!--导航栏菜单-end-->
</template>

<script>
	export default {
		name: "Footer",
		data() {
			return {
				currentPath: "", //当前地址
				menuList: [{
					name: '首页',
					path: '/home',
					iconno: require('@/assets/menuIcon/homeno.png'),
					iconok: require('@/assets/menuIcon/homeok.png'),
				}, {
					name: '案例',
					path: '/example',
					iconno: require('@/assets/menuIcon/exampleno.png'),
					iconok: require('@/assets/menuIcon/exampleok.png'),
				}, {
					name: '我的',
					path: '/mine',
					iconno: require('@/assets/menuIcon/mineno.png'),
					iconok: require('@/assets/menuIcon/mineok.png'),
				}]
			}
		},
		components: {

		},
		methods: {

		},
		computed: {

		},
		watch: {
			$route(to, from) {
				/**
				 * 监听路由变化时
				 */
				this.$data.currentPath = this.$route.path;
				console.log(this.$data.currentPath)
				console.log(to.matched)
			}
		},
		created: function() {
			this.$data.currentPath = this.$route.path;

		},
		/**
		 * 实例被挂载后调用
		 */
		mounted() {

		}

	}
</script>

<style scoped="scoped">
	.menu-wrap {
		border-top: 1px solid #dcdcdc;
		width: 100%;
		height: 60px;
		position: fixed;
		left: 0;
		bottom: 0;
		z-index: 1;
		background-color: #fff;
		display: flex;
		flex-direction: row;
	}
	
	.menu-wrap a {
		color: #333;
		font-size: 14px;
		flex: 1;
	}
	
	.menu-wrap .router-link-exact-active {
		color: #00a2ef;
		font-size: 14px;
		font-weight: bold;
	}
	
	.menu-wrap a p {
		text-align: center;
	}
	
	.menu-wrap img {
		width: 30px;
		height: 30px;
		margin-top: 5px;
	}
</style>