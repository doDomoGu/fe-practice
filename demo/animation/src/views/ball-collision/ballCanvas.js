import Balls from './ball.js'

export default class BallCanvas {
  constructor({ ctx, width, height }) {
    // this.canvas = canvas
    // this.ctx = this.canvas.getContext('2d')
    this.ctx = ctx
    this.width = width
    this.height = height
    this.balls = new Balls()

    this.contentHistory = [] // 记录经过的每一帧的数据
    this.maxHistoryCount = 10000 // 最多记录10000
    this.curFrameNum = 0 // 当前帧数
  }

  // 清除画布
  clear() {
    this.ctx.clearRect(0, 0, this.width, this.height)
  }

  // 增加一个小球，ID自增
  addBall() {
    this.balls.add({ id: this.balls.length })
  }

  //
  updateBalls() {
    this.balls.update({ width: this.width, height: this.height })
  }

  #paintBall(ball) {
    this.ctx.beginPath()
    this.ctx.arc(
      ball.coordinate.x,
      ball.coordinate.y,
      ball.radius,
      0,
      2 * Math.PI
    )
    this.ctx.fillStyle = ball.color
    this.ctx.fill()
    // ctx.lineWidth = 2
    // ctx.strokeStyle = '#003300'
    // ctx.stroke()
  }

  paintBalls() {
    this.balls.balls.map((v) => {
      this.#paintBall(v)
    })
  }
}
