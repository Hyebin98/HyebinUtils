/**
 * Created by hyebin on 21/11/13.
 * 文件工具类
 */

/**
 * 通过url下载文件
 * @param {String} url
 * @param {String} name
 */
export function downloadFileByUrl(url, name) {
  creatElementAndClick(url, name)
}

/**
 * 将二进制流转换成文件并下载
 * @param {String} data
 * @param {String} name
 */
export function downFileByBlob(data, name) {
  const blob = new Blob([data])
  const href = window.URL.createObjectURL(blob)
  creatElementAndClick(href, name)
  window.URL.revokeObjectURL(href)
}

/**
 * 创建一个a链接 并点击它
 * @param {String} url
 * @param {String} name
 */
function creatElementAndClick(url, name) {
  const downloadElement = document.createElement('a')
  downloadElement.href = url
  downloadElement.download = name ? decodeURIComponent(name) : '未知文件'
  document.body.appendChild(downloadElement)
  downloadElement.click()
  document.body.removeChild(downloadElement)
}