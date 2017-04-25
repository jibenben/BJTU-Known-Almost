// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import VueResource from 'vue-resource'
import store from './store'
import check from './plugin/check'
import axios from 'axios'
import * as filters from './filter'
import router from './router'
import '../node_modules/bootstrap/dist/js/bootstrap.min'
// import jq from 'jquery'

import App from './App'

// Vue.use(VueResource)
Vue.use(check)
// Vue.http.options.emulateJSON = true
Vue.prototype.$http = axios
// todo ismirror
Vue.prototype.isMirror = 'mirror'

Vue.directive('v-mail', {
  // 当绑定元素插入到 DOM 中。
  update: function (el) {
    // 聚焦元素
    el.focus()
  }
})

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

/* eslint-disable no-new */
new Vue({
  router,
  store,
  check,
  // jq,
  el: '#app',
  render: h => h(App)
})
