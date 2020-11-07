import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import amfeFlexible from "amfe-flexible"
Vue.use(amfeFlexible)

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
Vue.prototype.getMenuHeight = function() {
	let menuHeight = this.$refs.menuWrap.offsetHeight;
	console.log(menuHeight)
}

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')