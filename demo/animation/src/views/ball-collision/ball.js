import { Vector2 } from '@catsums/vector2'
import { v4 as uuidv4 } from 'uuid'

// import { checkCircle } from './func'

class Ball {
  color = `#${uuidv4().slice(0, 6)}` // 绘制的颜色
  velocity = new Vector2(1 + 1 * Math.random(), 1 + 1 * Math.random()) // 速度向量

  constructor({ x = 8, y = 8, radius = 8, id }) {
    this.id = id
    this.radius = radius // 半径
    this.coordinate = new Vector2(x, y) // 圆心坐标
  }

  // setCoordinate(velocity){
  //   this.coordinate.add(velocity)
  // }

  // setVelocity(velocity) {
  //   this.velocity = velocity
  // }
}

class Balls {
  balls = []
  // constructor() {
  // }

  add() {
    this.balls.push(
      new Ball({
        id: this.balls.length
      })
    )
  }

  // checkBallColision = (curBall, idx) => {
  //   for (let i = idx; i < this.balls.length; i++) {
  //     const nextBall = this.balls[i]
  //     if (checkCircle(curBall, nextBall)) {
  //       console.log('碰撞')
  //     }
  //   }
  // }

  // 计算当前小球的下一帧位置并检测边界碰撞，根据结果，返回小球下一帧所在位置 以及 碰撞后的速度向量
  checkBorderCollision = (curBall, canvasRect) => {
    // 碰撞后的速度向量
    const velocity = new Vector2(curBall.velocity)
    // 下一帧的位置
    const nextCoordinate = Vector2.ADD(curBall.coordinate, curBall.velocity)

    // 检测边界碰撞
    // 是否超过右边界 (圆心的x轴坐标 + 半径 > 画布的宽度)
    if (nextCoordinate.x + curBall.radius > canvasRect.width) {
      nextCoordinate.x =
        canvasRect.width - (nextCoordinate.x - canvasRect.width)

      // canvasRect.width -
      // curBall.coordinate.x -
      // (nextCoordinate.x - canvasRect.width)
      velocity.x = -1 * velocity.x // x轴速度分量反向
    }
    // 是否超过左边界 (圆心的x轴坐标 - 半径 < 0)
    else if (nextCoordinate.x - curBall.radius < 0) {
      nextCoordinate.x = curBall.coordinate.x + nextCoordinate.x
      velocity.x = -1 * velocity.x // x轴速度分量反向
    }

    if (
      // 是否超过下边界 (圆心的y轴坐标 + 半径 > 画布的高度)
      nextCoordinate.y + curBall.radius >
      canvasRect.height
    ) {
      nextCoordinate.y =
        canvasRect.height - (nextCoordinate.y - canvasRect.height)
      // canvasRect.height -
      // curBall.coordinate.y -
      // (nextCoordinate.y - canvasRect.height)
      velocity.y = -1 * velocity.y // y轴速度分量反向
    }
    // 是否超过上边界 (圆心的y轴坐标 - 半径 < 0)
    else if (nextCoordinate.y - curBall.radius < 0) {
      nextCoordinate.y = curBall.coordinate.y + nextCoordinate.y
      velocity.y = -1 * velocity.y // y轴速度分量反向
    }

    return [velocity, nextCoordinate]
  }

  update = (canvasRect) => {
    this.balls.forEach((ball) => {
      const [velocity, coordinate] = this.checkBorderCollision(ball, canvasRect)
      ball.velocity = velocity
      ball.coordinate = coordinate
      // ball.update()
    })
    if (this.balls.length > 0) {
      console.log(
        this.balls[0].coordinate.x,
        this.balls[0].coordinate.y,
        this.balls[0].velocity.x,
        this.balls[0].velocity.y
      )
    }
  }
}

export default Balls

export { Ball }
