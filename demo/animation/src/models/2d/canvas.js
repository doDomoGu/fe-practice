// import Balls from './ball.js'

export default class Canvas {
  sprites = []
  animating = true // 是否正在执行动画效果的标志位
  frame = 0 // 当前帧数

  constructor(canvas) {
    this.canvas = canvas
    this.ctx = canvas.getContext('2d')
    this.width = canvas.width
    this.height = canvas.height

    // this.maxFrame =
    // this.contentHistory = [] // 记录经过的每一帧的数据
    // this.maxHistoryCount = 10000 // 最多记录10000
    // this.curFrameNum = 0 // 当前帧数
  }

  // 添加精灵对象
  addSprite(sprite) {
    this.sprites.push(sprite)
  }

  // 清除画布
  clear() {
    this.ctx.clearRect(0, 0, this.width, this.height)
  }

  update() {
    this.sprites.map((v) => {
      v.update(this.ctx)
    })
  }

  paint() {
    this.sprites.map((v) => {
      v.paint(this.ctx)
    })
  }

  pause() {
    this.animating = false
  }

  play() {
    this.animating = true
  }

  stop(delay = -1) {
    if (delay > -1) {
      setTimeout(() => {
        this.animating = false
      }, delay * 1000)
    }
  }
}
