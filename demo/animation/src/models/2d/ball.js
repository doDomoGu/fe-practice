import { Vector2 } from '@catsums/vector2'
import { v4 as uuidv4 } from 'uuid'
import { paintCricle, checkCricleBorderCollision } from './canvasApi'

export default class Ball {
  color = `#${uuidv4().slice(0, 6)}` // 绘制的颜色
  velocity = new Vector2(1 + 1 * Math.random(), 1 + 1 * Math.random()) // 速度向量

  constructor({ x = 8, y = 8, radius = 8, id }) {
    this.id = id
    this.radius = radius // 半径
    this.coordinate = new Vector2(x, y) // 圆心坐标
  }

  update(ctx) {
    const { velocity, coordinate } = checkCricleBorderCollision(this, {
      width: ctx.canvas.width,
      height: ctx.canvas.height
    })
    this.velocity = velocity
    this.coordinate = coordinate
    // this.coordinate.add(this.velocity)
  }

  paint(ctx) {
    paintCricle(
      ctx,
      this.coordinate.x,
      this.coordinate.y,
      this.radius,
      this.color
    )
  }
}
