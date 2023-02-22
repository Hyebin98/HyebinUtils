/**
 * Created by hyebin on 21/11/13.
 * 数字处理工具类
 */

/**
 * 千分符
 * @param num
 * @param precision 小数
 * @returns {string}
 */
// 千分符
export function thousand(num, precision) {
  num = precision ? Number(num).toFixed(precision) : num
  num = num.toString().split('.') // 分隔小数点
  const arr = num[0].split('').reverse() // 转换成字符数组并且倒序排列
  let res = []
  for (let i = 0, len = arr.length; i < len; i++) {
    if (i % 3 === 0 && i !== 0) {
      res.push(',') // 添加分隔符
    }
    res.push(arr[i])
  }
  res.reverse() // 再次倒序成为正确的顺序
  if (num[1]) { // 如果有小数的话添加小数部分
    res = res.join('').concat('.' + num[1])
  } else {
    res = res.join('')
  }
  return res
}

/**
 * 转换百分比
 * @param point
 * @param precision
 * @returns {number}
 */
export function percent(point, precision) {
  let str = Number(point * 10000) / 100
  if (precision && precision > 2) {
    str = str.toFixed(precision - 2)
  }
  str += '%'
  return str
}

/**
 * 格式化数值
 * @param num
 * @param defaultNum
 * @returns {number}
 */
export function numberUtil(num, defaultNum) {
  try {
    return Number(num)
  } catch (e) {
    if (defaultNum || defaultNum === 0) {
      return defaultNum
    }
    throw e
  }
}
