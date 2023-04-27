/* eslint-disable @typescript-eslint/no-this-alias */
/**
 * @description 常用函数
 * @author anshu
 */

// 防抖
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

// toast提示
function toast (message, delay = 2000) {
  const toast = document.getElementsByClassName('toast-dom')
  if (toast?.length > 0) return
  const toastDOM = document.createElement('div')
  toastDOM.classList.add('toast-dom')
  toastDOM.innerHTML = message
  const body = document.body
  body.appendChild(toastDOM)
  setTimeout(() => {
    body.removeChild(toastDOM)
  }, delay)
}

// 返回
function useGoBackEffect (router) {
  function goBack () {
    router.back()
  }
  return goBack
}

export { debounce, toast, useGoBackEffect }
