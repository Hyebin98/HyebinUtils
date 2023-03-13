/**
 * Created by hyebin on 21/11/13.
 * 格式化、转化工具类
 */

/**
 * 字符串首字母大写
 * @param {String} str
 * @return {String}
 */
export function stringCapitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

/**
 * 翻转字符串
 * @param {String} str
 * @return {String}
 */
export function stringReverse(str) {
  return str.split('').reverse().join('')
}

/**
 * 翻转字符串
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @return {String}
 */
export function rgbToHex(r, g, b) {
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
}