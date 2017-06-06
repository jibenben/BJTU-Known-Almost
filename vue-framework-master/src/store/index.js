import Vue from 'vue'
import Vuex from 'vuex'
import utils from '../lib/utils'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '',
    userInfo: {
      username: '',
      uid: '',
      name: ''
    }
  },
  mutations: {
    increment (state, n) {
      console.log(n)
      state.query = n
    },
    login (state, status) {
      utils.setCookie('isLogin', 'true')
      // state.isLogin = status
    },
    uInfo (state, info) {
      state.token = info.mb_token
      state.uid = info.userid
      state.uname = info.username
      state.vinfo.vbank = info.vbank
      state.vinfo.vcompany = info.vcompany
      state.vinfo.vtruename = info.vtruename
    }
  },
  actions: {
    increment ({commit}, n) {
      commit('increment', n)
    },
    login ({commit}, status) {
      commit('login', status)
    },
    uInfo ({commit}, info) {
      commit('uinfo', info)
    }
  },
  getters: {
    isLogin (state) {
      console.log(utils.getCookie('isLogin') !== null)
      return utils.getCookie('isLogin') !== null
    },
    query (state) {
      return state.query
    },
    token (state) {
      return state.token
    },
    version (state) {
      return state.version
    },
    uid (state) {
      return state.uid
    },
    username (state) {
      return state.uname
    }
  }
})
