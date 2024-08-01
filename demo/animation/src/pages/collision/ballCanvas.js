import Balls from './ball.js'

export default class BallCanvas {
  constructor(canvas) {
    this.canvas = canvas
    this.ctx = this.canvas.getContext('2d')
    this.balls = new Balls()
  }
  addBall() {
    this.balls.add({ id: this.balls.length })
  }

  updateBalls() {
    this.balls.update({ width: this.canvas.width, height: this.canvas.height })
  }

  #paintBall(ball) {
    this.ctx.beginPath()
    this.ctx.arc(ball.pos.x, ball.pos.y, ball.radius, 0, 2 * Math.PI)
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
