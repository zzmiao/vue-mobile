import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
/**
 * 引入vue开发移动端使用rem的适配方案
 */
import amfeFlexible from "amfe-flexible"
Vue.use(amfeFlexible)

/**
 * 引入swiper
 */
import VueAwesomeSwiper from 'vue-awesome-swiper'

// require styles
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

/**
 *获取可用工作区尺寸
 */
Vue.prototype.getClientSize = function() {
	let clientWidth = window.screen.availWidth;
	let clientHeight = window.screen.availHeight;
	return {
		clientWidth,
		clientHeight
	}
}

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')