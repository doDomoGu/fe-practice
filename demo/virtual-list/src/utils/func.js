function throttle(fn, delay) {
  let timer = null

  return function () {
    let context = this
    let args = arguments
    // console.log(18, timer, this, arguments)
    if (!timer) {
      timer = setTimeout(function () {
        // console.log(23, timer, this, arguments)
        fn.apply(context, args)
        timer = null
      }, delay)
    }
  }
}

export { throttle }
