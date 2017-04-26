/**
 * Created by leelddd on 4/1/2017.
 */
let check = {}

check.install = function (Vue, options) {
  Vue.prototype.$check = {
    pwd: function (pwd) {
      return pwd.length > 3
    },
    email: function (mail) {
      return mail.indexOf('@') !== -1
    }
  }
  Vue.prototype.$email = function (url) {
    return url.indexOf('@') !== -1
  }
}

module.exports = check
