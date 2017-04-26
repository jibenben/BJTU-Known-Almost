// reference https://my.oschina.net/u/242764/blog/483288
// todo 正则验证表单提交

export function username (name) {
  const re = new RegExp('^[\u4e00-\u9fa5] {0,}$')
  return re.test(name)
}

export function pwd (p) {
  // const re = new RegExp('[a-zA-Z]{5,17}')
  // return re.test(pwd)
  console.log(p.length)
  return p.length > 2
}

export function email (url) {
  // const re = new RegExp('^w+([-+.]w+)*@w+([-.]w+)*.w+([-.]w+)*$')
  // return re.test(url)
  return url.indexOf('@') === -1
}
