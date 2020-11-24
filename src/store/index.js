import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	 userName:"",//用户姓名
  	 userPwd:"",//用户密码
  },
  mutations: {
  	setUserName(state,data){
  		state.userName=data;
  	},
  	setUserPwd(state,data){
  		state.userPwd=data;
  	},
  },
  actions: {
  },
  modules: {
  }
})
