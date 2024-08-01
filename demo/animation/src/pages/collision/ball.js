import { Vector2 } from '@catsums/vector2'
import { v4 as uuidv4 } from 'uuid'

// 外接圆判定法 (碰撞检测)
const checkCircle = (circleA, circleB) => {
  const dx = circleA.x - circleB.x
  const dy = circleA.y - circleB.y
  const distance = Math.sqrt(dx * dx + dy * dy)
  return distance < circleA.radius + circleB.radius
}

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

  checkBallColision = (curBall, idx) => {
    for (let i = idx; i < this.balls.length; i++) {
      const nextBall = this.balls[i]
      if (checkCircle(curBall, nextBall)) {
        console.log('碰撞')
      }
    }
  }

  // 检查边界碰撞
  checkBorderCollision = (curBall, canvasRect) => {
    // 计算下一帧的位置
    const nextPos = Vector2.ADD(curBall.pos, curBall.velocity)
    // 检测边界碰撞

    if (
      // 是否超过右边界 (圆心的x轴坐标 + 半径 > 画布的宽度)
      nextPos.x + curBall.radius > canvasRect.width ||
      // 是否超过左边界 (圆心的x轴坐标 - 半径 < 0)
      nextPos.x - curBall.radius < 0
    ) {
      curBall.velocity.x = -1 * curBall.velocity.x // x轴速度分量反向
    }
    if (
      // 是否超过下边界 (圆心的y轴坐标 + 半径 > 画布的高度)
      nextPos.y + curBall.radius > canvasRect.height ||
      // 是否超过上边界 (圆心的y轴坐标 - 半径 < 0)
      nextPos.y - curBall.radius < 0
    ) {
      curBall.velocity.y = -1 * curBall.velocity.y // y轴速度分量反向
    }
  }

  update = (canvasRect) => {
    this.balls.forEach((ball) => {
      this.checkBorderCollision(ball, canvasRect)
      ball.update()
    })
  }
}

export default Balls
