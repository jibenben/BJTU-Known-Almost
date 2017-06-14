import Vue from 'vue'
import Vuex from 'vuex'
import utils from '../lib/utils'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '',
    userInfo: {
      email: '',
      username: '',
      uid: '',
      name: '',
      type: ''
    },
    qInfo: {
      qTitle: '',
      qContent: '',
      qTime: '',
      qTopic: []
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
    setUserInfo (state, info) {
      state.userInfo.username = info.username
      state.userInfo.uid = info.uid
      state.userInfo.name = info.name
    },
    setUid (state, uid) {
      state.userInfo.uid = uid
    },
    setUserEmail (state, email) {
      state.userInfo.email = email
    },
    setUserType (state, type) {
      state.userInfo.type = type
    },
    setToken (state, token) {
      state.token = token
    },
    setQTitle (state, title) {
      state.qInfo.qTitle = title
    },
    setQContent (state, content) {
      state.qInfo.qContent = content
    },
    setQTime (state, time) {
      state.qInfo.qTime = time
    },
    setQTopic (state, topic) {
      state.qInfo.qTopic = topic
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
      return state.userInfo.uid
    },
    username (state) {
      return state.userInfo.username
    },
    qInfo (state) {
      return state.qInfo
    },
    uInfo (state) {
      return state.userInfo
    }
  }
})
