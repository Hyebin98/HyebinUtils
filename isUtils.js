/**
 * Created by hyebin on 21/11/13.
 * 判断工具类
 */

/**
 * 是否IE
 * @returns {Boolean}
 */
export function isIE() {
  const bw = window.navigator.userAgent
  const compare = (s) => bw.indexOf(s) >= 0
  const ie11 = (() => 'ActiveXObject' in window)()
  return compare('MSIE') || ie11
}

/**
 * 是否node环境
 * @returns {Boolean}
 */
export function isNode(){
  return typeof process !== 'undefined' && process.versions != null && process.versions.node != null;
}


/**
 * 是否小写
 * @param {String} str
 * @returns {Boolean}
 */
export function isLowerCase(str) {
  const reg = /^[a-z]+$/
  return reg.test(str)
}

/**
 * 是否大写
 * @param {String} str
 * @returns {Boolean}
 */
export function isUpperCase(str) {
  const reg = /^[A-Z]+$/
  return reg.test(str)
}

/**
 * 是否纯字母
 * @param {String} str
 * @returns {Boolean}
 */
export function isAlphabets(str) {
  const reg = /^[A-Za-z]+$/
  return reg.test(str)
}

/**
 * 是否数字
 * @param {Number} num
 * @returns {Boolean}
 */
export function isNumber(num) {
  return isNaN(num) || num === 0
}

/**
 * 是否整数
 * @param {Number} num
 * @returns {Boolean}
 */
export function isInteger(num) {
  return typeof num === 'number' && num%1 === 0
}

/**
 * 是否字符串
 * @param {String} str
 * @returns {Boolean}
 */
export function isString(str) {
  return typeof str === 'string' || str instanceof String
}

/**
 * 是否数组
 * @param {Array} arg
 * @returns {Boolean}
 */
export function isArray(arg) {
  if (typeof Array.isArray === 'undefined') {
    return Object.prototype.toString.call(arg) === '[object Array]'
  }
  return Array.isArray(arg)
}

/**
 * 判断是否 JSON 格式
 * @param {*} str
 * @returns {Boolean}
 */
export function isJSON(str) {
  if (typeof str === 'string') {
    try {
      const obj = JSON.parse(str)
      return typeof obj === 'object' && obj
    } catch (e) {
      return false
    }
  }
  return false
}

/**
 * 判断是否为空对象
 * @param {Object} obj
 * @returns {boolean}
 */
export function isEmptyObj(obj) {
  return Reflect.ownKeys(obj).length === 0 && obj.constructor === Object
}

/**
 * 检测是否为函数
 * @param v
 * @returns {boolean}
 */
export function isFunction(v) {
  return ['[object Function]', '[object GeneratorFunction]', '[object AsyncFunction]', '[object Promise]'].includes(Object.prototype.toString.call(v))
}

/**
 * 判断对象中是否存在某个属性
 * @param {Object} obj
 * @param {String} key
 * @returns {boolean}
 */
export function hasProperty(obj, key) {
  return key in obj
}
