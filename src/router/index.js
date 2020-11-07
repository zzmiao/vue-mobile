import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/index.vue'

Vue.use(VueRouter)

const routes = [{
		path: "/",
		redirect: "/home"
	},
	/**
	 * 首页
	 */
	{
		path: '/home',
		name: 'Home',
		component: Home,
	},
	/**
	 * 案例
	 */
	{
		path: "/example",
		name: "Example",
		component: () =>
			import("../views/example/index.vue")
	},
	/**
	 * 个人中心
	 */
	{
		path: '/mine',
		name: 'Mine',
		component: () =>
			import('../views/mine/index.vue'),

	},
	{
		path: '/detail',
		name: 'detail',
		component: () =>
			import('../views/mine/detail/index.vue'),

	}
]

const router = new VueRouter({
	routes
})

export default router