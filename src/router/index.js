import Vue from 'vue'
import VueRouter from 'vue-router'

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
		component: () =>
			import("@/views/main/home/index.vue"),
	},
	/**
	 * 案例
	 */
	{
		path: "/example",
		name: "Example",
		component: () =>
			import("@/views/main/example/index.vue"),
		children: []
	},
	/**
	 * 个人中心
	 */
	{
		path: '/mine',
		name: 'Mine',
		component: () =>
			import('@/views/main/mine/index.vue'),

	},
	/**
	 * 项目简介
	 */
	{
		path: '/projectIntroduce',
		name: 'projectIntroduce',
		meta: {
			name: "项目简介"
		},
		component: () =>
			import('@/views/main/mine/mineMenu/projectIntroduce/index.vue'),

	},
	/**
	 * 个人简介
	 */
	{
		path: '/myIntroduce',
		name: 'myIntroduce',
		meta: {
			name: "个人简介"
		},
		component: () =>
			import('@/views/main/mine/mineMenu/myIntroduce/index.vue'),

	},
]

const router = new VueRouter({
	routes
})

export default router