import { Vector2 } from '@catsums/vector2'
import { v4 as uuidv4 } from 'uuid'

class Ball {
  constructor({ x = 8, y = 8, radius = 8, id }) {
    this.id = id
    this.color = `#${uuidv4().slice(0, 6)}` // 绘制的颜色
    this.radius = radius // 小球半径
    this.pos = new Vector2(x, y) // 初始化小球的位置
    this.velocity = new Vector2(1 + 1 * Math.random(), 1 + 1 * Math.random()) // 小球的速度向量
  }
  update = () => {
    this.pos.add(this.velocity)
  }

  checkCollision = (canvasWidth, canvasHeight) => {
    // 计算下一帧的位置
    const nextPos = Vector2.ADD(this.pos, this.velocity)
    // 检测边界碰撞

    if (
      // 是否超过右边界 (圆心的x轴坐标 + 半径 > 画布的宽度)
      nextPos.x + this.radius > canvasWidth ||
      // 是否超过左边界 (圆心的x轴坐标 - 半径 < 0)
      nextPos.x - this.radius < 0
    ) {
      this.velocity.x = -1 * this.velocity.x // x轴速度分量反向
    }
    if (
      // 是否超过下边界 (圆心的y轴坐标 + 半径 > 画布的高度)
      nextPos.y + this.radius > canvasHeight ||
      // 是否超过上边界 (圆心的y轴坐标 - 半径 < 0)
      nextPos.y - this.radius < 0
    ) {
      this.velocity.y = -1 * this.velocity.y // y轴速度分量反向
    }
  }
}

class Balls {
  constructor() {
    this.balls = []
  }

  add = () => {
    this.balls.push(
      new Ball({
        id: this.balls.length
      })
    )
  }

  update = (canvasWidth, canvasHeight) => {
    this.balls.forEach((ball) => {
      ball.checkCollision(canvasWidth, canvasHeight)
      ball.update()
    })
  }
}

export default Balls
