import { Vector2 } from '@catsums/vector2'

// 绘制Circle
export function paintCricle(ctx, x, y, radius, color) {
  ctx.beginPath()
  ctx.arc(x, y, radius, 0, 2 * Math.PI)
  ctx.fillStyle = color // ball.color
  ctx.fill()
  // ctx.lineWidth = 2
  // ctx.strokeStyle = '#003300'
  // ctx.stroke()
}

// 检测当前Cricle图形对象与画布边界的碰撞，根据结果，返回小球下一帧所在位置 以及 碰撞后的速度向量
export function checkCricleBorderCollision(obj, canvasRect) {
  // 碰撞后的速度向量
  const velocity = new Vector2(obj.velocity)
  // 下一帧的位置
  const coordinate = Vector2.ADD(obj.coordinate, obj.velocity)

  // 检测边界碰撞
  // 是否超过右边界 (圆心的x轴坐标 + 半径 > 画布的宽度)
  if (coordinate.x + obj.radius > canvasRect.width) {
    coordinate.x = canvasRect.width - (coordinate.x - canvasRect.width)

    // canvasRect.width -
    // obj.coordinate.x -
    // (coordinate.x - canvasRect.width)
    velocity.x = -1 * velocity.x // x轴速度分量反向
  }
  // 是否超过左边界 (圆心的x轴坐标 - 半径 < 0)
  else if (coordinate.x - obj.radius < 0) {
    coordinate.x = obj.coordinate.x + coordinate.x
    velocity.x = -1 * velocity.x // x轴速度分量反向
  }

  if (
    // 是否超过下边界 (圆心的y轴坐标 + 半径 > 画布的高度)
    coordinate.y + obj.radius >
    canvasRect.height
  ) {
    coordinate.y = canvasRect.height - (coordinate.y - canvasRect.height)
    // canvasRect.height -
    // obj.coordinate.y -
    // (coordinate.y - canvasRect.height)
    velocity.y = -1 * velocity.y // y轴速度分量反向
  }
  // 是否超过上边界 (圆心的y轴坐标 - 半径 < 0)
  else if (coordinate.y - obj.radius < 0) {
    coordinate.y = obj.coordinate.y + coordinate.y
    velocity.y = -1 * velocity.y // y轴速度分量反向
  }

  return { velocity, coordinate }
}
