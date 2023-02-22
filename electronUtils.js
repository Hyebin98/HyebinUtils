/**
 * Created by hyebin on 21/11/13.
 * Electron工具类
 */

/**
 * 判断是否运行在Electron中
 * @returns {boolean}
 */
export function isRunningInElectron() {
  const userAgent = navigator.userAgent.toLowerCase()
  return (userAgent.indexOf(' electron/') > -1 || window.electron)
}
