/* eslint-disable @typescript-eslint/no-this-alias */
/**
 * @description 常用函数
 * @author anshu
 */

function debounce (fn, delay = 2) {
  if (typeof fn !== 'function') return fn
  let timer = null
  function _debounce (...args) {
    const _this = this // 暂存fn指向的this，防止this指向window
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(_this, args) // 绑定fn的执行环境的this和参数
    }, delay * 1000)
  }
  _debounce.cancel = function () {
    clearTimeout(timer)
    timer = null
  }
  return _debounce
}
export { debounce }
