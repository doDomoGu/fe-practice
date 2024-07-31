const paintBall = (ctx, ball) => {
  var x = ball.pos.x
  var y = ball.pos.y
  var radius = ball.radius
  // console.log({ x, y, radius })
  // 绘制圆
  ctx.beginPath()
  ctx.arc(x, y, radius, 0, 2 * Math.PI)
  ctx.fillStyle = ball.color
  ctx.fill()
  // ctx.lineWidth = 2
  // ctx.strokeStyle = '#003300'
  // ctx.stroke()
}

const paintBalls = (ctx, balls) => {
  balls.map((v) => {
    paintBall(ctx, v)
  })
}

export { paintBall, paintBalls }
