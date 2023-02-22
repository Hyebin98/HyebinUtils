/**
 * Created by hyebin on 21/11/13.
 * 检验工具类
 */

/**
 * 校验手机号
 * @param {String} value
 * @param {Function} callback
 * @returns {*}
 */
export function validateTel(value, callback) {
  if (/1\d{10}$/.test(value) === false) {
    return callback(new Error('请输入正确的手机号'))
  } else {
    return callback()
  }
}

/**
 * 校验是否有效的协议/链接
 * @param {String} path
 * @returns {Boolean}
 */
export function validProtocol(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * 校验url
 * @param {String} url
 * @returns {Boolean}
 */
export function validURL(url) {
  const reg = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
  return reg.test(url)
}

/**
 * 校验邮箱
 * @param {String} email
 * @returns {Boolean}
 */
export function validEmail(email) {
  const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return reg.test(email)
}
