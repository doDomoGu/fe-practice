// import Balls from './ball.js'

export default class Canvas {
  constructor(canvas) {
    this.canvas = canvas
    this.ctx = canvas.getContext('2d')
    this.width = canvas.width
    this.height = canvas.height

    this.sprites = []
    // this.balls = new Balls()

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

  // // 增加一个小球，ID自增
  // addBall() {
  //   this.balls.add({ id: this.balls.length })
  // }

  // //
  // updateBalls() {
  //   this.balls.update({ width: this.width, height: this.height })
  // }

  // paintBalls() {
  //   this.balls.balls.map((v) => {
  //     this.paintCricle(v)
  //   })
  // }
}
